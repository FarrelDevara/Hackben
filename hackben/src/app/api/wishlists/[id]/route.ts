import Wishlist from "@/db/models/wishlists";

export async function GET(request: Request){
    try {
        const body = await request.json();

        console.log("masookk");
        await Wishlist.findAllById(body);
        
        return Response.json({ message: 'MASOOKK' });
    } catch (error) {
        
    }
}