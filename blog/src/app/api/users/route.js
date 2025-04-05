import { user } from "@/util/db"
import { NextResponse } from "next/server";

export const GET = () =>{
    const data = user;
    return NextResponse.json(data,{status:200});
    
}