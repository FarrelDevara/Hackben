"use client"

import Swal from "sweetalert2";

const AddWishlistButton: React.FC<{ productId: object }> = ({ productId }) => {

  const addWishlist = async () => {
    try {
      
      const response = await fetch('/api/wishlists', {
        method: 'POST',
        body: JSON.stringify({ productId }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // console.log(response, "response <<<<<<<<<<<<<<<<<<<<<<<");

      if (!response.ok) {
        const error = await response.json();
        // console.log(error, " di response");
        
        throw error.error
      }

      Swal.fire({
        title: 'Success',
        text: "Added to your Wishlist",
        icon: 'success',
      });
      // console.log('masuk');
    } catch (error) {
      console.log(error, "error");
      Swal.fire({
        title: 'Error',
        text: typeof error === 'string' ? error : "Internal Server Error",
        icon: 'error',
      });
    }
  };

    return (
      <button
        onClick={addWishlist}
        className="select-none rounded-full bg-yellow-500 py-2 px-2 text-center align-middle font-sans text-xs font-bold text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        + Wishlist
      </button>
    );
  };

export default AddWishlistButton;