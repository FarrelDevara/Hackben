import Image from 'next/image';

export default function Login() {
  return (
    <>
      {/* component */}
      <div className="bg-white flex justify-center items-center h-screen w-full" data-theme="light">
        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full h-full lg:w-1/2 flex-col flex justify-center ">
          <h1 className="text-2xl font-semibold mb-4 text-red-500">Login</h1>
          <form
            action="#"  
            method="POST"
          >
            {/* Username Input */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-black"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-red-500"
                autoComplete="off"
              />
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-red-500"
                autoComplete="off"
              />
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </button>
          </form>
          {/* Sign up  Link */}
          <div className="mt-6 text-black text-center font-semibold">
            <h1 className='mb-3'>Don't have an account?</h1>
            <h1 className='mb-3'>Become a HackBen Friend and get a special offer!</h1>
          </div>
          <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Register
            </button>
        </div>
        {/* Left: Image */}
        <div className="w-1/2 h-screen hidden lg:block mt-20">
          <img
            src="https://www.hokben.co.id/assets/img/img1.jpeg"
            alt="Placeholder Image"
            className="mt-20 items-center"
          />
        </div>
      </div>
    </>
  );
}
