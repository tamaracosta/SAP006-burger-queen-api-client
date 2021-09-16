import React from 'react'
// import './Input.css'

const Input = ({label, id, ...props}) => {

    return (
        <div className='wrapper'>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props}/>
            {/* <p className='error'>Error</p> */}
        </div>
    )
}

export default Input
