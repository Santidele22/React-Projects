import { useRef, useState } from "react"
import { Search } from "../models/movies-model"

import { getMoviesServices } from "../services/movies.services"


export function useMovies(search:string){
   
    const [responseMovie,setResponseMovies] = useState<Search[]>([])
    const previusSearch = useRef(search)
    async function getMovies(){
    if(previusSearch.current === search) return
    try {
        previusSearch.current = search
        const newMovies =  await getMoviesServices(search)
        setResponseMovies(newMovies)
    } catch (error) {
        console.error("Movies not found" , error)
    }
}
   return {responseMovie, getMovies}
}