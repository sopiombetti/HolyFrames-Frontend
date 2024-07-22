import { useHolyContext } from '../utils/global.context'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react';

const Detail = () => {

    const {state} = useHolyContext()
    const [posterSelected, setPosterSelected] = useState({})
    const param = useParams()

    useEffect(() => {
        const post = state.find((poster) => poster.id == param.id)
        if(post){
            setPosterSelected(post)
        }
        else{
            console.log('error')
        }
      }, [param.id, state])

      return (
        <section className='flex flex-col items-center'>
            <div className='flex flex-col max-w-4xl mt-8 mb-8 mx-4'>
            <img className='' src={posterSelected.image}/>
            <h2 className='font-semibold mt-8'>{posterSelected.movie} ({posterSelected.year})</h2>
            <p className='mt-5'>{posterSelected.description}</p>
            <div className='mt-5 flex flex-col space-y-5'>
                <div className=''>
                    <p>TIMECODE (Es el momento exacto en que la escena aprece en la película): {posterSelected.timecode}</p>
                </div>
                <div className=''>
                    <p>Género: {posterSelected.genre}</p>
                </div>
                <div className=''>
                    <p>Director: {posterSelected.director}</p>
                </div>
                <div className=''> 
                    <p>Director de fotografía: {posterSelected.dirfoto}</p>
                </div>
            </div>
            </div>
        </section>
      )


}

export default Detail