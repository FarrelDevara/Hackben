import AddWishlistButton from "@/app/components/addWishlist";
import Card from "@/app/components/card";
import { ProductType } from "@/db/models/products";
import { ObjectId } from "mongodb";

import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Swal from "sweetalert2";

type RequestParam = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: RequestParam,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const product = await fetchData(slug);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Hokben - " + product.data.name,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

async function fetchData(slug: string) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_URL + `/api/products/${slug}`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product: { data: ProductType } = await fetchData(params.slug);

  return (
    <>
      <h2 className="text-center text-2xl font-bold mb-4 bg-yellow-400 text-white w-full py-2 mt-10">
        {product?.data.name} | お得なセット
      </h2>
      <div className="flex md:grid-cols-2 gap-8 w-full px-20">
        <div className="flex-1">
          <img
            src={product?.data.images[0]}
            style={{ width: 350, height: 350 }}
            className="ml-10"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-red-500 font-bold">
            Rp. {product?.data.price.toLocaleString()}
          </h1>
          <h3 className="mt-5">{product?.data.description}</h3>

          <div className="flex items-center text-center mt-5">
            <Link
              href={"/products"}
              className="border-red-600 flex border rounded-full  px-2 py-1 p-10 mr-5"
            >
              <p className="text-red-500  hover:text-black font-bold text-sm">
                Back
              </p>
            </Link>

            <div className="flex">
              <AddWishlistButton productId={product?.data._id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
