import Wishlist from "@/db/models/wishlists";

export async function GET(request: Request){
    try {
        const body = await request.json();

        console.log("masookk");
        await Wishlist.findAllByUserId(body);
        
        return Response.json({ message: 'MASOOKK' });
    } catch (error) {
        
    }
}

export async function POST(request: Request){
    try {
        const body = await request.json()

        await Wishlist.createOne(body)
    } catch (error) {
        
    }
}