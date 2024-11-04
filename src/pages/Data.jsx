import React, { useEffect, useState } from "react";

import { MdEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConfirmationModal from "../components/ConfirmationModal";
import axios from "axios";

// Tailwind classes for buttons
const primaryButtonClass =
  "bg-x3 text-white px-4 py-2 mt-4 mx-4 rounded-full  hover:bg-opacity-90 font-semibold";
const secondaryButtonClass =
  "font-semibold mx-4 my-4 px-4 py-2 rounded-full bg-x3 hover:bg-opacity-90 text-white hover:bg-teal-300";
const borderClass =
  "border-t border-b border-x1 text-x1 p-2 text-center text-sm h-14";

const DrugTable = ({ drugs, onDelete, onEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDrugIndex, setSelectedDrugIndex] = useState(null);

  const handleDeleteClick = (index) => {
    setSelectedDrugIndex(index); // Store the index of the drug to be deleted
    setIsModalOpen(true); // Open the modal
  };

  const handleConfirmDelete = () => {
    onDelete(selectedDrugIndex); // Proceed with deletion
    setIsModalOpen(false); // Close the modal after deletion
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false); // Close the modal without deleting
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="relative flex flex-col w-full mx-4 overflow-scroll text-x1 
      shadow-md"
      >
        <table className="w-full table-auto text-center border-collapse border  border-x1 my-6">
          <thead className="text-white bg-x1">
            <tr>
              <th className="h-10 font-semibold text-sm">Drug Name</th>
              <th className="h-10 font-semibold text-sm">Brand Name</th>
              <th className="h-10 font-semibold text-sm">Unit Price</th>
              <th className="h-10 font-semibold text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {drugs.map((drug, index) => (
              <tr key={index}>
                <td className={borderClass}>{drug.drugName}</td>
                <td className={borderClass}>{drug.brandName}</td>
                <td className={borderClass}>Rs.{drug.unitPrice}</td>
                <td className={borderClass}>
                  <button
                    onClick={() => onEdit(index)}
                    className="mx-2 p-2"
                    onMouseEnter={(e) =>
                      (e.currentTarget.firstChild.style.color = "green")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.firstChild.style.color = "#163A5F")
                    }
                  >
                    <MdEdit className="w-6 h-6 hover:font-black" />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(index, drug.drugName)}
                    className="mx-2 p-2"
                    onMouseEnter={(e) =>
                      (e.currentTarget.firstChild.style.color = "red")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.firstChild.style.color = "#163A5F")
                    }
                  >
                    <MdOutlineDeleteOutline className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

const EditDrugForm = ({ drug, onSave, onCancel }) => {
  const [drugName, setDrugName] = useState(drug.drugName);
  const [brandName, setBrandName] = useState(drug.brandName);
  const [unitPrice, setUnitPrice] = useState(drug.unitPrice);
  const [token, setToken] = useState("");

  const handleSave = () => {
    let updatedDrug = {
      drugName: drugName,
      brandName: brandName,
      unitPrice: unitPrice,
      stockQty: "20000",
    };
    axios
      .put(
        `http://localhost:8081/api/v1/drugs/update-drug/${drug.drugId}`,
        updatedDrug,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        onSave({ drugName, brandName, unitPrice });
        location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    setToken(sessionStorage.getItem("SavedToken"));
  }, []);

  return (
    <div className="fixed inset-0 bg-x4 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white border border-x1 p-6 rounded-xl w-80">
        <h2 className="text-lg text-white text-center p-2 rounded-full bg-x1 border border-x1 font-semibold mb-4">
          Edit Drug
        </h2>
        <input
          type="text"
          placeholder="Drug Name"
          className="border border-x1 text-x1 rounded-full p-2 mb-2 w-full"
          value={drugName}
          onChange={(e) => setDrugName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Brand Name"
          className="border border-x1 text-x1 rounded-full p-2 mb-2 w-full"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Unit Price"
          className="border border-x1 text-x1 rounded-full p-2 mb-2 w-full"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
        />
        <button onClick={handleSave} className={`mr-2 ${primaryButtonClass}`}>
          Save
        </button>
        <button onClick={onCancel} className={primaryButtonClass}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const DrugForm = ({ addDrug, closeForm }) => {
  const [drugName, setDrugName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  const handleAddDrug = () => {
    axios
      .post(
        "http://localhost:8081/api/v1/drugs/save-drug",
        {
          drugName: drugName,
          drugDescription: "default",
          brandName: brandName,
          unitPrice: unitPrice,
          stockQty: 1000,
        },
        {
          headers: {
            Authorization: sessionStorage.getItem("SavedToken"),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });

    if (drugName && brandName && unitPrice) {
      addDrug({ drugName, brandName, unitPrice });
      setDrugName("");
      setBrandName("");
      setUnitPrice("");
    }
  };

  return (
    <div className="fixed text-sm inset-0 bg-x5 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white border-2 border-x1 p-6 rounded-xl w-80">
        <h2 className="text-sm bg-x1 text-white font-semibold text-center border-spacing-x-1.5 mb-4 border p-2 rounded-full">
          Add Drug
        </h2>
        <input
          type="text"
          placeholder="Drug Name"
          className="border border-x1 text-x1 hover:ring-1 rounded-full p-2 mb-2 w-full"
          value={drugName}
          onChange={(e) => setDrugName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Brand Name"
          className="border border-x1 text-x1 hover:ring-1 rounded-full p-2 mb-2 w-full"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Unit Price"
          className="border border-x1 text-x1 hover:ring-1 rounded-full p-2 mb-2 w-full"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
        />
        <button
          onClick={handleAddDrug}
          className={`ml-0 ${primaryButtonClass}`}
        >
          Add Drug
        </button>
        <button onClick={closeForm} className={`ml-2 ${primaryButtonClass}`}>
          Close
        </button>
      </div>
    </div>
  );
};

const Data = () => {
  const [showForm, setShowForm] = useState(false);
  const [drugs, setDrugs] = useState([
    { drugName: "Paracetamol", brandName: "Panadol", unitPrice: "5.00" },
    { drugName: "Paracetamol", brandName: "Crocin", unitPrice: "6.00" },
    { drugName: "Ibuprofen", brandName: "Brufen", unitPrice: "10.00" },
    { drugName: "Ibuprofen", brandName: "Advil", unitPrice: "15.00" },
  ]);
  const [search, setSearch] = useState("");
  const [editingDrug, setEditingDrug] = useState(null);

  const addDrug = (drug) => {
    setDrugs([...drugs, drug]);
    setShowForm(false);
  };

  useEffect(() => {
    setDrugs([]);
    axios
      .get(
        "http://localhost:8081/api/v1/drugs/pharmacist/get-all-drugs?searchText=&page=0&size=10",
        {
          headers: {
            Authorization: sessionStorage.getItem("SavedToken"),
          },
        }
      )
      .then((res) => {
        console.log(res.data.data.dataList);
        setDrugs(res.data.data.dataList);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const deleteDrug = (index) => {
    axios
      .delete(
        "http://localhost:8081/api/v1/drugs/delete-drug/" + drugs[index].drugId,
        {
          headers: {
            Authorization: sessionStorage.getItem("SavedToken"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        setDrugs(drugs.filter((_, i) => i !== index));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const editDrug = (index) => {
    setEditingDrug({ ...drugs[index], index });
  };

  const saveEditedDrug = (updatedDrug) => {
    const updatedDrugs = drugs.map((drug, i) =>
      i === editingDrug.index ? updatedDrug : drug
    );
    setDrugs(updatedDrugs);
    setEditingDrug(null);
  };

  const filteredDrugs = drugs.filter(
    (drug) =>
      drug.drugName.toLowerCase().includes(search.toLowerCase()) ||
      drug.brandName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto flex-grow">
        <header className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by drug or brand name"
                className="border text-x1 focus:border-x2 hover:ring-1 border-x1 rounded-full ml-4 mt-4 p-2 w-64"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              className={primaryButtonClass}
              onClick={() => setShowForm(true)}
            >
              + New Drug
            </button>
          </div>
        </header>

        <DrugTable
          drugs={filteredDrugs}
          onDelete={deleteDrug}
          onEdit={editDrug}
        />

        {showForm && (
          <DrugForm addDrug={addDrug} closeForm={() => setShowForm(false)} />
        )}

        {editingDrug && (
          <EditDrugForm
            drug={editingDrug}
            onSave={saveEditedDrug}
            onCancel={() => setEditingDrug(null)}
          />
        )}
      </div>
      <Footer className="mt-4" />
    </div>
  );
};

export default Data;
