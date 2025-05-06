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

export const getData = async()=>{
    let datas:ProductType[]
    await axios.get('https://fakestoreapi.com/products')
    .then(response => {
        console.log(response.data)
        datas = response.data
    });
    return datas!
}