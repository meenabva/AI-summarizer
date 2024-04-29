import axios from "axios"

const API_URL = "http://localhost:8080"

const QuerySearch = async (query: String) => {
    return axios.get(API_URL + "?query=" + query)
}

export default QuerySearch