import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#268382]'>
      <h1 className='text-white text-center text-2xl'>FOYDALI HAVOLALAR</h1>
      <div className='px-6 pt-7'>
        <div className=' md:flex items-center justify-between'>
          <ul>
            <li>
              <Link className='text-white' to={'/importantinfo'}>BMSM to‘g‘risida</Link>
            </li>
            <li>
              <Link className='text-white my-2' to={'/'}>Aloqa</Link>
            </li>
            <li>
              <Link className='text-white' to={'/'}>Sayt xaritasi</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className='text-white' to={'/'}>O'zbekiston Respublikasi madaniyat vazirligi</Link>
            </li>
            <li>
              <Link className='text-white my-2' to={'/'}>O'zbekiston Respublikasi badiiy akademiyasi</Link>
            </li>
            <li>
              <Link className='text-white' to={'/'}>O'zbekiston Davlat Konservatoriyasi</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className='text-white' to={'/'}>O'zbekiston Davlat san'at va madaniyat instituti</Link>
            </li>
            <li>
              <Link className='text-white my-2' to={'/'}>LexUZ qonunchilik ma'lumotlari milliy bazasi</Link>
            </li>
            <li>
              <Link className='text-white' to={'/'}>O'zbekiston madaniyati yangiliklari</Link>
            </li>
          </ul>
        </div>
        <p className='text-white text-xl mt-5'>© UNI PROJECT</p>
        <p className='text-white text-xl'>2022 Barcha huquqlar himoyalangan</p>
        <p className='text-white text-xl pb-5'>Veb-saytdagi ma'lumotlardan foydalanilganda, manbaga havola qilish majburiy</p>
      </div>
    </footer>
  )
}

export default Footer