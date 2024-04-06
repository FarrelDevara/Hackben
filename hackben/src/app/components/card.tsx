import { ProductType } from "@/db/models/products";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default function Card({data} : {data: ProductType}, ){

    
    
    // console.log(data);
    async function addWishlist(_id: ObjectId){
    
      try {
        const response = await fetch('/api/wishlists',{
          method: "POST",
          body : JSON.stringify({productId: _id})
        })

        if (!response.ok) {
          throw await response.json
        }
        console.log("masuk");
  
      } catch (error) {
        console.log(error);
        
      }
      
    }
    
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
              <button
                onClick={()=>{addWishlist(data?._id)}}
                className="select-none rounded-full bg-yellow-500 py-2 px-2 text-center align-middle font-sans text-xs font-bold text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                + Order
              </button>
            </div>
          </div>
        </div>
    )
}