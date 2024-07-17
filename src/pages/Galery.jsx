import React from 'react'
import { Link } from 'react-router-dom'
import headImg1 from '../assets/galery-header/1.jpg'
import headImg2 from '../assets/galery-header/2.jpg'
import headImg3 from '../assets/galery-header/3.jpg'
import headImg4 from '../assets/galery-header/4.jpg'
import headImg5 from '../assets/galery-header/5.jpg'
import { cartImg } from '../services/swagger-img'

const Galery = () => {
  return (
    <section className='px-4'>
         <div className=" p-4 mt-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="border p-2">
                <img src={headImg1} alt="Maktab binosining ko‘rinishi" className="w-full h-auto"/>
                <div className="text-center text-white mt-2 bg-teal-700 h-[55px] flex items-center justify-center">
                    <p>Maktab binosining ko‘rinishi</p>
                </div>
            </div>
            <div className="border p-2">
                <img src={headImg2} alt="Maktabga asosiy kirish qismi" className="w-full h-auto"/>
                <div className="text-center text-white mt-2 bg-teal-700 h-[55px] flex items-center justify-center">
                    <p>Maktabga asosiy kirish qismi</p>
                </div>
            </div>
            <div className="border p-2">
                <img src={headImg3} alt="Maktab foyesi" className="w-full h-auto"/>
                <div className="text-center text-white mt-2 bg-teal-700 h-[55px] flex items-center justify-center">
                    <p>Maktab foyesi</p>
                </div>
            </div>
            <div className="border p-2">
                <img src={headImg4} alt="Maktab foyesi" className="w-full h-auto"/>
                <div className="text-center text-white mt-2 bg-teal-700 h-[55px] flex items-center justify-center">
                    <p>Maktab foyesi</p>
                </div>
            </div>
            <div className="border p-2">
                <img src={headImg5} alt="1-qavat yo‘lagi" className="w-full h-auto"/>
                <div className="text-center text-white mt-2 bg-teal-700 h-[55px] flex items-center justify-center">
                    <p>1-qavat yo‘lagi</p>
                </div>
            </div>
        </div>
         </div>


         <div className='mt-10'>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cartImg.map((item,index) =>(
                <div className="border p-2">
                    <img src={item.img} alt="Maktab binosining ko‘rinishi" className="w-full object-cover h-[300px]"/>
                    <div className="text-center border-t border-gray-200 mt-2 h-[75px] flex items-center justify-center">
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}
            </div>
         </div>
    </section>
  )
}

export default Galery