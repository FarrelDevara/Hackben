import { db } from "@/db/config";
import Product from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    let data;
    try {
        // console.log("masuk?");
        const searchParams = request.nextUrl.searchParams.get('search')
        // data = await Product.findAll()
        
        if (searchParams) {
            data = await db.collection("products").find(
                {
                    name: {
                        $regex: searchParams, $options: "i"
                    }
                }
            ).toArray()
        }else{
            data = await Product.findAll()
        }
        // console.log(data);
        // const data = await Product.findAll()
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        }, {
            status: 500
        })
    }
}