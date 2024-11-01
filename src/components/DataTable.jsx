import React from "react";
import { TiTick } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";

const Table = () => {
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
                  Drug Name
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-semibold leading-none text-slate-500">
                  Brand Name
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
            <tr className="hover:bg-x5 border-b border-slate-200">
              <td className="p-4 py-5">
                <p className="block font-normal text-sm text-slate-800">
                  ABC Pharmacy
                </p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">N12345</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">Hakmana, Matara</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">0715569889</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">abc@gmail.com</p>
              </td>
              <td className="p-4 py-5">
                <button
                  className=" text-center"
                  onMouseEnter={(e) =>
                    (e.currentTarget.firstChild.style.color = "green")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.firstChild.style.color = "#163A5F")
                  }
                >
                  <TiTick size={25} />
                </button>
                <button
                  className="text-center "
                  onMouseEnter={(e) =>
                    (e.currentTarget.firstChild.style.color = "red")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.firstChild.style.color = "#163A5F")
                  }
                >
                  <TiTimes size={25} />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-x5 border-b border-slate-200">
              <td className="p-4 py-5">
                <p className="block font-normal text-sm text-slate-800">
                  DEF Pharmacy
                </p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">N89655</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">Deniyaya, Matara</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">0778965123</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">def@gmail.com</p>
              </td>
              <td className="p-4 py-5">
                <button
                  className=" text-center"
                  onMouseEnter={(e) =>
                    (e.currentTarget.firstChild.style.color = "green")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.firstChild.style.color = "#163A5F")
                  }
                >
                  <TiTick size={25} />
                </button>
                <button
                  className="text-center "
                  onMouseEnter={(e) =>
                    (e.currentTarget.firstChild.style.color = "red")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.firstChild.style.color = "#163A5F")
                  }
                >
                  <TiTimes size={25} />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-x5 border-b border-slate-200">
              <td className="p-4 py-5">
                <p className="block font-normal text-sm ">Hope Pharmacy</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">R45698</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">Borella, Colombo</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">0758978556</p>
              </td>
              <td className="p-4 py-5">
                <p className="text-sm text-slate-500">hope@gmail.com</p>
              </td>
              <td className="p-4 py-5">
                <button
                  className=" text-center"
                  onMouseEnter={(e) =>
                    (e.currentTarget.firstChild.style.color = "green")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.firstChild.style.color = "#163A5F")
                  }
                >
                  <TiTick size={25} />
                </button>
                <button
                  className="text-center "
                  onMouseEnter={(e) =>
                    (e.currentTarget.firstChild.style.color = "red")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.firstChild.style.color = "#163A5F")
                  }
                >
                  <TiTimes size={25} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-between items-center px-4 py-3">
          <div className="text-sm text-slate-500">
            Showing <b>1-5</b> of 3
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:ring-1 transition duration-200 ease">
              Prev
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-x1 border border-slate-800 rounded hover:ring-1 transition duration-200 ease">
              1
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:ring-1 transition duration-200 ease">
              2
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:ring-1 transition duration-200 ease">
              3
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:ring-1 transition duration-200 ease">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
