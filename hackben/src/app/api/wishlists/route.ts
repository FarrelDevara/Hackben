import User from "@/db/models/users";
import Wishlist from "@/db/models/wishlists";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const body = await request.json();

    await Wishlist.findAllByUserId(body);

    return Response.json({ message: "MASOOKK" });
  } catch (error) {}
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const userId = request.headers.get("x-user-id");
    console.log(userId, " userId dari header");

    body.userId = userId;
    // console.log(body, "<<<body di post");

    const findWishlist = await Wishlist.findOneByProductId(body.productId);
    // console.log(findWishlist, "<<<<< find wish list");
    if (!findWishlist) {
      await Wishlist.createOne(body);
    } else if (findWishlist.userId.toString() === body.userId) {
      throw "Cant Wishlist Same Item";
    } 

    return NextResponse.json({ data: { body } }, { status: 201 });
  } catch (error) {
    // console.log(error, "error di route");

    if (error === "Cant Wishlist Same Item") {
      return NextResponse.json({ error }, { status: 401 });
    }
    // return NextResponse.json({ error });
  }
}
