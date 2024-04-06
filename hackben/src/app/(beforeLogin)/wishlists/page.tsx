"use client";

import CardWishlist from "@/app/components/cardWishlist";
import { useEffect, useState } from "react";

export default function Wishlist(request: Request) {
    const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        ("use client");
        const response = await fetch(`http://localhost:3000/api/wishlists/`, {
          method: "GET",
          cache: "no-store"
        });

        if (!response.ok) {
          throw "error"
        }

        const data = await response.json();
        setWishlist(data.data);
      } catch (error) {
        console.error("Error fetching wishlist item:", error);
      }
    }
    fetchData();
  }, []);

  console.log(wishlist);
  

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
