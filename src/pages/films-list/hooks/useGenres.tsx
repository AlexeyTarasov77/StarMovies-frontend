import { useEffect, useState } from "react"
export const BACKEND_URL ="http://127.0.0.1:8000/"

export interface IGenres{
    id: number;
    name: string;
}

export function useGenres(){
    const [genres, setGenres] = useState<IGenres[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()

    useEffect(()=>{
        async function getGenres(){
            try{
                setIsLoading(true)
                const response = await fetch(`${BACKEND_URL}genres/all`)
                const genres = await response.json()
                setGenres(genres)
            }
            catch(error){
                const err = error instanceof Error ? error.message : undefined
                setError(`${err}`)
            }
            finally{
                setIsLoading(false)
            }
        }
        getGenres()
        
    },[])
    return {genres: genres, isLoading: isLoading, error: error}
}