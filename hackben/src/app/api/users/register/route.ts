import User from '@/db/models/users';

export async function POST(request: Request) {
   try {
    // console.log("masuk");

    const body = await request.json();

    await User.createOne(body);
  
    return Response.json({ message: 'Register Successfully' });
   } catch (error) {
    console.log(error);

   }
}

