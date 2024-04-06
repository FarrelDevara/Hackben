import Image from 'next/image';
import { redirect } from 'next/navigation';

export type MyResponse<T = {}> = {
  error? : string;
  data? : T
}

export default function Register() {
  const registerAction = async (formData: FormData) =>{
    'use server'
    // const email = formData.get('email')
    // const password = formData.get('password')

    const rawFormData = {
      name: formData.get('name'),
      username: formData.get('username'),
      email : formData.get('email'),
      password : formData.get('password')
    }

    // console.log(rawFormData, "<<<<<<<<register");
    
    const response = await fetch(process.env.URL + '/api/users/register',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rawFormData)
    })
    const result = await response.json() as MyResponse<{access_token: string}>
    // console.log(result);
    
    // console.log(response);
    if (!response.ok) {
      // console.log("gagal boskuu");
      redirect('/register?error' + result.error)
    }



    return redirect('/login')
    
  }
  return (
<>
      {/* component */}
      <div className="bg-white flex justify-center items-center h-screen w-full">
        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full h-full lg:w-1/2 flex-col flex justify-center">
          <h1 className="text-2xl font-bold mb-4 text-red-600">Register</h1>
          <h2 className="font-bold mb-4">Personal Data</h2>
          <form
            action={registerAction}
            method="POST"
          >
            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-red-500"
                autoComplete="off"
              />
            </div>
             {/* Username Input */}
             <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-600"
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
             {/* Email Input */}
             <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
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
              Register
            </button>
          </form>
          {/* Sign up  Link */}
          <div className="mt-6 text-white-500 text-center">
            <a
              href="#"
              className="hover:underline"
            >
              Already have an account? Login
            </a>
          </div>
        </div>
      </div>
      </>
  );
}
