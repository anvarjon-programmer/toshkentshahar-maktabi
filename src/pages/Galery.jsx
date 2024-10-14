import React, { useState } from 'react';
import { cartImg } from '../services/swagger-img';


const Galery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(cartImg.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentImages = cartImg.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-4 py-2 mx-1 border rounded ${currentPage === i ? 'bg-teal-700 text-white' : 'bg-white text-teal-700'}`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <section className="px-4">
      {/* <div className="p-4 mt-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="border p-2">
            <img src={img14} alt="Maktab binosining ko‘rinishi" className="w-full h-auto" />
            <div className="text-center text-white mt-2 bg-teal-700 h-[55px] flex items-center justify-center">
              <p>Maktab binosining ko‘rinishi</p>
            </div>
          </div>
          <div className="border p-2">
            <img src={img11} alt="Maktabga asosiy kirish qismi" className="w-full h-auto" />
            <div className="text-center text-white mt-2 bg-teal-700 h-[55px] flex items-center justify-center">
              <p>Maktabga asosiy kirish qismi</p>
            </div>
          </div>
          <div className="border p-2">
            <img src={img12} alt="Maktab foyesi" className="w-full h-auto" />
            <div className="text-center text-white mt-2 bg-teal-700 h-[55px] flex items-center justify-center">
              <p>Maktab foyesi</p>
            </div>
          </div>
          <div className="border p-2">
            <img src={img13} alt="Maktab foyesi" className="w-full h-auto" />
            <div className="text-center text-white mt-2 bg-teal-700 h-[55px] flex items-center justify-center">
              <p>Maktab foyesi</p>
            </div>
          </div>
          <div className="border p-2">
            <img src={img15} alt="1-qavat yo‘lagi" className="w-full h-auto" />
            <div className="text-center text-white mt-2 bg-teal-700 h-[55px] flex items-center justify-center">
              <p>1-qavat yo‘lagi</p>
            </div>
          </div>
        </div>
      </div> */}


      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 bg-gray-100">
          {currentImages.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.img}
                alt={`Gallery image ${index + 1}`}
                className="w-full object-cover h-[200px] sm:h-[250px] lg:h-[300px] transition-opacity duration-300 hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="text-white text-lg font-semibold m-auto text-center">{item.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 mb-8">
          <button
            onClick={handlePreviousPage}
            className={`px-4 py-2 mx-2 text-white bg-teal-700 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {renderPageNumbers()}

          <button
            onClick={handleNextPage}
            className={`px-4 py-2 mx-2 text-white bg-teal-700 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Galery;