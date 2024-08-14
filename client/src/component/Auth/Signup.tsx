import React from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

function Signup() {
  const { register } = useForm();
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center"></div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="my-3 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {/* {error && <p className="text-red-600 mt-8 text-center">{error}</p>} */}

        <form>
          <div className="space-y-5">
            <Input
              placeholder="Enter your Name"
              type="text"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            <div>
              <select
                id="city"
                {...register("city", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm outline-none"
              >
                <option value="" disabled>
                  Select a city
                </option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
                <option value="houston">Houston</option>
              </select>
            </div>

            <Button type="submit">Create Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
