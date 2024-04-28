import React, { useState } from "react";
import { CheckboxLabel } from "../checkbox/CheckBoxWhite";
import bin from "../../assets/bin.svg";
import pen from "../../assets/pen.svg";
import { useNavigate} from "react-router-dom";

const Table = ({ tableHeader, data, setData, cell2, cell3, cell4, selectedNo, setSelectedNo, link }) => {
  const navigate = useNavigate();

  const [selectAll, setSelectAll] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const selectAllData = () => {
    let dataCopy = [...data]; 
    data.map((val, index) => {
        if(!selectAll){
            dataCopy[index].isSelected = true;
            setData(dataCopy); // Update the state with the modified data
            setSelectedNo(dataCopy.length);
        }else{
            dataCopy[index].isSelected = false;
            setData(dataCopy); // Update the state with the modified data
            setSelectedNo(0);
        }
    })

    setSelectAll(prev => !prev)
  }
  const navigateToInventory = ({value}) => {
    navigate(link, { state: { name: value } });
  }

  const selectData = (index) => {
    let dataCopy = [...data]; // Make a shallow copy of data
    dataCopy[index].isSelected = !dataCopy[index].isSelected;
    setData(dataCopy); // Update the state with the modified data
    setSelectedNo((prev) => (dataCopy[index].isSelected ? prev + 1 : prev - 1));
    if (link) {
      console.log("in if", dataCopy[index].name);
      navigateToInventory({ value: dataCopy[index].name }); // Pass an object with 'value' property
    }
  };
  

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);



  return (
    <div className="w-full">
    <div className="rounded-lg border border-solid border-gray border-opacity-20 bg-white overflow-x-auto"
     style={{ minWidth: "350px", overflowX: "auto" }} // Add this style
     >
      <table className="w-full">
        <thead className="bg-white3 ml-2 p-4 bg-blue">
          <tr className="font-sans p-6 ">
            <th className="p-2 text-center w-8 lg:w-20">
            <div onClick={() => selectAllData()}>
              <CheckboxLabel check={selectAll} bg="white" />
              </div>
            </th>
            {tableHeader.map((val, ind) => {
              return (
                <th
                  className="text-left ml-2 sm:ml-4 font-Nunitoo text-12 text-medium text-white2 ml-2 "
                  key={ind}
                >
                  {val}
                </th>
              );
            })}
            <th className="font-Nunitoo text-12 text-medium text-white2 ml-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {currentItems.map((val, ind) => {
            const dataIndex = indexOfFirstItem + ind;
            return (
              <tr className="border-b border-blue5" key={dataIndex}>
                <td className="p-2 text-left w-8 lg:w-20">
                  <div onClick={() => selectData(dataIndex)}>
                  
                  <CheckboxLabel check={val.isSelected} bg="white" />
                  
                    
                  </div>
                </td>
                {/* cell 2 */}
                <td className="w-auto sm:60 md:w-80">
                  <div className="flex justify-left py-2">
                    {/* profile pic */}
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray rounded-full ">
                      <img
                        src={val.image}
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col  justify-center ml-1 lg:ml-3">
                      <p className="font-Nunitoo text-12 lg:text-15 text-medium text-black">
                        {val.name}
                      </p>
                      <p className="font-Nunitoo text-10 lg:text-14 text-medium text-darkGray2">
                        {val[cell2]}
                      </p>
                    </div>
                  </div>
                </td>
                {/* 3rd cell */}
                <td className="font-Nunitoo text-12 lg:text-16 text-medium text-black py-2 text-left pr-0.5">
                  {val[cell3]}
                </td>
                {/* 4th cell */}
                <td className="font-Nunitoo text-12 lg:text-16 text-medium text-black py-2 text-left ml-2">
                  {val[cell4]}
                </td>
                {/* 5th cell */}
                <td className="font-Nunitoo text-16 text-medium text-black py-2 text-center">
                  <div className="flex items-center justify-center ml-2">
                  <div className="mr-0.2 sm:mr-2">
                    <img src={bin} alt="" />
                    </div>
                    <img src={pen} alt="" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-between my-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mr-2 px-4 py-2  border border-gray2 rounded-lg bg-white focus:outline-none hover:border-gray2"
        >
        <p className="font-Nunitoo text-black text-12 md:text-16">Previous</p>
          
        </button>
        <div className="flex justify-center my-2">
          <p className="font-Nunitoo text-black text-10 md:text-14 font-medium">
            Page {currentPage} of {totalPages}
          </p>
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastItem >= data.length}
          className="px-4 py-2 border border-gray2 rounded-lg bg-white focus:outline-none  hover:border-gray2"
        >
          <p className="font-Nunitoo text-black text-12 md:text-16">Next</p>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Table;
