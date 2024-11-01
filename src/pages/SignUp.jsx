import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Loading from "../components/Loading";

// Shared Tailwind CSS classes
const inputClasses =
  "rounded-full focus:outline-none focus:ring focus:ring-ring pl-4 p-2 w-full text-x1";
const buttonClasses =
  "bg-secondary font-semibold bg-x3 text-primary-foreground text-white hover:bg-opasity-90 rounded-full p-2 w-28";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (password !== passwordConf) {
      window.alert("Password mismatched");
    } else {
      console.log(name + " " + password);
      setLoading(true);
      sessionStorage.setItem("email", name);
      axios
        .post("http://localhost:8081/api/v1/system-users/visitor/signup", {
          username: name,
          password: password,
        })
        .then((res) => {
          setLoading(false);
          console.log(res);
          if (res.status == 201) {
            navigate("/sign-up/confirmation");
          }
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {loading && <Loading />}
        <div className="flex my-14 mx-4 justify-center bg-background">
          <div className="bg-card bg-x1 p-6 rounded-3xl shadow-lg w-full max-w-sm">
            <div className="flex justify-center mb-4 h-36">
              <img
                aria-hidden="true"
                alt="MediCare logo"
                src="/images/logo.png"
              />
            </div>
            <div className="mt-4">
              <div className="mb-4">
                <label
                  id="email"
                  className="block text-white text-muted-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClasses}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  id="password"
                  className="block text-white text-muted-foreground"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputClasses}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  id="confirm-password"
                  className="block text-white text-muted-foreground"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  value={passwordConf}
                  onChange={(e) => setPasswordConf(e.target.value)}
                  className={inputClasses}
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <div className="flex justify-center ">
                <button
                  onClick={handleSubmit}
                  // type="submit"
                  className={buttonClasses}
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
