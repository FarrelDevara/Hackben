'use client';

import Card from '@/app/components/card';
import { useEffect, useState } from 'react';

export default function Product(request: Request) {
  const [data, setData] = useState([]);

  // console.log(request.headers, "<<<<<<<<<<<<");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
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
      <h2 className="text-center text-2xl font-bold mb-4 bg-yellow-400 text-white w-full py-2 mt-10">MENU | メニュー</h2>
      <div className="grid grid-cols-4">
        {data?.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </>
  );
}
