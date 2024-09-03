"use client";

import React from 'react';
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import SocialSignin from "@/components/shared/SocialSignin";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.ok) {
        router.push(path || "/");
      } else {
        // Handle login errors
        console.error("Login failed:", result?.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-8 bg-white border rounded-lg shadow-md">
        <h6 className="text-2xl font-semibold text-primary text-center mb-6">
          Sign In
        </h6>
        <form onSubmit={handleLogin}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="your email"
            className="mt-2 mb-4 w-full input input-bordered"
            required
          />
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="your password"
            className="mt-2 mb-4 w-full input input-bordered"
            required
          />
          <button
            type="submit"
            className="w-full btn btn-primary text-white mt-4 text-lg"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-6">
          <h6 className="mb-4">or sign in with</h6>
          <SocialSignin />
          <h6 className="mt-4">
            Not have an account?{" "}
            <Link className="text-primary font-semibold" href={"/signup"}>
              Sign Up
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Page;
