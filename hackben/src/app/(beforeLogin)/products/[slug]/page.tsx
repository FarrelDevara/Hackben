
import Card from '@/app/components/card';
import { ProductType } from '@/db/models/products';

import type { Metadata, ResolvingMetadata } from 'next';

type RequestParam  = {
  params: { slug: string };
};

export async function generateMetadata({ params }: RequestParam, parent: ResolvingMetadata): Promise<Metadata> {

  const slug = params.slug;
  const product = await fetchData(slug);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Hokben - " + product.data.name,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  };
}   

async function fetchData(slug: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/products/${slug}`, { cache: 'no-store' });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function ProductDetail({ params }: { params: { slug: string } }) {
    const product: { data: ProductType } = await fetchData(params.slug);

  return (
    <>
      <div className="text-center font-bold mt-10">Products</div>

      <div className="mt-10 grid grid-cols-4">
        {/* {data?.map((item) => (
          <Card data={item} />
        ))} */}
        {/* <Card data={data} /> */}
      </div>
    </>
  );
}
