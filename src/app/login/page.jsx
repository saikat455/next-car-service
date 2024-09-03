// "use client";

// import React from 'react';
// import Link from "next/link";
// import { signIn } from "next-auth/react";
// import { useRouter, useSearchParams } from "next/navigation";
// import SocialSignin from "@/components/shared/SocialSignin";

// const Page = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const path = searchParams.get("redirect");

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;
    
//     try {
//       const result = await signIn("credentials", {
//         email,
//         password,
//         redirect: false,
//       });

//       if (result?.ok) {
//         router.push(path || "/");
//       } else {
//         // Handle login errors
//         console.error("Login failed:", result?.error);
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="w-full max-w-sm p-8 bg-white border rounded-lg shadow-md">
//         <h6 className="text-2xl font-semibold text-primary text-center mb-6">
//           Sign In
//         </h6>
//         <form onSubmit={handleLogin}>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             placeholder="your email"
//             className="mt-2 mb-4 w-full input input-bordered"
//             required
//           />
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             placeholder="your password"
//             className="mt-2 mb-4 w-full input input-bordered"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full btn btn-primary text-white mt-4 text-lg"
//           >
//             Sign In
//           </button>
//         </form>
//         <div className="text-center mt-6">
//           <h6 className="mb-4">or sign in with</h6>
//           <SocialSignin />
//           <h6 className="mt-4">
//             Not have an account?{" "}
//             <Link className="text-primary font-semibold" href={"/signup"}>
//               Sign Up
//             </Link>
//           </h6>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";

import Link from "next/link";
import React  from "react";
import { signIn, useSession } from "next-auth/react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SocialSignin from "@/components/shared/SocialSignin";
const Page = () => {
  const router = useRouter();
  const session = useSession();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });
  };

  return (
      <div className="container px-24 mx-auto py-24">
        <div className="grid grid-cols-2 gap-12 items-center">
          
          <div className="border-2 p-12">
            <h6 className="text-3xl font-semibold text-primary text-center mb-12">
              Sign In
            </h6>
            <form onSubmit={handleLogin} action="">
              <label htmlFor="email">Email</label> <br />
              <input
                type="text"
                name="email"
                placeholder="your email"
                className="mt-3 w-full input input-bordered"
              />
              <br /> <br />
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                name="password"
                placeholder="your password"
                className="w-full mt-3 input input-bordered"
              />
              <br />
              <button
                type="submit"
                className="w-full btn btn-primary mt-12 text-lg"
              >
                Sign In
              </button>
            </form>
            <div>
              <h6 className="my-12 text-center">or sign in with</h6>
              <SocialSignin />
              <h6 className="my-12 text-center">
                not have account ?{" "}
                <Link className="text-primary font-semibold" href={"/signup"}>
                  Sign Up
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Page;