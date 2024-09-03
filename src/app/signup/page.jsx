// "use client";

// import SocialSignin from "@/components/shared/SocialSignin";
// import Link from "next/link";
// import React from "react";
// import { BsGithub, BsGoogle } from "react-icons/bs";

// const SignUpPage = () => {
//   const handleSignUp = async (event) => {
//     event.preventDefault();
//     const newUser = {
//         name: event.target.name.value,
//         email: event.target.email.value,
//         password: event.target.password.value,
//     };
//     const resp = await fetch ("http://localhost:3000/signup/api", {
//         method: "POST",
//         body: JSON.stringify(newUser),
//         headers: {
//           "content-type": "application/json"
//         }
//       })
//       if (resp.status === 200) {
//         event.target.reset();
//       }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen ">
//       <div className="w-full max-w-sm p-6 bg-white border rounded shadow-md">
//         <h6 className="text-xl font-semibold text-primary text-center mb-4">
//           Sign Up
//         </h6>
//         <form onSubmit={handleSignUp}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             className="mb-3 w-full input input-bordered"
//           />
//           <input
//             type="text"
//             name="email"
//             placeholder="Email"
//             className="mb-3 w-full input input-bordered"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="mb-3 w-full input input-bordered"
//           />
//           <button
//             type="submit"
//             className="w-full btn btn-primary text-white"
//           >
//             Sign Up
//           </button>
//         </form>
//         <div className="text-center mt-4">
//             <SocialSignin></SocialSignin>
//         {/* <div className="flex items-center justify-center space-x-3 mb-4">
//             <button className="btn p-5 flex items-center justify-center text-primary text-xl"><BsGithub/></button>
//             <button className="btn p-5 flex items-center justify-center text-green-500 text-xl"><BsGoogle/></button>
//           </div> */}
//           <h6>
//             Have an account?{" "}
//             <Link className="text-primary font-semibold" href="/login">
//               Sign In
//             </Link>
//           </h6>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;


"use client";

import SocialSignin from "@/components/shared/SocialSignin";
import Link from "next/link";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SignUpPage = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();
    const newUser = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
    };

    try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup/api`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (resp.status === 200) {
        event.target.reset();
        // Optionally redirect to login page or show a success message
      } else {
        // Handle errors or show user feedback
        console.error("Sign up failed:", await resp.text());
      }
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-sm p-6 bg-white border rounded shadow-md">
        <h6 className="text-xl font-semibold text-primary text-center mb-4">
          Sign Up
        </h6>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="mb-3 w-full input input-bordered"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mb-3 w-full input input-bordered"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="mb-3 w-full input input-bordered"
            required
          />
          <button
            type="submit"
            className="w-full btn btn-primary text-white"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
            <SocialSignin />
          <h6>
            Have an account?{" "}
            <Link className="text-primary font-semibold" href="/login">
              Sign In
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
