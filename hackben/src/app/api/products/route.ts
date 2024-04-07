import { db } from "@/db/config";
import Product from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  let data;
  try {
    const searchParams = request.nextUrl.searchParams.get("search");
    const search = searchParams || "";
    const pageQueryParam = request.nextUrl.searchParams.get("page");
    // console.log(searchParams);

    const page = pageQueryParam ? parseInt(pageQueryParam) : 1;
    // console.log(page, "<<<< page");

    let query = {};
    if (search) {
      query = {
        name: {
          $regex: search,
          $options: "i",
        },
      };
    }

    if (search) {
      // console.log("masuk?");
      // console.log(search);
      data = await db
        .collection("products")
        .find({
          name: {
            $regex: search,
            $options: "i",
          },
        })
        .toArray();
        
      console.log(data);
    } else {
    //   console.log("masuk tanpa search");
      data = await Product.findAndSortAll(page);
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
