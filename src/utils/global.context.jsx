import { createContext, useContext, useEffect, useReducer } from "react";
import { getPoster, getPosters, addPoster, deletePoster, updatePoster } from "./posters.api";
import Swal from 'sweetalert2'

const HolyContext = createContext()

const initialPosterState = []

const usePosterReducer = () => {
    const [state, dispatch] = useReducer((state, {type, payload}) => {
        switch (type) {
        case "GET_POSTERS":
            return payload
        case "ADD_POSTER":
            return [...state, payload]
        case "DELETE_POSTER":
            return state.filter((poster) => poster.id !== payload)
        case "UPDATE_POSTER":
            return state.map(poster => poster.id === payload.id ? payload : poster)
        default:
            return state;
        }
    }, initialPosterState)

    const asyncDispatch = (type, payload) => {
        switch (type) {
            case "GET_POSTERS":
                getPosters()
                .then(response => dispatch({type, payload: response.data}))
                .catch(error => dispatch("ERROR"));
                break;
            case "ADD_POSTER":
                addPoster(payload.poster)
                .then(response => {
                    dispatch({type, payload: response.data})
                    Swal.fire({
                        icon: 'success',
                        title: 'Agregado',
                        text: 'El poster ha sido creado correctamente',
                    })
                })
                .catch(error => {
                    dispatch("ERROR")
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No se pudo agregar el poster',
                        footer: error
                    })
                })
                break;                
            case "DELETE_POSTER":
                deletePoster(payload.id)
                .then(response => {
                    dispatch({type, payload: payload.id})
                    Swal.fire({
                        icon: 'success',
                        title: 'Eliminado',
                        text: 'El poster se eliminó correctamente',
                    })
            })
                .catch(error => {
                    dispatch("ERROR")
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No se pudo eliminar el poster',
                        footer: error
                    })
            });
                break;
            case "UPDATE_POSTER":
                updatePoster(payload.id, payload.poster)
                .then(response => {
                    dispatch({type, payload: response.data})
                    Swal.fire({
                        icon: 'success',
                        title: 'Actualizado',
                        text: 'El poster se actualizó correctamente',
                    })
            })
                .catch(error => {
                    dispatch("ERROR")
                     Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No se pudo actualizar el poster',
                        footer: error
                    })
            });
                break;
            
            default:
                break;
            }
    }
    return { state, dispatch: asyncDispatch }
};

const ContextProvider = ({children}) => {
    
    const posterReducer = usePosterReducer()

    useEffect(() =>{
        posterReducer.dispatch("GET_POSTERS")
    }, [])
    
    return(
        <HolyContext.Provider value={posterReducer}>
            {children}
        </HolyContext.Provider>
    )
}

export default ContextProvider

export const useHolyContext = () => useContext(HolyContext)