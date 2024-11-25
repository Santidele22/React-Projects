import { Search } from "../models/movies-model";
const apiKey = 'f06faba3';

export async function getMoviesServices(search:string){
   if(search === "") return 
   try {
      const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`
      const response = await fetch(url)
      const json = await response.json()
      const movies = json.Search
  
      return movies?.map((movie:Search) => ({
         imdbID: movie.imdbID,
         Title: movie.Title,
        Year: movie.Year,
        Poster: movie.Poster
      }))
  } catch (error) {
      console.error("Error fetching movies:", error);
  }
}