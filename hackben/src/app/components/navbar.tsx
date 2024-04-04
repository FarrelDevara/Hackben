import { FaCartShopping } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
export default function Navbar() {
  return (
    <>
      <nav style={{ backgroundImage: 'url("/bg-navbar.png")' }}>
        {/* bg from bg-navbar.png */}
        <div className="flex justify-end">
          <div className="flex mr-5 text-white items-center">
          <p className='mr-2'>Login</p>
          <IoPerson className="text-white" />
          </div>
        </div>
      </nav>
      <div className="flex justify-center">
        <nav className="flex px-2 mt-8 bg-base-100 w-full h-10 items-center justify-between ">
          <div className="flex ">
            {/* <a
        href="/"
        className="text-xl text-red-500"
      >
        HackBen
      </a> */}
            <img
              src="https://upload.wikimedia.org/wikipedia/id/f/f1/HokBen_new_logo.png"
              alt=""
              className="h-20 w-20"
            />
          </div>
          <div className="flex-1 ml-5 ">
            <a href="/">Home</a>
            <a
              href="/"
              className="mr-4 ml-4"
            >
              Product
            </a>
            <a href="/">Wishlist</a>
          </div>

          <div className="flex justify-end items-center">
            <div className="card-actions mr-2">
              <button className=" bg-red-600 btn-block rounded-full px-4 py-2">
                <FaCartShopping className=" text-white hover:text-black" />
              </button>
            </div>
            <div className="card-actions">
              <button className=" bg-red-600 btn-block rounded-full px-2 py-2 ">
                <p className="text-white hover:text-black text-semibold text-sm">Order Now</p>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
