import React, { useState, useEffect } from "react";
import axios from "axios";

import { TiTick } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";
import Loading from "./Loading";
import ConfirmationModal from "./ConfirmationModal";

const AdminTable = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDrugIndex, setSelectedDrugIndex] = useState(null);
  const [data, setData] = useState({});

  const token =
    "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJtZWRpY2FyZS51b3JAZ21haWwuY29tIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6Im9yZGVyOndyaXRlIn0seyJhdXRob3JpdHkiOiJkcnVnOnJlYWQifSx7ImF1dGhvcml0eSI6ImRydWc6d3JpdGUifSx7ImF1dGhvcml0eSI6Im9yZGVyOnJlYWQifSx7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sImlhdCI6MTcyODg5Njg2MywiZXhwIjoxNzMxNDM2MjAwfQ.Ngcc03JZ_t5DAjM2o43diIZouXHBuAQH-p3tf3uW61TdyCxqVZHc3p7KE4A5mG-P";

  const handleConfirmDelete = () => {
    // console.log("Pharmacist ID to delete:", selectedDrugIndex);
    if (selectedDrugIndex !== null) {
      onDelete(selectedDrugIndex); // Proceed with deletion
    }
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false); // Close the modal without deleting
  };

  const deleteHandle = (pId) => {
    setSelectedDrugIndex(pId);
    setIsModalOpen(true); // Open modal for confirmation
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "http://localhost:8081/api/v1/pharmacist/admin/get-all?searchText=&page=0&size=10",
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        setData(res.data.data.dataList);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  const confirmHandle = (pId) => {
    setLoading(true);
    axios
      .put(
        `http://localhost:8081/api/v1/pharmacist/admin/verify-pharmacist/${pId}`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log("Pharmacist ID to confirm:", pId);
        setLoading(false);
        window.alert("Confirmed " + res.data.message);
        location.reload();
      })
      .catch((e) => console.log(e));
  };

  const onDelete = (pId) => {
    axios
      .delete(
        `http://localhost:8081/api/v1/pharmacist/delete-pharmacist/${pId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        setData(data.filter((item) => item.pharmacistId !== pId));
        setIsModalOpen(false); // Close the modal after deletion
        window.alert("Deleted " + res.data.message);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className=" mx-auto">
      {loading && <Loading />}
      <div
        className="relative flex flex-col w-full h-full overflow-scroll text-x1 
      shadow-md "
      >
        <table className="w-full text-left table-auto min-w-max border rounded-lg ">
          <thead className="bg-x1 text-white">
            <tr>
              <th className="p-4 border-b border-slate-200 bg-slate-50 ">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Pharmacy Name
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Register No
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Address
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Postal
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  District
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  City
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Contact No
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Longitude
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Latitude
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Email
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Action
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((pharmacy, index) => (
                <tr
                  key={index}
                  className="hover:bg-x5 border-b border-slate-200"
                >
                  <td className="p-4 py-5">
                    <p className="block font-normal text-sm">
                      {pharmacy.responsePharmacy.pharmacyName}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">
                      {pharmacy.responsePharmacy.registerNumber}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">
                      {pharmacy.responsePharmacy.address}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">
                      {pharmacy.responsePharmacy.postal}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">
                      {pharmacy.responsePharmacy.district}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">
                      {pharmacy.responsePharmacy.city}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">
                      {pharmacy.responsePharmacy.contactNumber}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">
                      {pharmacy.responsePharmacy.longitude}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">
                      {pharmacy.responsePharmacy.latitude}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">
                      {pharmacy.responsePharmacistUserDto.userName}
                    </p>
                  </td>
                  <td className="p-4 py-5 flex space-x-2">
                    {pharmacy.responsePharmacistUserDto.enable ? (
                      <div className="bg-green text-white p-1 rounded">
                        <p>Confirmed</p>
                      </div>
                    ) : (
                      <button
                        className="text-center"
                        onMouseEnter={(e) =>
                          (e.currentTarget.firstChild.style.color = "green")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.firstChild.style.color = "#163A5F")
                        }
                        onClick={() => confirmHandle(pharmacy.pharmacistId)}
                      >
                        <TiTick size={25} />
                      </button>
                    )}
                    <button
                      className="text-center"
                      onMouseEnter={(e) =>
                        (e.currentTarget.firstChild.style.color = "red")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.firstChild.style.color = "#163A5F")
                      }
                      onClick={() => deleteHandle(pharmacy.pharmacistId)}
                    >
                      <TiTimes size={25} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" className="p-4 py-5 text-center">
                  No pharmacies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {isModalOpen && (
          <ConfirmationModal
            isOpen={isModalOpen}
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        )}

        {/* Pagination Section */}
        <div className="flex justify-between items-center px-4 py-3">
          <div className="text-sm text-slate-500">
            {data.length > 0 ? (
              <>
                Showing <b>1-{data.length}</b> of {data.length}
              </>
            ) : (
              "No results"
            )}
          </div>
          <div className="flex space-x-1">
            <button
              className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:ring-1 transition duration-200 ease"
              disabled
            >
              Prev
            </button>
            <button
              className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-x1 border border-slate-800 rounded hover:ring-1 transition duration-200 ease"
              disabled
            >
              1
            </button>
            <button
              className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:ring-1 transition duration-200 ease"
              disabled
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
