import { Pool } from "pg";
export const pool = new Pool({
    user:process.env.NEXT_PUBLIC_USER,
    database:process.env.NEXT_PUBLIC_DB_NAME,
    password:process.env.NEXT_PUBLIC_PASSWORD,
    host:process.env.NEXT_PUBLIC_HOST,
    port:parseInt(process.env.NEXT_PUBLIC_PORT || "5424",10),
    ssl:false
}) 