import Image from 'next/image';
import { MyResponse } from '../register/page';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default function Login() {
  async function loginAction(formData: FormData){
    'use server'

    const rawFormData = {
      email : formData.get('email'),
      password : formData.get('password')
    }

    console.log(rawFormData, "<<<<<<<<<<<<<formdata");
    
    const response = await fetch('http://localhost:3000/api/users/login',{
      cache: 'no-store',
      method: 'POST',
      headers:{
      'Content-Type' : 'application/json'
      },
      body: JSON.stringify(rawFormData)
    })
    // console.log(response, "<<<<<<<<<<<<response");
    
    const result = await response.json() as MyResponse<{access_token: string}>
    // console.log(result, "<result");
    
    if (!response.ok) {
      redirect('/login?error' + result.error)
    }

    if (result.data) {
      cookies().set('Authorization', 'Bearer ' + result.data.access_token)
    }

    return redirect('/')

    // console.log(access_token);
  }
  return (
    <>
      {/* component */}
      <div className="bg-white flex justify-center items-center h-screen w-full" data-theme="light">
        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full h-full lg:w-1/2 flex-col flex justify-center ">
          <h1 className="text-2xl font-semibold mb-4 text-red-500">Login</h1>
          <form
            action={loginAction} 
            method="POST"
          >
            {/* Username Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-black"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
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
