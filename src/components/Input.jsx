import React from 'react'

function Input(props) {
  return (
    <div className="flex flex-col gap-1.5">
        <label 
            htmlFor={props.field} 
            className="text-xs text-gray-400 font-semibold"
        >{props.label}</label>
        <input 
            type={props.type} 
            id={props.field}
            className="bg-gray-100 rounded-lg px-4 py-3 text-xs text-gray-500 outline-hidden" 
            placeholder={props.placeholder}
        />
    </div>
  )
}

export default Input