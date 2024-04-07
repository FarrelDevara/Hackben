import { ProductType } from "@/db/models/products";
import Link from "next/link";
import AddWishlistButton from "@/app/components/addWishlist";

export default function Card({data} : {data: ProductType} ){

    return(
        <div className="mt-10">
          <div className="relative flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ml-5">
            <div className="relative mx-4 mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src={data?.thumbnail}
                alt="img-blur-shadow"
              />
            </div>
            <div className="p-6 text-center">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{data?.name}</h5>
              <h1 className="text-red-500 font-bold">Rp. {data?.price.toLocaleString()}</h1>
            </div>
            <div className="p-6 pt-0 flex justify-between text-red-500 ">
              <Link href={'/products/'+ data?.slug}>Details</Link>
              <AddWishlistButton productId={data?._id}/>

            </div>
          </div>
        </div>
    )
}