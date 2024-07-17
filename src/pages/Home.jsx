import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import swagger from '../services/swagger-img';
import axios from 'axios';
import { Link } from 'react-router-dom';
import maktabRouteLink from '../services/MaktabRouteLinks';

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  useEffect(() => {
    const fetchFroduct = async () => {
      try {
        const { data } = await axios.get("https://parsingbot.pythonanywhere.com");
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFroduct();
  }, []);

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = [...Array(pageCount).keys()];

  return (
    <div className='w-full container pt-5 ttttt'>
      <div className='max-w-[1100px] m-auto'>
        {/* <Slider {...settings} className='m-auto container'>
          {
            swagger.map((item, index) => (
              <div key={index} className='md:max-w-[300px] h-[200px] px-2'>
                <img className='object-cover w-full h-full' src={item.img} alt="" />
              </div>
            ))
          }
        </Slider> */}
      </div>
        <h1 className='text-center text-3xl my-10'>Maktab Yangliklari</h1>
      <section className='px-5 flex justify-between gap-10'>
        <div className='hidden md:block'>
        <div className=' max-w-[150px]  md:max-w-[300px] '>
          {
            maktabRouteLink.map((item, index) => (
              <li className='text-[10px] border-b border-black mt-3 pb-2 md:text-[18px]' key={index}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))
          }
        </div>
        </div>

        <div className='w-full'>
          {
            currentPageData.map((item, index) => (
              <div className='md:flex  items-center  justify-center gap-7 mt-11' key={index}>
                  <img className='w-full md:w-[150px] m-auto h-full  object-cover' src={item.file || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWz9tftw9qculFH1gxieWkxL6rbRk_hrXTSg&s"} alt="" />
                <div className=''>
                  <h4 className=' md:text-xl'>{item.title}</h4>
                  <p className='my-3 md:text-[16px]'>{item.description.slice(0, 200)}</p>
                   <div className='flex items-center justify-end'>
                   <Link to='/' className=''>
                    <i>Batafsil</i>
                   </Link>
                   </div>
                </div>
              </div>
            ))
          }
      <div className='pagination-container md:mt-[200px]'>
      {currentPage > 3 && (
          pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageClick(number)}
              className={`pagination-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${currentPage === number ? 'active' : ''}`}
            >
              {number + 1}
            </button>
          ))
        )}
      </div>
        </div>
      </section>
    </div>
  );
}; 

export default Home;
