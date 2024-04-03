import User from '@/db/models/users';

export async function GET(request: Request) {
  const users = await User.findAll();

  return Response.json({data: users});
}
