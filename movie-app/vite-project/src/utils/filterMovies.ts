import { Search } from "../models/movies-model";

export function filterMovies(movies:Search[],query:string){
    return movies.filter(movie => movie.Title.toLowerCase().includes(query.toLowerCase()))
}