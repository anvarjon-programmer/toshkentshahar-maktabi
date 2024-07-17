import React from 'react'
import { festivalData } from '../services/festivalData'

const Festival = () => {
  return (
    <div className='mt-10'>
      <ol className='px-4'>
        {
          festivalData.map((item,index) =>(
            <li className=' mt-3 md: text-xl'>
              {item.title}
            </li>
          ))
        }
      </ol>
    </div>
  )
}

export default Festival