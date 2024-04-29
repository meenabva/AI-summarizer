import React, { useState } from "react"
import './SearchBar.css'
import ReactMarkdown from "react-markdown"

type Props = {
    title: String,
    text: String
}

const Summary = (props: Props) => {

    const [text, setText] = useState(props.text)
    const [title, setTitle] = useState(props.title)

    return (
        <div className="summary">
            <pre>
            {text && 
                <ReactMarkdown>
                    {text}
                </ReactMarkdown>
            }
            </pre>
        </div>
    )
}

export default Summary;