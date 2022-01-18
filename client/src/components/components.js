import React from 'react'
import './components.css'

export function Button(props) {
    return (
        <div className='group'>
            <div className="button text-2xl mt-10 drop-shadow-md button bg-accent-100/75 inline-block rounded-lg px-10 py-2 hover:bg-accent-100/60 hover:rounded-md hover:drop-shadow-xl transition-all duration-100 ease-linear">
                <text className='font-sans text-slate-200'>{props.text}</text>
            </div>
            <Tooltip tooltip={props.tooltip}></Tooltip>
        </div>
    )
}

export function Tooltip(props) {
    return (
        <span className="inline-block text-sm ml-5 bg-slate-800 text-slate-300 px-2.5 py-1.5 rounded-lg scale-0 group-hover:scale-100 transition-all duration-75 origin-left">
            {props.tooltip}
        </span>
    )
}