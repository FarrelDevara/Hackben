'use client';

import Card from '@/app/components/card';
import { useEffect, useState } from 'react';

export default function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
        const data = await response.json();

        // console.log(data);
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <div className="text-center font-bold mt-10">Products</div>

      <div className="mt-10 grid grid-cols-4">
        {data?.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </>
  );
}
