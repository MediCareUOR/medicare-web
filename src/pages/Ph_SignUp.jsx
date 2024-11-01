import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const INPUT_CLASS = " rounded-full text-x1 p-2 focus:outline-none focus:ring";
const LABEL_CLASS = "text-muted-foreground  text-white text-md mb-1";
const BUTTON_CLASS =
  "bg-x3 text-white hover:bg-opacity-90 rounded-full w-28 p-1 font-bold";

const Ph_SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    requestPharmacy: {
      pharmacyName: "",
      registerNumber: "",
      contactNumber: "",
      postal: "",
      district: "",
      address: "",
      city: "",
      longitude: "",
      latitude: "",
    },
    requestSystemUser: {
      username: "",
      password: "",
    },
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    if (data.requestSystemUser.password !== confirmPassword) {
      window.alert("Password mismatched");
      setLoading(false);
      return;
    } else {
      axios
        .post(
          "http://localhost:8081/api/v1/pharmacist/register-pharmacist",
          data
        )
        .then((res) => {
          setLoading(false);
          console.log(res);
          window.alert(
            "Thank you for registration. We will notify you soon, when registraion process is over"
          );
          navigate("/");
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
        {loading && <Loading />}
        <div className="bg-card rounded-3xl shadow-lg p-8 my-5 w-full max-w-2xl bg-x1">
          <div className="flex items-center justify-center mb-6">
            <img
              aria-hidden="true"
              alt="MediCare Logo"
              src="/images/logo.png"
              className="h-24 w-24"
            />
          </div>
          <div className="space-y-4 overflow-x-auto">
            <div className="flex space-x-6">
              <InputField
                label="First Name"
                id="firstName"
                type="text"
                placeholder="Enter first name"
                value={data.firstName}
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
              />
              <InputField
                label="Last Name"
                id="lastName"
                type="text"
                placeholder="Enter last name"
                value={data.lastName}
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
              />
            </div>
            <InputField
              label="Contact Number"
              id="phoneNumber"
              type="tel"
              placeholder="Enter contact number"
              value={data.phoneNumber}
              onChange={(e) =>
                setData({ ...data, phoneNumber: e.target.value })
              }
            />
            <div className="flex space-x-6">
              <InputField
                label="Pharmacy Name"
                id="pharmacyName"
                type="text"
                placeholder="Enter pharmacy name"
                value={data.requestPharmacy.pharmacyName}
                onChange={(e) =>
                  setData({
                    ...data,
                    requestPharmacy: {
                      ...data.requestPharmacy,
                      pharmacyName: e.target.value,
                    },
                  })
                }
              />
              <InputField
                label="Register Number"
                id="registerNumber"
                type="text"
                placeholder="Enter pharmacy register number"
                value={data.requestPharmacy.registerNumber}
                onChange={(e) =>
                  setData({
                    ...data,
                    requestPharmacy: {
                      ...data.requestPharmacy,
                      registerNumber: e.target.value,
                    },
                  })
                }
              />
            </div>
            <InputField
              label="Postal Code"
              id="postal"
              type="text"
              placeholder="Enter Postal code"
              value={data.requestPharmacy.postal}
              onChange={(e) =>
                setData({
                  ...data,
                  requestPharmacy: {
                    ...data.requestPharmacy,
                    postal: e.target.value,
                  },
                })
              }
            />
            <div className="flex space-x-6">
              <InputField
                label="Address"
                id="address"
                type="text"
                placeholder="Enter address"
                value={data.requestPharmacy.address}
                onChange={(e) =>
                  setData({
                    ...data,
                    requestPharmacy: {
                      ...data.requestPharmacy,
                      address: e.target.value,
                    },
                  })
                }
              />
              <InputField
                label="City"
                id="city"
                type="text"
                placeholder="Enter city"
                value={data.requestPharmacy.city}
                onChange={(e) =>
                  setData({
                    ...data,
                    requestPharmacy: {
                      ...data.requestPharmacy,
                      city: e.target.value,
                    },
                  })
                }
              />
            </div>
            <SelectField
              value={data.requestPharmacy.district}
              label="District"
              id="district"
              onChange={(e) =>
                setData({
                  ...data,
                  requestPharmacy: {
                    ...data.requestPharmacy,
                    district: e.target.value,
                  },
                })
              }
            >
              <option value="">All of Sri Lanka</option>
              <option value="colombo">Colombo</option>
              <option value="gampaha">Gampaha</option>
              <option value="kalutara">Kalutara</option>
              <option value="kandy">Kandy</option>
              <option value="matale">Matale</option>
              <option value="nuwara-eliya">Nuwara Eliya</option>
              <option value="galle">Galle</option>
              <option value="matara">Matara</option>
              <option value="hambantota">Hambantota</option>
              <option value="jaffna">Jaffna</option>
              <option value="kilinochchi">Kilinochchi</option>
              <option value="mannar">Mannar</option>
              <option value="vavuniya">Vavuniya</option>
              <option value="mullaitivu">Mullaitivu</option>
              <option value="batticaloa">Batticaloa</option>
              <option value="ampara">Ampara</option>
              <option value="trincomalee">Trincomalee</option>
              <option value="kurunegala">Kurunegala</option>
              <option value="puttalam">Puttalam</option>
              <option value="anuradhapura">Anuradhapura</option>
              <option value="polonnaruwa">Polonnaruwa</option>
              <option value="badulla">Badulla</option>
              <option value="moneragala">Moneragala</option>
              <option value="ratnapura">Ratnapura</option>
              <option value="kegalle">Kegalle</option>
            </SelectField>

            <div className="flex space-x-6">
              <InputField
                label="Longitude"
                id="longitude"
                type="text"
                placeholder="Enter Longitude"
                value={data.requestPharmacy.longitude}
                onChange={(e) =>
                  setData({
                    ...data,
                    requestPharmacy: {
                      ...data.requestPharmacy,
                      longitude: e.target.value,
                    },
                  })
                }
              />
              <InputField
                label="Latitude"
                id="latitude"
                type="text"
                placeholder="Enter Latitude"
                value={data.requestPharmacy.latitude}
                onChange={(e) =>
                  setData({
                    ...data,
                    requestPharmacy: {
                      ...data.requestPharmacy,
                      latitude: e.target.value,
                    },
                  })
                }
              />
            </div>

            <InputField
              label="Pharmacy Contact Number"
              id="contactNumber"
              type="tel"
              placeholder="Enter contact number"
              value={data.requestPharmacy.contactNumber}
              onChange={(e) =>
                setData({
                  ...data,
                  requestPharmacy: {
                    ...data.requestPharmacy,
                    contactNumber: e.target.value,
                  },
                })
              }
            />
            <InputField
              label="Email"
              id="username"
              type="email"
              placeholder="Enter email"
              value={data.requestSystemUser.username}
              onChange={(e) =>
                setData({
                  ...data,
                  requestSystemUser: {
                    ...data.requestSystemUser,
                    username: e.target.value,
                  },
                })
              }
            />
            <div className="flex space-x-6">
              <PasswordField
                label="Password"
                id="password"
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                value={data.requestSystemUser.password}
                onChange={(e) =>
                  setData({
                    ...data,
                    requestSystemUser: {
                      ...data.requestSystemUser,
                      password: e.target.value,
                    },
                  })
                }
              />
              <PasswordField
                label="Confirm Password"
                id="confirm-password"
                showPassword={showConfirmPassword}
                setShowPassword={setShowConfirmPassword}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center pt-4">
              <button
                onClick={handleSubmit}
                type="submit"
                className={BUTTON_CLASS}
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const InputField = ({ label, id, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col w-72">
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={INPUT_CLASS}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const PasswordField = ({
  label,
  id,
  showPassword,
  setShowPassword,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full relative text">
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      <input
        type={showPassword ? "text" : "password"}
        id={id}
        className={INPUT_CLASS}
        placeholder={`Enter ${label.toLowerCase()}`}
        required
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        className="absolute right-3 top-9 text-gray-600 text-sm text-x1 font-semibold"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <IoEye className="h-5 w-5" />
        ) : (
          <IoEyeOff className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

const SelectField = ({ label, id, children, value, onChange }) => {
  return (
    <div className="flex flex-col text-x1 w-72">
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      <select onChange={onChange} value={value} id={id} className={INPUT_CLASS}>
        {children}
      </select>
    </div>
  );
};

export default Ph_SignUp;
