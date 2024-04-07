import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { readPayloadJose } from "./db/helpers/jwt";

export async function middleware(request: NextRequest) {
  // console.log(request.nextUrl.pathname);

  if (request.nextUrl.pathname.startsWith("/api/wishlists")) {
    // console.log("masoookkk");

    const auth = cookies().get("Authorization")?.value;

    if (!auth) {
      return NextResponse.json(
        {
          errMessage: "Invalid Token",
        },
        {
          status: 401,
        }
      );
    }

    const [type, token] = auth?.split(" ");

    if (type !== "Bearer") {
      return NextResponse.json(
        {
          errMessage: "Invalid Token",
        },
        {
          status: 401,
        }
      );
    }

    const decoded = await readPayloadJose<{ id: string; email: string }>(
      token
    );

    const newHeaders = new Headers(request.headers);
    newHeaders.set("x-user-id", decoded.id);
    newHeaders.set("x-user-email", decoded.email);
    // And produce a response with the new headers
    return NextResponse.next({
      request: {
        // New request headers
        headers: newHeaders,
      },
    });
  }

  if (request.nextUrl.pathname.startsWith("/wishlists")) {
    
    const auth = cookies().get("Authorization")?.value;

    if (!auth) {
      request.nextUrl.pathname = "/login"
      return NextResponse.redirect(request.nextUrl)
    }
  }
}

//matching
export const config = {
  matcher: ["/api/wishlists/:path*", "/wishlists/:path*"],
};
