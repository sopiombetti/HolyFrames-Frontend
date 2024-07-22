import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useHolyContext } from '../utils/global.context'

const Home = () => {

  const {state} = useHolyContext()
  const [filtered, setFiltered] = useState([])

  useEffect(() =>{
    setFiltered(state)
}, [])

  const handleButton = (value) => {
    const filter = state.filter((poster) => poster.genre == value)
    if(filter){
      setFiltered(filter)
    }
    else{
      console.log("No existen posters del género seleccionado")
    }
  }

  const handleAll = () => {
    setFiltered(state)
  }


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const regex = /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/

  const handleSubmit = (e) => {
    e.preventDefault()

    if(name.length > 4 && regex.test(email)){
      setMessage('Muchas gracias por escribirnos. Nos contactaremos a la brevedad con más información')
    }
    else{
      setMessage('Por favor, verifica que la información sea correcta')
    }

    console.log(state)
  }

  return (
    <div className='mt-0'>
      <div className='bg-[url("/fondo.jpg")] bg-contain py-5'>
        <div className='flex flex-col space-y-3 items-center md:flex-row md:justify-around md:items-center md:px-3'>
          <img className='w-[150px] rounded-xl border-black border-2 shadow-md shadow-black md:w-[250px]' src='/logo.jpeg' alt=''/>
          <h1 className='text-2xl font-bold leading-relaxed text-center drop-shadow-2xl text-white w-3/4 md:w-1/2 lg:w-5/12 md:text-4xl md:leading-relaxed md:text-left'>Elegimos fotogramas icónicos de películas y los convertimos en posters.</h1>
        </div>
      </div>
      
      <section className='flex flex-col items-center py-5 mt-10 lg:mt-20 lg:flex-row lg:items-start lg:justify-between mx-5'>
        <div className='flex flex-col border-cyan-900 border-2 shadow-2xl p-2'>
          <h5>Filtrar por género:</h5>
          <div className='flex space-x-4 lg:flex-col lg:items-center lg:space-x-0 lg:mt-5'>
            <button onClick={() => handleButton("Acción")} className='w-full hover:bg-slate-300 hover:rounded-md md:my-2'>Acción</button>
            <button onClick={() => handleButton("Animada")} className='w-full hover:bg-slate-300 hover:rounded-md md:my-2'>Animadas</button>
            <button onClick={() => handleButton("Ciencia Ficción")} className='w-full hover:bg-slate-300 hover:rounded-md md:my-2'>Ciencia Ficción</button>
            <button onClick={() => handleButton("Comedia")} className='w-full hover:bg-slate-300 hover:rounded-md md:my-2'>Comedia</button>
            <button onClick={() => handleButton("Drama")} className='w-full hover:bg-slate-300 hover:rounded-md md:my-2'>Drama</button>
            <button onClick={handleAll} className='w-full hover:bg-slate-300 hover:rounded-md md:my-2'>Todos</button>
          </div>
        </div>
        <div className='mx-3 grid grid-cols-1 xs:pt-6 md:grid-cols-2 gap-5 md:max-w-[1000px] lg:pt-0'>
          {filtered.map(poster => <Card poster={poster} key={poster.id}/>)}
        </div>
      </section>
      <section className='flex flex-col justify-center items-center pt-5 px-3 mt-5'>
        <h3 className='text-xl text-center'>¿Te gustaría ver opciones de otras películas?</h3>
        <h3 className='text-xl'>¡Escribinos!</h3>
        <form onSubmit={handleSubmit} className='flex flex-col mt-5 space-y-4'>
          <label for='name'>Tu nombre y apellido:</label>
          <input type='text' name='name' onChange={(e) => setName(e.target.value)} className='border-1 border-cyan-900 rounded-md'/>
          <label for='email'>Tu mail:</label>
          <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} className='border-1 border-cyan-900 rounded-md'/>
          <label for='comment'>Contanos de qué películas te gustaría ver posters:</label>
          <textarea name='comment' className='border-1 border-cyan-900 rounded-md'/>
          <button type='submit' className='bg-cyan-900 rounded-md p-1.5 w-[90px] text-white hover:cursor-pointer hover:bg-cyan-800'>Enviar</button>
        </form>
        <h4 className='text-base my-3 text-red-600'>{message}</h4>
      </section>
    </div>
  )
}

export default Home