import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import ResultTable from "../components/ResultTable";
import Footer from "../components/Footer";

const Result = () => {
  // State for drug name, suggestions, district, pharmacies, and filtered pharmacies
  const [drugName, setDrugName] = useState(
    sessionStorage.getItem("drugName") || ""
  );
  const [suggestions, setSuggestions] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(
    sessionStorage.getItem("district") || ""
  );
  const [data, setData] = useState([]);

  const axioshandler = () => {
    axios
      .get(
        `http://localhost:8081/api/v1/drugs/user/get-all-drugs?searchText=${drugName}&district=${selectedDistrict}&page=0&size=10`,
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("SavedToken"),
          },
        }
      )
      .then((res) => {
        if (res.data.data.count == 0) {
          setData([]);
        } else {
          setData(res.data.data.dataList);
          console.log(res.data.data.dataList);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    setSelectedDistrict(sessionStorage.getItem("district"));
    setDrugName(sessionStorage.getItem("drugName"));
    axioshandler();
  }, []);

  // Auto-suggest logic for drug names
  const onDrugNameChange = (e) => {
    const value = e.target.value;
    setDrugName(value);
  };

  // Handle suggestion click
  const onSuggestionClick = (suggestion) => {
    setDrugName(suggestion);
    setSuggestions([]);
  };

  // Filter function when the search button is clicked
  const onSearch = () => {
    axioshandler();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="flex flex-col bg-x5 rounded-2xl mx-4 my-6 lg:flex-row justify-between p-4">
          <div className="relative mb-2 md:pr-2 text-x1 flex items-center">
            <label
              className="block text-sm mr-4 font-medium text-muted-foreground"
              htmlFor="drug-name"
            >
              Drug Name:
            </label>
            <input
              type="text"
              id="drug-name"
              value={drugName}
              onChange={onDrugNameChange}
              className="mt-1 block w-60 border border-x3 rounded-full p-2 focus:outline-none focus:ring focus:ring-ring"
              placeholder="Enter drug name"
            />
            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <ul className="absolute bg-white border border-x1 w-60 mt-44 mr-20 rounded-xl z-10">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => onSuggestionClick(suggestion)}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="md:w-1/2 md:pl-2 flex items-center mb-2">
            <label
              className="block text-sm text-x1 mr-4 font-medium text-muted-foreground"
              htmlFor="district"
            >
              District:
            </label>
            <select
              id="district"
              value={selectedDistrict}
              defaultChecked={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="mt-1 rounded-full block w-60 border border-x3 text-x1 p-2 focus:outline-none focus:ring focus:ring-ring"
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
          <div className="flex">
            <button
              onClick={onSearch}
              className="btn-primary text-sm rounded-full bg-x3 text-white font-semibold px-4 py-1 my-auto hover:bg-opacity-90"
            >
              SEARCH
            </button>
          </div>
        </div>
        <div className="mx-5 mb-10">
          <ResultTable pharmacies={data} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Result;
