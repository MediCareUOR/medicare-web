import React from "react";

const ResultTable = ({ pharmacies }) => {
  console.log(pharmacies);

  return (
    <div className=" mx-auto">
      <div
        className="relative flex flex-col w-full h-full overflow-scroll text-x1 
      shadow-md "
      >
        <table className="w-full text-left table-auto min-w-max border rounded-lg ">
          <thead className="bg-x1 text-white">
            <tr>
              <th className="p-4 border-b border-slate-200 bg-slate-50 ">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Brand Name
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Pharmacy Name
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Address
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Contact No
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Unit Price
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Stock Quantity
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Location
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Render pharmacy data dynamically */}
            {pharmacies.length > 0 ? (
              pharmacies.map((pharmacy, index) => (
                <tr
                  key={index}
                  className="hover:bg-x5 border-b border-slate-200"
                >
                  <td className="p-4 py-5">
                    <p className="block font-normal text-sm text-slate-800">
                      {pharmacy.brandName}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">
                      {pharmacy.userPharmacyDto.pharmacyName}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">
                      {pharmacy.userPharmacyDto.address}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <a
                      href={"tel:" + pharmacy.userPharmacyDto.contactNumber}
                      className="text-sm text-slate-500"
                      target="_blank"
                    >
                      {pharmacy.userPharmacyDto.contactNumber}
                    </a>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">
                      Rs.{pharmacy.unitPrice}
                    </p>
                  </td>
                  <td>
                    <p className="text-xs ml-10 text-slate-500">
                      {pharmacy.stockQty}
                    </p>
                  </td>
                  <td>
                    <a
                      href={
                        "https://www.google.com/maps/place/" +
                        pharmacy.userPharmacyDto.latitude +
                        "," +
                        pharmacy.userPharmacyDto.longitude
                      }
                      target="_blank"
                      className="text-xs text-slate-500"
                    >
                      Open in Google Maps
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 py-5 text-center">
                  No pharmacies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Section */}
        <div className="flex justify-between items-center px-4 py-3">
          <div className="text-sm text-slate-500">
            {pharmacies.length > 0 ? (
              <>
                Showing <b>1-{pharmacies.length}</b> of {pharmacies.length}
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

export default ResultTable;
