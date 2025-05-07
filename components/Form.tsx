'use client'
import { postData } from "@/lib/helper"
import { useActionState } from "react"
import classes from "@/app/add/page.module.css"
export const Form = ({children}:React.PropsWithChildren) =>{
    const [data,formAction,isPending] = useActionState(postData,null)    
    

    return(
        <form action={formAction}>
            {children}
            <p className={classes.error}>{data?.error}</p>
            <p className={classes.success}>{data?.message}</p>
        </form>


    )
} 