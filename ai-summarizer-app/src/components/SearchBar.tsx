import React, { useState } from "react"
import './SearchBar.css'
import {QuerySearch} from "../services/SearchService"
import Summary from "./Summary"
import { useNavigate } from "react-router-dom"
import ReactLoading from "react-loading"

type Props = {}

const SearchBar = (props: Props) => {

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSearch(e: Event) {
    e.preventDefault()
    setLoading(true)
    console.log(searchQuery)
    QuerySearch(searchQuery).then((res) => {
      console.log(res)
      setLoading(false)
      navigate('/'+ res.data)
    }).catch((e) => {
      setLoading(false)
      console.log("error: " + e)})
  }

  return (
    <div className="mx-auto">
       <div className="my-3">
        <h2 className="text-4xl font-bold dark:text-white">AI Summarizer</h2>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-1">
          Generate a summary on any topic with references using AI technology.
        </p>
      </div>
      <form className="max-w-md mx-auto app-center mt-10">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Search any topic" required />
          <button className="text-white absolute end-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" onClick={(e: any) => handleSearch(e)}>Search</button>
        </div>
      </form>
      {loading && <ReactLoading className="my-10 mx-auto" type="spin" color="rgb(126 34 206)" height={250} width={125} />}
    </div>
  )
}

export default SearchBar