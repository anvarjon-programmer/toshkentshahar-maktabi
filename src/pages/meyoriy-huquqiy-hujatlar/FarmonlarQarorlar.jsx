import React from 'react'
import { farmon } from '../../services/swagger-img'
import { TiTick } from "react-icons/ti";

const FarmonlarQarorlar = () => {
  return (
    <section className='mt-10 px-4'>
      <div className='flex items-center'>
        <img className='md:ml-[80px]' src="https://zarkentbmsm.uz/img/gerb.png" alt="" />
        <h1 className='text-xl text-center m-auto md:text-3xl'>O‘zbekiston Respublikasi Kodeks va Qonunlari</h1>
      </div>
      <div>
        <ul>
          {
            farmon.map((item,index) =>(
              <li className='mt-5 flex gap-2 md:text-xl'>
                <TiTick className='text-4xl text-red-600'/>
                {item.title}
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default FarmonlarQarorlar