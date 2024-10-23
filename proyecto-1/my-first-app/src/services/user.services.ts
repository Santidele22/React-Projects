import { User } from "../models/user.models"
import { fetchingData } from "../utils/fetchingData"

const URL = "https://randomuser.me/api/?results=3"

export async function userData():Promise<User[]>{
    try {
        const users = await fetchingData<{ results: User[] }>(URL)
        if(!users){
            throw new Error("No se encuentra ningun usuario")
        }
        return users.results
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error(String(error)); // Si el error no es de tipo Error, lo convertimos a string
        }
    }
}