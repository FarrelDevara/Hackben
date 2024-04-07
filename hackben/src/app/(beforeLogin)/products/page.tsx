"use client";

import Card from "@/app/components/card";
import { useEffect, useState } from "react";

export default function Product(request: Request) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);
  let query = search.replaceAll(" ", "%20");
  // console.log(request.headers, "<<<<<<<<<<<<");
  async function SearchData(query: string) {
    let response = await fetch(
      `http://localhost:3000/api/products?search=` + query,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    setData((await response.json()).data);
  }
  
  useEffect(() => {
    if (search) {
      SearchData(search);
    }
  }, [search]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api/products", {
          cache: "no-store",
        });
        const data = await response.json();
        // console.log(data,"<<<<<<<<<<<<<<<<<<<<<");
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

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
