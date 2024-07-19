import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import swagger from '../services/swagger-img';
import axios from 'axios';
import { Link } from 'react-router-dom';
import maktabRouteLink from '../services/MaktabRouteLinks';
import { fortopiano } from '../services/personnel';

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const [currentFortopianoPage, setCurrentFortopianoPage] = useState(0);
   const fortopianoItemsPerPage = 6;

   const handleFortopianoPageClick = (pageIndex) => {
    setCurrentFortopianoPage(pageIndex);
  };

  const fortopianoOffset = currentFortopianoPage * fortopianoItemsPerPage;
const currentFortopianoData = fortopiano.slice(fortopianoOffset, fortopianoOffset + fortopianoItemsPerPage);
const fortopianoPageCount = Math.ceil(fortopiano.length / fortopianoItemsPerPage);
const fortopianoPageNumbers = [...Array(fortopianoPageCount).keys()];

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

        <div className='w-full flex flex-col gap-4'>
          {
            currentPageData.map((item, index) => (
              
<a href="#" class="flex flex-col items-center gap-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md: hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.file || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWz9tftw9qculFH1gxieWkxL6rbRk_hrXTSg&s"} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description.slice(0, 200)}</p>
    </div>
</a>

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

      <section className='px-4 mb-6'>
        <h1 className='text-center font-semibold mb-10 text-2xl md:text-4xl '>Faoliyat yutitayotgan Xodimlar</h1>
  <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-[30px] xl:grid-cols-3
      max-w-sm mx-auto md:max-w-none md:mx-0'>
    {
      currentFortopianoData.map((item, index) => (
        <div key={index}>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[750px]">
              <div className='h-[380px]'>
                  <img className='rounded-t-lg h-full w-full object-cover' src={item.img} alt="" />
              </div>
              <div className="p-5">
                      <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"> {item.name}</h6>
                  <p className="mb-1  text-gray-700 dark:text-gray-400 font-bold"> <i className='font-extrabold'>Yo'nalishi: </i> {item.lavozim}</p>
                  <p className="mb-1 font-bold mt-1 text-gray-700 dark:text-gray-400"> <i className='font-extrabold'>Ma’lumoti: </i>{item.malumoti}</p>
                  <p className="mb-1 font-bold mt-1 text-gray-700 dark:text-gray-400"> <i className='font-extrabold'>Taxsil olayotgan o’quv yurti: </i>{item.oquvYurt}</p>
                  <p className="mb-1 font-bold mt-1 text-gray-700 dark:text-gray-400"> <i className='font-extrabold'>Mutaxassisligi</i>: {item.mutaxaslig}</p>
                  <p className="mb-1 font-bold mt-1 text-gray-700 dark:text-gray-400">{item.ishJoy}</p>
              </div>
          </div>
        </div>
      ))
    }
  </div>
  <div className='pagination-container mt-6 md:mt-[20px] flex justify-center'>
    {fortopianoPageNumbers.map((number) => (
      <button
        key={number}
        onClick={() => handleFortopianoPageClick(number)}
        className={`pagination-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${currentFortopianoPage === number ? 'active' : ''}`}
      >
        {number + 1}
      </button>
    ))}
  </div>
</section>

    </div>
  );
}; 

export default Home;
