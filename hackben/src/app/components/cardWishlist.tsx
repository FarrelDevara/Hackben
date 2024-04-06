'use client'

import Link from "next/link";
import Swal from "sweetalert2";
import { ShowWishList } from "@/db/models/wishlists";
import { ObjectId } from "mongodb";
import { useRouter } from "next/router";
import { revalidatePath } from "next/cache";


export default function CardWishlist({ data }: { data: ShowWishList }) {
  // console.log(data, "<<<di card");
  // const router = useRouter();

  async function deleteWishlist(_id: ObjectId){
    // console.log("masuk");
    
    try {
      const response = await fetch('/api/wishlists',{
        method: "DELETE",
        cache: "no-store",
        body : JSON.stringify({productId: _id})
      })

      if (!response.ok) {
        throw await response.json()
      }
      // console.log("masuk");

      Swal.fire({
        title: "Success",
        text: "Item Has Been Deleted",
        icon: "success"
      });
      
      revalidatePath('/wishlists')
      // router.push('/wishlists')
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Item Doesnt Exists",
        icon: "error"
      });
    }

  }

  return (
    <div className="mt-10">
      <div className="relative flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ml-5">
        <div className="relative mx-4 mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img src={data?.productDetails.thumbnail} alt="img-blur-shadow" />
        </div>
        <div className="p-6 text-center">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {data?.productDetails.name}
          </h5>
          <h1 className="text-red-500 font-bold">
            Rp. {data?.productDetails.price.toLocaleString()}
          </h1>
        </div>
        <div className="p-6 pt-0 flex justify-end text-red-500 ">
          {/* <Link href={"/products/" + data?.productDetails.slug}>Details</Link> */}
          {/* <AddWishlistButton productId={data?.productId}/> */}
          <button
            onClick={()=>{deleteWishlist(data?._id)}}
            className="select-none rounded-full bg-red-500 py-2 px-2 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
