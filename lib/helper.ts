import axios from "axios"


export interface ProductType{
    id:number,
    category:string,
    description:string,
    image:string,
    price:number,
    rating:{count:number,rate:number},
    title:string
}



export const postData = async(prevValue:any,formData:FormData) =>{
    const title = formData.get("title");
    const description = formData.get("description");
    const category = formData.get("category");
    const price = formData.get("price");
    const image = formData.get("image")

    if(!title || !description || !category || !price || !image){
        return {error:"Пожалуста заполните все поля!"}
    }
    const id = Date.now()
    let message;
    await axios.post("/api/data",{title,description,category,price,image})
    .then(response => {
        message = "Вы успешно добавили товар"
    })
    return {message}
}

