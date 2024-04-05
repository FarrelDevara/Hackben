import { comparePassword } from "@/db/helpers/bcrypt";
import { createToken } from "@/db/helpers/jwt";
import User from "@/db/models/users";
import { NextResponse } from "next/server";
import { z } from "zod";

type InputLogin = {
  email: string;
  password: string;
};

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(request: Request) {
  try {
    const body: InputLogin = await request.json();

    const parsedData = userSchema.safeParse(body);

    if (parsedData.success === false) {
      throw parsedData.error;
    }

    const findUser = await User.findOneByEmail(body.email);

    if (!findUser) {
      throw "Invalid email/password";
    }

    const compare = comparePassword(body.password, findUser.password)

    if (!compare) {
        throw "Invalid email/password"
    }

    const payload = {
        id: findUser._id,
        email: findUser.email
    }

    const access_token = createToken(payload)
    // console.log(access_token, "<<<<<<<<<<<<<<<<");
    

    return NextResponse.json(
        { data: {access_token}},
        { status: 201 }
      );

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }

    if (error === "Invalid email/password") {
      return NextResponse.json({ error }, { status: 401 });
    }

    return NextResponse.json(
      { error: error, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
