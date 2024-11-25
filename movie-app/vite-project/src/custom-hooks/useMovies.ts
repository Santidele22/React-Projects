import { useCallback, useMemo, useRef, useState } from "react"
import { Search } from "../models/movies-model"

import { getMoviesServices } from "../services/movies.services"
import { filterMovies } from "../utils/filterMovies"


export function useMovies(search:string,sort:boolean){
   
    const [responseMovie,setResponseMovies] = useState<Search[]>([])
    const previusSearch = useRef(search)

const getMovies = useCallback(async (search:string) => {

    if(previusSearch.current === search) return
    try {
        previusSearch.current = search
        const newMovies =  await getMoviesServices(search)
        setResponseMovies(newMovies)

    } catch (error) {
        console.error("Movies not found" , error)
    }
}, [])

const sortedMovie = useMemo(() => sort ? filterMovies(responseMovie) : responseMovie,[sort,responseMovie])

   return {responseMovie:sortedMovie , getMovies}
}

