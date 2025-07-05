// import { NextRequest, NextResponse } from "next/server";
// import { headers } from "next/headers";
// import { auth } from "@/lib/auth";
// import aj, { createMiddleware, detectBot, shield } from "./lib/arcjet";

// export async function middleware(request: NextRequest) {
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });

//   if (!session) {
//     return NextResponse.redirect(new URL("/sign-in", request.url));
//   }

//   return NextResponse.next();
// }
// const validate = aj
//   .withRule(
//     shield({
//       mode: "LIVE",
//     })
//   )
//   .withRule(
//     detectBot({
//       mode: "LIVE",
//       allow: ["CATEGORY:SEARCH_ENGINE", "G00G1E_CRAWLER"], // allow other bots if you want to.
//     })
//   );

// export default createMiddleware(validate);

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
// };

// // ⨯ [TypeError: Body is unusable: Body has already been read]


import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
import { auth } from "@/lib/auth";
import aj, { createMiddleware, detectBot, shield } from "./lib/arcjet";

// Step 1: Arcjet validation middleware
const validate = aj
  .withRule(
    shield({ mode: "LIVE" })
  )
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "G00G1E_CRAWLER"],
    })
  );

const arcjetMiddleware = createMiddleware(validate);

// Main middleware
export async function middleware(request: NextRequest, event: NextFetchEvent) {
  // Run Arcjet bot protection
  const arcjetResult = await arcjetMiddleware(request, event);
  if (arcjetResult) return arcjetResult;

  // Session check
  const session = await auth.api.getSession({
    headers: request.headers, // ✅ Use actual Headers object
  });

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};
