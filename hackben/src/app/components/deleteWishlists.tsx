import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import Swal from "sweetalert2";

export async function deleteWishlist(_id: ObjectId){
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
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Item Doesnt Exists",
        icon: "error"
      });
    }

    return(
        <button
            // onClick={deleteWishlist}
            className="select-none rounded-full bg-red-500 py-2 px-2 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Delete
          </button>
    )
  }