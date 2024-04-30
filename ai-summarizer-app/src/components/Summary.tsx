import React, { useEffect, useState } from "react"
import './SearchBar.css'
import ReactMarkdown from "react-markdown"
import { getSearchById } from "../services/SearchService"
import { Link, useParams } from "react-router-dom"

type Props = {
    id: string
}

const Summary = (props: any) => {

    const [text, setText] = useState("")
    const { searchId } = useParams<{searchId?: string | undefined}>()

    useEffect(() => {
      getSummaryById()
    }, [])

    const getSummaryById = async () => {
        getSearchById(searchId).then((res) => {
            setText(res.data.articleText)
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <>
        <div className="text-left">
        <Link to="/">
            <button type="button" className="back-btn focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 max-w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left mr-1" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg> 
            <label>Back to Search</label>
            </button>
        </Link>
        </div>
        <div className="summary">
            <pre>
            {text && 
                <ReactMarkdown>
                    {text}
                </ReactMarkdown>
            }
            </pre>
        </div>
        </>
    )
}

export default Summary;