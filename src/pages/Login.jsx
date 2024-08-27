import React, { useState } from "react";

const commonStyles = {
  input:
    "w-full pl-4 p-2 border border-border rounded-full focus:outline-none focus:ring focus:ring-ring",
  label: "block text-white text-muted-foreground mb-1",
  button:
    "bg-x3 text-primary-foreground font-bold rounded-full w-28 p-2 text-white rounded hover:bg-opacity-90",
};

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  //handle mail change
  const handleEmailChange = (e) => {
    setUserData({
      ...userData,
      email: e.target.value,
    });
  };

  //handle password change
  const handlePasswordChange = (e) => {
    setUserData({
      ...userData,
      password: e.target.value,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="bg-card bg-x1 p-6 rounded-3xl shadow-lg w-full max-w-md">
        <img src="/images/logo.png" alt="MediCare" className="mx-auto" />
        <form>
          <div className="mb-4 mt-8">
            <label className={commonStyles.label} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={commonStyles.input}
              placeholder="Enter your email here"
              value={userData.email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className={commonStyles.label} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={commonStyles.input}
              placeholder="Enter your password here"
              value={userData.password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="flex items-center justify-center mt-8">
            <button
              onClick={() => console.log(userData)}
              type="submit"
              className={commonStyles.button}
            >
              LOGIN
            </button>
          </div>
        </form>
        <p className="text-muted-foreground text-white text-center mt-8">
          Don't have an account?
          <br />
          <a href="#" className="text-accent underline text-xs">
            Pharmacist Sign Up
          </a>{" "}
          |{" "}
          <a href="#" className="text-accent underline text-xs">
            Customer Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;