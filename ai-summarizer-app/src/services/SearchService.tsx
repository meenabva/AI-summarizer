import axios from "axios"

const API_URL = "http://localhost:8080"
   
export const QuerySearch = async (query: string) => {
    return axios.post(API_URL + "?query=" + query)
}

export const getSearchById = async(id: string | undefined) => {
    return axios.get(API_URL + "/" + id)
}