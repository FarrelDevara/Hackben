"use client";

import CardWishlist from "@/app/components/cardWishlist";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Wishlist() {
    const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(process.env.URL + `/api/wishlists/`, {
          method: "GET",
          cache: "no-store",
          headers:{
            'Content-Type' : 'application/json'
            },
        });
        console.log(response);
        
        if (!response.ok) {
          return redirect('/login')
        }

        const data = await response.json();
        setWishlist(data.data);
      } catch (error) {
        console.log(error);
        
        console.error("Error fetching wishlist item:", error);
      }
    }
    fetchData();
  }, []);

  // console.log(wishlist);
  

  return (
    <>
      {/* <div className="text-center font-bold mt-10">Products</div> */}
      <h2 className="text-center text-2xl font-bold mb-4 bg-yellow-400 text-white w-full py-2 mt-10">
        Wishlist | メニュー
      </h2>
      <div className="grid grid-cols-4">
        {wishlist?.map((item, index) => (
          <CardWishlist data={item} key={index}/> 
        ))}
      </div>
    </>
  );
}
