"use client";

import Card from "@/app/components/card";
import { ProductType } from "@/db/models/products";
import { useEffect, useState } from "react";

export default function Product() {
  const [data, setData] = useState<ProductType[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState<string>("");

  async function fetchData(pageNumber: number) {
    try {
      if (search) {
        
        const response = await fetch(process.env.URL + `/api/products?search=${search}`, {
        cache: "no-store",
        headers:{
          'Content-Type' : 'application/json'
          },
      });
      const newData = await response.json();
      setData([])
      setData(newData.data)
      }else{
        
        const response = await fetch(process.env.URL + `/api/products?page=${pageNumber}&search=${search}`, {
          cache: "no-store",
        });
        const newData = await response.json();
        
        setData(data.concat(newData.data));
        setHasMore(newData.data.length > 0);
        setLoading(false);
      }
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Function to handle infinite scroll
  function handleScroll() {
    if (!loading && hasMore && window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
      setLoading(true);
      setPage(page + 1);
    }
  }

  useEffect(() => {
    fetchData(page); 
  }, [page, search]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  // console.log(data);

  return (
    <>
      {/* <div className="text-center font-bold mt-10">Products</div> */}
      <div className="text-center text-2xl font-bold mb-4 bg-yellow-400 text-white w-full py-2 mt-10 flex justify-between">
        <div className="flex justify-center items-center flex-grow">
          {" "}
          {/* Wrapper for MENU heading */}
          <h2 className="">MENU | メニュー</h2>
        </div>
      </div>

      <div className="flex justify-end mr-1">
        <label className="input input-bordered gap-2 flex-row flex items-center">
          <input
            type="text"
            className=""
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div className="grid grid-cols-4">
        {data?.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </>
  );
}
