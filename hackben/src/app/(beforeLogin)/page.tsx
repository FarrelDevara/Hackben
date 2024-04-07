import { ProductType } from '@/db/models/products';
import Image from 'next/image';
import Card from '../components/card';
import Link from 'next/link';

async function fetchData(){
  try {
    const response = await fetch("http://localhost:3000/api/featuredProducts", {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {

  const product: { data: ProductType[] } = await fetchData();
  
  return (
    <>
  
      {/* carousel */}
      <div className='flex flex-col'>
      <div className="flex justify-center mt-8">
        <div className="carousel w-2/3 h-1/6">
          <div
            id="slide1"
            className="carousel-item relative w-full"
          >
            <img
              src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/d84048ebbaea17db648ba68e5d7d2901-1701399967241"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide4"
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full"
          >
            <img
              src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/b5e1b40f081b3e589d5b2e396edbc22e-1675216494339"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide1"
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full"
          >
            <img
              src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/7c8ec314a07e1ee01bb02c0ad0dc7ea7-1680335831001"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide2"
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide4"
            className="carousel-item relative w-full"
          >
            <img
              src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/6ac88edc2faefd9738ee958a127f9206-1691641088761"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide3"
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="flex-1 items-center justify-center">
        <div className=" mt-5">
          <h1 className="text-center text-red-500 font-bold text-xl ">RECOMMENDATION</h1>
        </div>
      </div>
      <div className="grid grid-cols-5">
      {product?.data?.map((item,index)=>(
            <Card data={item} key={index}/>
        ))}
      </div>

      <div className="btn flex items-center justify-center mt-5 mx-52">
        <Link href={'/products'} className=''>More Menus...</Link>
      </div>
      
      {/* company profile */}
      <div className="">
  <section className="py-8 w-full mx-auto">
    <h2 className="text-center text-2xl font-bold mb-4 bg-yellow-400 text-white w-full">Our Profile</h2>
    <div className="flex md:grid-cols-2 gap-8 w-full px-20">
      <div className='flex-1'>
        <h3 className="text-xl font-semibold mb-2 text-center text-red-500">Vision</h3>
        <p className="text-gray-700">
          To be the leading provider of Premier Japanese Casual Food with organization to inspire people to do their best
        </p>
      </div>
      <div className='flex-1'>
        <h3 className="text-xl font-semibold mb-2 text-center text-red-500">Mission</h3>
        <p className="text-gray-700">
          We make top-notch quality and service a high priority in providing integrity food to customers. We strive to create better ways to add value for stakeholders through innovation and technology. We commit to our people by providing opportunities to grow and excel.
        </p>
      </div>
    </div>
  </section>
</div>
</div>
    </>
  );
}
