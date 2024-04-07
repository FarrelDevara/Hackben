import User from "@/db/models/users";
import Wishlist from "@/db/models/wishlists";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // const body = await request.json();
    // console.log("masuk get wishlist");
    
    const userId = request.headers.get("x-user-id") as string
    // console.log(userId);
    if (!userId) {
      return NextResponse.redirect('/login')
    }
    
    const wishlist = await Wishlist.findAllByUserId(userId);

    return NextResponse.json({ data : wishlist});
  } catch (error) {}
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const userId = request.headers.get("x-user-id");
    // console.log(userId, " userId dari header");

    body.userId = userId;
    // console.log(body, "<<<body di post");

    const findWishlist = await Wishlist.findAllByUserId(body.userId);

    findWishlist.map((item)=>{
      // console.log(item.productId,new ObjectId(body.productId));
      
      // console.log(item.productId.equals(new ObjectId(body.productId)));
      
      if (item.productId.equals(new ObjectId(body.productId))) {
        throw "Can't wishlist the same item"
      }
    })

    await Wishlist.createOne(body);

    return NextResponse.json({ data: { body } }, { status: 201 });
  } catch (error) {
    console.log(error, "error di route");

    if (error === "Cant Wishlist Same Item") {
      return NextResponse.json({ error }, { status: 401 });
    }
    // return NextResponse.json({ error });
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    // console.log("masuk get wishlist", body);
    
    const userId = request.headers.get("x-user-id") as string
    // console.log(userId);
    
    await Wishlist.deleteOne(body.productId);

    return Response.json({ message: 'Wishlist Deleted' });
  } catch (error) {}
}
