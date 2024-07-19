import React from 'react'
import img1 from '../../assets/raxbarImg/raxbar1.jpg'
import img2 from '../../assets/raxbarImg/rahbar2.jpg'
import img3 from '../../assets/raxbarImg/rahbar3.jpg'
import img4 from '../../assets/emp4.png'
const MaktabRahbaryati = () => {
  return (
    <section className='bg-[#eee] mt-10'>
      <div className='bg-white max-w-[1000px] pt-[50px] m-auto'>
        <div className='p-10 md:flex items-center justify-between gap-8'>
          <div className=''>
           <img className='w-[300px] m-auto' src={img1} alt="" />
          </div>
          <div className='mt-7 md:mb-10'>
            <h2 className='text-3xl font-bold text-center'>Adilova Sayyora Saypillayevna</h2>
            <h3 className='text-2xl my-3 font-medium'>2-sonli bolalar musiqa va san’at maktabi direktori</h3>
            <p className='text-xl text-center'>Telefon: +998 94 669 85-25</p>
            <p className='text-xl my-1'>Qabul kunlari: Seshanba - 10:00 - 12:00</p>
            <p className='text-xl'>Payshanba - 15:00 - 17:00</p>
          </div>
        </div>
      </div>

      <div className='bg-white max-w-[1000px] mt-10 m-auto'>
        <div className='p-10 md:flex items-center justify-between gap-[40px]'>
          <div className=''>
           <img className='w-[470px]' src={img2} alt="" />
          </div>
          <div className='mt-7 md:mb-10'>
            <h2 className='text-3xl font-bold'>Usmanova Nadira
 Mirzaxmatovna 
</h2>
            <h3 className='text-2xl my-3 font-medium'>2-sonli bolalar musiqa va san’at maktabi xo’jalik ishlari bo’yicha direktor o’rinbosari</h3>
            <p className='text-xl'>Telefon: +998  95 082-14-02</p>
            <p className='text-xl my-1'>Qabul kunlari: Seshanba - 10:00 - 12:00</p>
            <p className='text-xl'>Payshanba - 15:00 - 17:00</p>
          </div>
        </div>
      </div>

      <div className='bg-white max-w-[1000px] mt-10 m-auto '>
        <div className='p-10 md:flex items-center justify-between gap-8'>
          <div className='md:max-w-[300px]'>
           <img className='w-full' src={img3} alt="" />
          </div>
          <div className='mt-7 md:mb-10'>
            <h2 className='text-3xl font-bold'>Xodjayeva Luiza 
Adilovna 
</h2>
            <h3 className='text-2xl my-3 font-medium'>2-sonli bolalar musiqa va san’at maktabi bosh hisobchisi</h3>
            <p className='text-xl'>Telefon: +998 90 934-69-05</p>
            <p className='text-xl my-1'>Qabul kunlari: Chorshanba - 10:00 - 12:00</p>
            <p className='text-xl'>Payshanba - 15:00 - 17:00</p>
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default MaktabRahbaryati