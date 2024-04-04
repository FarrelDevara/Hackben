import Product from "@/db/models/products";

export async function GET(request: Request){
    try {

        const data = await Product.findAll()
        // console.log(data);
        
        return Response.json({ data });
    } catch (error) {
        
    }
}