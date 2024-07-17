import React from 'react'
import { farmon } from '../../services/swagger-img'
import { TiTick } from "react-icons/ti";

const XayatQarori = () => {
  return (
    <section>
      {/* <div className='flex items-center w-full mt-10'>
        <img className='ml-[80px]' src="https://zarkentbmsm.uz/img/gerb.png" alt="" />
        <h1 className='text-center text-2xl m-auto'>O‘zbekiston Respublikasi Madaniyat va turizm vazirining buyruqlari, Xay’at qarorlari</h1>
      </div> */}
      <div className='px-4 mt-8'>
        <ul>
          {farmon.map((item,index) =>(
            <li className='mt-5 flex gap-2 md:text-xl'>
            <TiTick className='text-4xl text-red-600'/>
            {item.title}
          </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default XayatQarori