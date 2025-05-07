import {pool} from "@/lib/db"
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    console.log(process.env.NEXT_PUBLIC_HOST)
    const createTable = `
    CREATE TABLE IF NOT EXISTS shopping(
        ID SERIAL PRIMARY KEY,
        title VARCHAR NOT NULL,
        description VARCHAR NOT NULL,
        category VARCHAR NOT NULL,
        price INTEGER NOT NULL,
        image VARCHAR NOT NULL
    )
`
    const result = await pool.query(createTable)

    if(!result){
        console.log("Произошла ошибка при создании таблицы")
    }

    const allValues = await pool.query("SELECT * FROM shopping")
    return NextResponse.json({message:"Success",values:allValues.rows},{status:200})
}

export async function POST(req:NextRequest){
    const body = await req.json()
    const {title,description,category,price,image} = body
    if(!title || !description || !category || !price || !image){
        return NextResponse.json({error:"Пожалуста заполните все данные"},{status:400})
    }
    const insertInto = `INSERT INTO shopping(title,description,category,price,image) VALUES($1,$2,$3,$4,$5)`
    await pool.query(insertInto,[title,description,category,parseInt(price),image])
    return NextResponse.json({success:"Данные успешно добавлены"},{status:201})
}


