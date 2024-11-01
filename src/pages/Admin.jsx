import React, { useState, useEffect } from "react";
import axios from "axios";

import AdminTable from "../components/AdminTable";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("role") != "ROLE_ADMIN") {
      navigate("/login");
    }
    axios
      .get(
        "http://localhost:8081/api/v1/pharmacist/admin/get-all-pharmacy-count",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJtZWRpY2FyZS51b3JAZ21haWwuY29tIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6Im9yZGVyOndyaXRlIn0seyJhdXRob3JpdHkiOiJkcnVnOnJlYWQifSx7ImF1dGhvcml0eSI6ImRydWc6d3JpdGUifSx7ImF1dGhvcml0eSI6Im9yZGVyOnJlYWQifSx7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sImlhdCI6MTcyODg5Njg2MywiZXhwIjoxNzMxNDM2MjAwfQ.Ngcc03JZ_t5DAjM2o43diIZouXHBuAQH-p3tf3uW61TdyCxqVZHc3p7KE4A5mG-P",
          },
        }
      )
      .then((response) => {
        setCount(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleLogout() {
    sessionStorage.clear();
    navigate("/login");
  }

  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="flex justify-between mt-6 mb-6 text-x1">
        <div className="bg-muted border border-x1 text-muted-foreground p-2 rounded-full px-4">
          <span>Total Pharmacies</span>
          <span className="font-bold ml-5">{count}</span>
        </div>
      </div>
      <AdminTable />
    </div>
  );
};

export default Admin;
