import React from 'react'
import { useHolyContext } from '../utils/global.context'
import { Link } from 'react-router-dom'

const Card = ({poster}) => {

  console.log(poster)
  console.log(poster.id)

  return (
    <div className='flex flex-col '>
        <img className='w-[550px]' src={poster.image}/>
        <Link to={"/detail/" + poster.id} className='no-underline text-sm bg-cyan-900 max-w-[75px] p-1 mt-3 mb-2 rounded-md text-white hover:cursor-pointer hover:bg-cyan-800 md:text-base'>Más info</Link>
    </div>
  )
}

export default Card