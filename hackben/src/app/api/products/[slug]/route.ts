import Product from "@/db/models/products";

type RequestParam = {
    params: {
        slug: string
    }
}

export async function GET(request: Request, { params }: RequestParam){
    const data = await Product.findBySlug(params.slug)
    return Response.json({ data: data })
}