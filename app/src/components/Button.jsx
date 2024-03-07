import React from "react"

export default function Button({text, event}){
    return(
        <button onClick={event} type="submit" className="flex w-52 h-16 justify-center rounded-sm bg-red-pink px-2 py-5 text-md font-semibold text-white shadow-sm border-2 border-paia">
            {text}
        </button>
    )
}