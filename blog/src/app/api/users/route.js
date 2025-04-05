import { NextResponse } from "next/server"

export  const GET= () =>{
    return NextResponse.json({name:'Tirth',age:22,city:'Ahmedabad'},{status:200});
}