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
      throw new Error("Error occured while fetching summary")
  }

  return (
    <div className="mx-auto">
       <div className="my-3 flex align-middle justify-center">
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-robot mx-2" viewBox="0 0 16 16">
  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
</svg>
        <h2 className="text-4xl font-bold dark:text-white">AI Summarizer</h2>
      </div>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-1">
          Generate a summary on any topic with references using AI technology.
        </p>
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