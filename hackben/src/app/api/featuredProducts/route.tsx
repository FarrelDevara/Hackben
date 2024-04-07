
import Product from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: Request) => {
    try {
        const data = await Product.findFeaturedProducts()
        return NextResponse.json({
            data: data
        },{
            status: 200
        })
      
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        },{
            status: 500
        })
    }
}