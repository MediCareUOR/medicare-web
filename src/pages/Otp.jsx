import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const primaryButtonClass =
  "bg-x3 text-white px-4 py-2 mt-4 mx-4 rounded-full  hover:bg-opacity-90 font-semibold";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(sessionStorage.getItem("email"));
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post(
        `http://localhost:8081/api/v1/system-users/visitor/verify-email?email=${email}&otp=${otp}`
      )
      .then((res) => {
        console.log(res);
        sessionStorage.clear();
        navigate("/login");
      })
      .catch((e) => {
        window.alert("Invalid OTP");
        console.log(e);
      });
  };

  return (
    <div className="fixed text-sm inset-0 bg-x5 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white border-2 border-x1 p-6 rounded-xl w-80">
        <h2 className="text-sm bg-x1 text-white font-semibold text-center border-spacing-x-1.5 mb-4 border p-2 rounded-full">
          OTP Verification
        </h2>
        <h4 className="text-x1">
          Your account verification code has been sent to your "
          {email || "Example@mail.com"}"{" "}
        </h4>
        <input
          type="text"
          required
          placeholder="Enter your OTP here"
          className="border text-x1 border-x1 mt-4 hover:ring-1 rounded-full p-2 mb-2 w-full"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className={`ml-0 ${primaryButtonClass}`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
