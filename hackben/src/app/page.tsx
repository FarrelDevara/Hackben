import Image from 'next/image';

export default function Home() {
  return (
    <>
        <nav className="navbar bg-base-100 ">
          <div className="flex-1">
            <a
              href="/"
              className="btn btn-ghost text-xl text-red-500"
            >
              HackBen
            </a>
          </div>
          <div className="flex-1">
            <a href="/">Home</a>
            <a href="/" className='mr-4 ml-4'>Product</a>
            <a href="/">Wishlist</a>
          </div>

          <div className="flex-none">
            <div className="card-actions">
              <button className="btn bg-red-700 btn-block rounded-full px-4 py-4 text-white">Order Now</button>
            </div>
          </div>
        </nav>

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
            <div className="p-6 pt-0 flex-1 justify-between text-red-500">
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
        {/* footer */}
        <footer className="footer p-10 text-base-content mt-5 bg-white items-center">
          <nav>
            <h6 className="footer-title">Links</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">Terms and Conditions</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <div className="flex justify-center items-center">
            <img
              src="https://www.hokben.co.id/assets/img/hokbendelivery.png"
              alt=""
              className="w-30 h-20"
            />
          </div>
          <nav className="ml-auto">
            <h6 className="footer-title">Follow Us</h6>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
        <img
          src="https://www.hokben.co.id/assets/img/group_539.png"
          alt=""
        />
      </div>
    </>
  );
}
