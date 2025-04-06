import { user } from "@/util/db"
import { NextResponse } from "next/server";

export const GET = () =>{
    const data = user;
    return NextResponse.json(data,{status:200});
    
}

export const POST = async(request) =>{
    let payload = await request.json();

    if(!payload.name || !payload.age || !payload.email)
    {
        return NextResponse.json({result:"Required field not found",success:false},{status:400})
    }
    // const data = user;
    return NextResponse.json({result:"New User created successfully",success:true},{status:201});
    
}