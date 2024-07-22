import { Form, useSearchParams } from 'react-router-dom'
import { useHolyContext } from '../utils/global.context'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Admin = () => {

    const {state, dispatch} = useHolyContext()

    const [section, setSection] = useState({list: true, form: false})

    const handleButton = () => {
        setSection({list: false, form: true})
    }

    const [newPoster, setNewPoster] = useState({
        movie: "",
        year: 0,
        description: "",
        director: "",
        dirfoto: "",
        timecode: "",
        genre: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch("ADD_POSTER", {poster: newPoster})
        setSection({list: true, form: false})
    }

    const handleDelete = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: true
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Está seguro de que desea eliminar el poster?',
            text: "Los datos se perderán",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch("DELETE_POSTER", {id: id})
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'El poster no se ha eliminado',
                'error'
              )
            }
          })
    }

    return (
        <div className="w-screen">
                <div className="flex flex-col space-y-5 md:flex-row md:justify-between px-5 pt-5">
                    <h2>Administrador</h2>
                    <button onClick={handleButton} className="p-1 w-32 text-sm bg-cyan-800 text-white rounded">Agregar poster</button>
                </div>
                {section["list"] && 
                <div>
                    <ul role="list" className="divide-y divide-gray-100 py-5 px-5 w-full">
                    {state.map((poster) => (
                        <li key={poster.id} className="flex h-36 justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <p className='text-center rounded-full w-8 h-8 border-2 border-black'>{poster.id}</p>
                            <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{poster.movie}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{poster.timecode}</p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 md:flex md:space-x-5 sm:items-end md:pr-7">
                            <button className="p-1 w-32 text-sm bg-cyan-600 text-white rounded">Editar</button>
                            <button onClick={()=>handleDelete(poster.id)} className="p-1 w-32 text-sm bg-red-500 text-white rounded">Eliminar</button>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>
                }
                {section["form"] &&
                <div className='flex items-center justify-center py-5'>
                    <form onSubmit={handleSubmit} className="w-4/5 mt-8 flex flex-col grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 lg:w-3/5">
                        <div className="sm:col-span-4">
                            <label htmlFor="movie" className="block text-md font-medium leading-6 text-gray-900">
                            Película*
                            </label>
                            <div className="mt-2">
                            <div className="flex rounded-md shadow-md ring-1 ring-inset ring-secondary-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary sm:max-w-md">
                                <input
                                type="text"
                                name="movie"
                                id="movie"
                                onChange={(e) => {setNewPoster({...newPoster, movie: e.target.value})}}
                                className="block grow border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                
                                />
                            </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="year" className="block text-md font-medium leading-6 text-gray-900">
                            Año de la Película*
                            </label>
                            <div className="mt-2">
                            <div className="flex rounded-md shadow-md ring-1 ring-inset ring-secondary-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary sm:max-w-md">
                                <input
                                type="number"
                                name="year"
                                id="year"
                                onChange={(e) => {setNewPoster({...newPoster, year: e.target.value})}}
                                className="block grow border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                
                                />
                            </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="description" className="block text-md font-medium leading-6 text-gray-900">
                            Descripción*
                            </label>
                            <div className="mt-2">
                            <div className="flex rounded-md shadow-md ring-1 ring-inset ring-secondary-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary sm:max-w-md">
                                <input
                                type="text"
                                name="description"
                                id="description"
                                onChange={(e) => {setNewPoster({...newPoster, description: e.target.value})}}
                                className="block grow border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                
                                />
                            </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="director" className="block text-md font-medium leading-6 text-gray-900">
                            Director*
                            </label>
                            <div className="mt-2">
                            <div className="flex rounded-md shadow-md ring-1 ring-inset ring-secondary-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary sm:max-w-md">
                                <input
                                type="text"
                                name="director"
                                id="director"
                                onChange={(e) => {setNewPoster({...newPoster, director: e.target.value})}}
                                className="block grow border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                
                                />
                            </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="dirfoto" className="block text-md font-medium leading-6 text-gray-900">
                            Director de Fotografía*
                            </label>
                            <div className="mt-2">
                            <div className="flex rounded-md shadow-md ring-1 ring-inset ring-secondary-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary sm:max-w-md">
                                <input
                                type="text"
                                name="dirfoto"
                                id="dirfoto"
                                onChange={(e) => {setNewPoster({...newPoster, dirfoto: e.target.value})}}
                                className="block grow border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                
                                />
                            </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="timecode" className="block text-md font-medium leading-6 text-gray-900">
                            TIMECODE*
                            </label>
                            <div className="mt-2">
                            <div className="flex rounded-md shadow-md ring-1 ring-inset ring-secondary-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary sm:max-w-md">
                                <input
                                type="text"
                                name="timecode"
                                id="timecode"
                                onChange={(e) => {setNewPoster({...newPoster, timecode: e.target.value})}}
                                className="block grow border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                
                                />
                            </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="genre" className="block text-md font-medium leading-6 text-gray-900">
                            Género*
                            </label>
                            <div className="mt-2">
                            <div className="flex rounded-md shadow-md ring-1 ring-inset ring-secondary-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary sm:max-w-md">
                                <input
                                type="text"
                                name="genre"
                                id="genre"
                                onChange={(e) => {setNewPoster({...newPoster, genre: e.target.value})}}
                                className="block grow border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                
                                />
                            </div>
                            </div>
                        </div>
                        <button type='submit' className="w-2/5 md:w-1/5 rounded-md bg-cyan-900 px-3 py-2 text-sm font-semibold text-color-text-white shadow-sm hover:bg-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Agregar</button>
                    </form>
                </div>
                }
        </div>
      )

}

export default Admin