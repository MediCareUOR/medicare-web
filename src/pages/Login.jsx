import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer from "../components/Footer";

const commonStyles = {
  input:
    "w-full pl-4 text-x1 p-2 rounded-full focus:outline-none focus:ring focus:ring-ring",
  label: "block text-white text-muted-foreground mb-1",
  button:
    "bg-x3 text-primary-foreground font-bold rounded-full w-28 p-2 text-white rounded hover:bg-opacity-90",
};

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // if (sessionStorage.getItem("role") !== "GUEST") {
    //   window.alert("You are already logged in");
    //   navigate("/");
    // }
  }, []);

  // Handle form submission
  const handleSubmit = () => {
    if (name != "" || password != "") {
      setLoading(true);
      axios
        .post("http://localhost:8081/login", {
          username: name,
          password: password,
        })
        .then((res) => {
          setLoading(false);
          if (res.status == 200) {
            let token = res.headers.authorization;
            const decoded = jwtDecode(token);

            console.log(decoded);

            sessionStorage.setItem("SavedToken", token);
            let userRole;

            if (decoded.authorities.length == 4) {
              userRole = decoded.authorities[2].authority;
            }
            if (decoded.authorities.length == 5) {
              userRole = decoded.authorities[4].authority;
            }

            const mail = decoded.sub;
            sessionStorage.setItem("role", userRole);
            sessionStorage.setItem("email", mail);

            axios.defaults.headers.common["Authorization"] = token;
            if (userRole == "ROLE_USER") {
              navigate("/search");
            } else if (userRole == "ROLE_PHARMACIST") {
              navigate("/data");
            } else if (userRole == "ROLE_ADMIN") {
              navigate("/admin");
            }
          }
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
          window.alert("Password wrong!");
        });
    } else {
      window.alert("Enter both Mail & Password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {loading && <Loading />}
        <div className="flex justify-center bg-background my-8 mx-4">
          <div className="bg-card bg-x1 p-6 rounded-3xl shadow-lg w-96 max-w-md">
            <img
              src="/images/logo.png"
              alt="MediCare"
              className="mx-auto h-36"
            />
            <div>
              <div className="mb-4 mt-8">
                <label className={commonStyles.label} htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={commonStyles.input}
                  placeholder="Enter your email here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-center mt-8">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className={commonStyles.button}
                >
                  LOGIN
                </button>
              </div>
            </div>
            <p className="text-muted-foreground text-white text-center mt-8">
              Don't have an account?
              <br />
              <a href="/ph-signup" className="text-accent underline text-xs">
                Pharmacist Sign Up
              </a>{" "}
              |{" "}
              <a href="/sign-up" className="text-accent underline text-xs">
                Customer Sign Up
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
