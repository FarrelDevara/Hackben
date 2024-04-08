import { cookies } from "next/headers";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import LogoutButton from "./logoutButton";
import background from '../../../public/bg-navbar.jpg'
export default function Navbar() {
  // console.log(cookies().get('Authorization'));

  return (
    <>
      <nav
        className="py-1 bg-red-500"
      >
        <div className="flex justify-end mx-52">
          <div className="flex mr-5 text-white items-center">
            {cookies().get("Authorization") ? (
              <LogoutButton />
            ) : (
              <Link href={"/login"} className="mr-2">
                Login
              </Link>
            )}

            <IoPerson className="text-white" />
          </div>
        </div>
      </nav>

      <div className="flex justify-center">
        <nav className="flex px-2 mt-10 bg-base-100 w-full h-10 items-center justify-between mx-36">
          <div className="flex ">
            <img
              src="https://upload.wikimedia.org/wikipedia/id/f/f1/HokBen_new_logo.png"
              alt=""
              className="h-24 w-24"
            />
          </div>
          <div className="flex-1 ml-5 ">
            <Link href={"/"}>Home</Link>
            <Link href={"/products"} className="mr-4 ml-4">
              Product
            </Link>
            <Link href={"/wishlists"}>Wishlist</Link>
            {/* {cookies().get("Authorization") ? <Link href={"/wishlists"}>Wishlist</Link> : ""} */}
          </div>

          <div className="flex justify-end items-center">
            
            <div className="card-actions">
              <button className=" bg-red-600 btn-block rounded-full px-2 py-2 ">
                <Link href={"/wishlists"} className="text-white hover:text-black text-semibold text-sm">
                  Order Now
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
