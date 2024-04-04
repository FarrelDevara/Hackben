import Image from 'next/image';

async function fetchData(){
  try {
    // const data = await fetch()

    // return data
  } catch (error) {
    
  }
}

export default async function Home() {

  const data = await fetchData()
  return (
    <>
  
      {/* carousel */}
      <div className="flex justify-center mt-5">
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
        <div className="mb-5 mt-5">
          <h1 className="text-center text-red-500 font-bold text-xl ">RECOMMENDATION</h1>
        </div>
        {/* card */}
        <div>
          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ml-5">
            <div className="relative mx-4 mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/menu/f0b9d580d9386a60506086a819fd1de4-1660019294911"
                alt="img-blur-shadow"
              />
            </div>
            <div className="p-6 text-center">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Paket Hemat</h5>
              <h1 className="text-red-500 font-bold">Rp. 25.000</h1>
            </div>
            <div className="p-6 pt-0 flex justify-between text-red-500 ">
              <button>Details</button>
              <button
                className="select-none rounded-full bg-yellow-500 py-2 px-2 text-center align-middle font-sans text-xs font-bold text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                + Order
              </button>
            </div>
          </div>
        </div>
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

    </>
  );
}
