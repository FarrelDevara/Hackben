import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {

    return ( 
    <>
    <nav className="navbar bg-base-100 w-full">
    <div className="flex">
      <a
        href="/"
        className="text-xl text-red-500"
      >
        HackBen
      </a>
    </div>
    <div className="flex-1 ml-5">
      <a href="/">Home</a>
      <a href="/" className='mr-4 ml-4'>Product</a>
      <a href="/">Wishlist</a>
    </div>

    <div className="flex justify-end">
      <div className="card-actions mr-2">
        <button className=" bg-red-600 btn-block rounded-full px-2 py-1 ">
        <FaCartShopping className=' text-white hover:text-black'/>
        </button>
      </div>
      <div className="card-actions">
        <button className=" bg-red-600 btn-block rounded-full px-2 py-1 ">
          <p className="text-white hover:text-black text-semibold text-sm">Order Now</p>
        </button>
      </div>
    </div>
  </nav>
    <nav className="navbar bg-base-100 w-full">
    <div className="flex">
      <a
        href="/"
        className="text-xl text-red-500"
      >
        HackBen
      </a>
    </div>
    <div className="flex-1 ml-5">
      <a href="/">Home</a>
      <a href="/" className='mr-4 ml-4'>Product</a>
      <a href="/">Wishlist</a>
    </div>

    <div className="flex justify-end">
      <div className="card-actions mr-2">
        <button className=" bg-red-600 btn-block rounded-full px-2 py-1 ">
        <FaCartShopping className=' text-white hover:text-black'/>
        </button>
      </div>
      <div className="card-actions">
        <button className=" bg-red-600 btn-block rounded-full px-2 py-1 ">
          <p className="text-white hover:text-black text-semibold text-sm">Order Now</p>
        </button>
      </div>
    </div>
  </nav>
    </>
    )
}
