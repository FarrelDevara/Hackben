import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex-1 items-center justify-center ">
      <div className="mb-10">
        <h1 className="text-center text-red-500 font-bold text-xl">RECOMMENDATION</h1>
      </div>
        <div>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                  src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/menu/f0b9d580d9386a60506086a819fd1de4-1660019294911"
                  alt="img-blur-shadow"
                />
              </div>
              <div className="p-6 text-center">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Paket Hemat</h5>
                <h1 className="text-red-500 font-bold">
                 Rp. 25.000
                </h1>
              </div>
              <div className="p-6 pt-0 flex-1 justify-between text-red-500">
                <button>
                  Details
                </button>
                <button
                  className="select-none rounded-full bg-yellow-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  + Order
                </button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
