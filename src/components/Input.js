import React from 'react'

const Input = ({label, id, ...props}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props}/>
        </div>
    )
}

export default Input
