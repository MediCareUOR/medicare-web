import React from "react";

// Shared Tailwind CSS classes
const inputClasses =
  "rounded-full focus:outline-none focus:ring focus:ring-ring pl-4 p-2 w-full";
const buttonClasses =
  "bg-secondary bg-x3 text-primary-foreground text-white hover:bg-opasity-90 rounded-full p-2 w-28";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="bg-card bg-x1 p-6 rounded-3xl shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-4">
          <img aria-hidden="true" alt="MediCare logo" src="/images/logo.png" />
        </div>
        <form className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-muted-foreground"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={inputClasses}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white text-muted-foreground"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={inputClasses}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-white text-muted-foreground"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className={inputClasses}
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className={buttonClasses}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
