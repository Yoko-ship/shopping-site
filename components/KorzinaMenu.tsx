'use client'
import { setModalOpen } from "@/store/korzinaStore"
import { useAppSelect } from "@/store/hooks"
import { useAppDispatch } from "@/store/hooks"
import { takeItems } from "@/store/korzinaStore"
import { useEffect, useState } from "react"
export default function KorzinaButton(){
    const items = useAppSelect((state) => state.korzina.items)
    const [count,setCount] = useState(0)
    const dispatch = useAppDispatch()

    useEffect(() =>{
        const count = items.reduce((sum,item) => sum + item.count,0)
        setCount(count)
    },[items])
    const modalHandler = async() =>{
        dispatch(setModalOpen())
        const response = await fetch("/api/modal",{method:"GET"})
        const data = await response.json()
        const item = data.values 
        dispatch(takeItems(item))
    }
    return(
        <button onClick={modalHandler}>Корзина <p>{count}</p></button>
    )
}