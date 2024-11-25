import { Search } from "../models/movies-model";

export function filterMovies(movies:Search[]){
    return [...movies].sort((a,b) => a.Title.localeCompare(b.Title))
}