import Product from "@/db/models/products";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    try {
        // console.log("masuk?");
        const data = await Product.findAll()
        // console.log(data);
        return Response.json({ data });
    } catch (error) {
        
    }
}