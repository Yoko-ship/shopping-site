import { pool } from "@/lib/db"
import { NextResponse,NextRequest} from "next/server"
export async function GET(){
    const createTable = `
    CREATE TABLE IF NOT EXISTS korzina(
        ID SERIAL PRIMARY KEY,
        title VARCHAR NOT NULL,
        price INTEGER NOT NULL,
        count INTEGER NOT NULL
    )
`
    const result = await pool.query(createTable)

    if(!result){
        console.log("Произошла ошибка при создании таблицы")
    }
    const response = await pool.query("SELECT * FROM korzina")
    return NextResponse.json({message:"Success",values:response.rows},{status:200})

}

export async function POST(req:NextRequest){
    const body = await req.json()
    const {title,price,count} = body
    if(!title || !price || !count){
        return NextResponse.json({error:"Пожалуста заполните все данные"},{status:400})
    }
    const titleValues = await pool.query(`SELECT * FROM korzina WHERE title = $1`,[title])
    console.log(titleValues.rows.length) 
    if(titleValues.rows.length > 0){
        const existingItem = titleValues.rows[0]
        const newCount = existingItem.count +1
        await pool.query(`UPDATE korzina SET count = $1 WHERE title = $2`,[newCount,title])
    }else{
        const insertTable = 'INSERT INTO korzina(title,price,count) VALUES($1,$2,$3)'
        await pool.query(insertTable,[title,parseInt(price),parseInt(count)])
    }
    return NextResponse.json({success:"Данные успешно добавлены"},{status:201})
}
export async function DELETE(req:NextRequest){
    const body = await req.json()
    const {title} = body
    if(!title){
        return NextResponse.json({error:"Пожалуста укажите title"},{status:400})
    }
    await pool.query("DELETE FROM korzina WHERE title = $1",[title])
    return NextResponse.json({success:"Вы успешно удалили товар"},{status:201})
}
