import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

const BUTTON_STYLES =
  "bg-x3 text-white font-semibold hover:bg-x3/80 p-2 rounded-full px-4 max-w-md mt-4";
const INPUT_STYLES = "w-full p-2 border border-x1 text-x1 rounded-full";
const IMAGE_STYLES = "rounded-lg w-60 h-60 object-contain";

const Search = () => {
  const [drugname, setDrugname] = useState("");
  const [district, setDistrict] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(drugname, district);

    if (drugname == "" && district == "") {
      return;
    } else {
      axios
        .get(
          `http://localhost:8081/api/v1/drugs/user/get-all-drugs?searchText=${drugname}&district=${district}&page=0&size=10`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("SavedToken"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data.data.count == 0) {
            window.alert("No drugs found");
          } else {
            sessionStorage.setItem(
              "drugs",
              JSON.stringify(res.data.data.dataList)
            );
            sessionStorage.setItem("drugName", drugname);
            sessionStorage.setItem("district", district);
            navigate("/result");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    const role = sessionStorage.getItem("role");

    if (role == "ROLE_PHARMACIST") {
      navigate("/login");
    } else if (role == "GUEST") {
      navigate("/login");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex items-center flex-col">
        <div className="flex flex-col lg:flex-row mb-8 items-center">
          <div className=" text-center lg:w-[700px]">
            <h2 className="text-3xl lg:text-4xl text-x1 font-semibold mt-4">
              Find your medicine
            </h2>
            <p className=" text-x1 text-xl lg:text-xl mt-2 mb-6 lg:text-center">
              Find available drugs at pharmacies in your selected town.
            </p>
          </div>
          <div className="my-4 flex lg:justify-center">
            <img src="/images/find.png" alt="find" className={IMAGE_STYLES} />
          </div>
        </div>
        <div
          className="flex flex-col bg-x1 rounded-2xl lg:flex-row 
      items-center mt-6 mb-[47px] py-6 max-w-4xl mx-4 px-4 min-h-60 content-center"
        >
          <div className="mb-4 lg:mb-0 w-80 max-w-md mx-6">
            <label className="text-white mb-2 block">Drug Name</label>
            <input
              type="text"
              placeholder="Drug Name"
              className={INPUT_STYLES}
              value={drugname}
              onChange={(e) => setDrugname(e.target.value)}
            />
          </div>
          <div className="mb-4 lg:mb-0 w-80 max-w-md mx-6">
            <label className="text-white mb-2 block">District</label>
            <select
              onChange={(e) => setDistrict(e.target.value)}
              className={INPUT_STYLES}
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
            </select>
          </div>
          <div className="flex items-center lg:mx-auto mt-3">
            <button
              onClick={handleSubmit}
              type="submit"
              className={BUTTON_STYLES}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <Footer className="" />
    </div>
  );
};

export default Search;
