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
    const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch (err) {
      console.error(err);
    }
  };

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
        <div className="flex items-stretch justify-between">
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
        <div className="text-right">
        <button onClick={copyToClipboard} type="button" className="back-btn text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg>{copied ? "Copied!" : "Copy Link"}
        </button>
        </div>
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