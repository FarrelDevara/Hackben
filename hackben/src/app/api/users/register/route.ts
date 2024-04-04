import User from '@/db/models/users';
import { z } from 'zod';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await User.createOne(body);

    return Response.json({ message: 'Register Successfully' });
  } catch (error) {
   //  console.log(error, '<<<<<<<<<<<<');

    if (error instanceof z.ZodError) {
      return Response.json({ error: error.issues[0].message }, { status: 400 });
    }

    if (error === 'Email must be unique') {
      return Response.json({ error }, { status: 400 })
    }
   
    return Response.json({ error: error, message: 'Internal Server Error' }, { status: 500 });
  }
}
