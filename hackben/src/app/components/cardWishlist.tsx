
import Link from "next/link";
import AddWishlistButton from "@/app/components/addWishlist";
import Swal from "sweetalert2";
import { ShowWishList } from "@/db/models/wishlists";
export default function CardWishlist({data} : {data : ShowWishList}){

    console.log(data, "<<<di card");
    // async function addWishlist(_id: ObjectId){
    
    //   try {
    //     const response = await fetch('/api/wishlists',{
    //       method: "POST",
    //       body : JSON.stringify({productId: _id})
    //     })

    //     if (!response.ok) {
    //       throw await response.json()
    //     }
    //     console.log("masuk");
  
    //   } catch (error) {
    //     console.log(error);
    //     Swal.fire({
    //       title: "Good job!",
    //       text: "You clicked the button!",
    //       icon: "success"
    //     });
    //   }
      
    // }
    
    return(
        <div className="mt-10">
          <div className="relative flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ml-5">
            <div className="relative mx-4 mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src={data?.productDetails.thumbnail}
                alt="img-blur-shadow"
              />
            </div>
            <div className="p-6 text-center">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{data?.productDetails.name}</h5>
              <h1 className="text-red-500 font-bold">Rp. {data?.productDetails.price.toLocaleString()}</h1>
            </div>
            <div className="p-6 pt-0 flex justify-between text-red-500 ">
              <Link href={'/products/'+ data?.productDetails.slug}>Details</Link>
              {/* <AddWishlistButton productId={data?.productId}/> */}
            </div>
          </div>
        </div>
    )
}