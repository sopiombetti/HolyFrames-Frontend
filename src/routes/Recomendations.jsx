import React from 'react'
import Carousell from '../components/Carousell'

const Recomendations = () => {
  return (
    <div className='py-8 flex flex-col items-center'>
      <div className='flex justify-center'>
        <h3 className='text-base md:text-xl px-3 text-center'>Además de ofrecerte nuestros posters, te recomendamos películas para que disfrutes</h3>
      </div>
      <div className='mt-5 w-10/12 md:w-8/12'>
        <Carousell/>
      </div>
    </div>
  )
}

export default Recomendations