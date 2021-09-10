import React from 'react'
import './style.css'; 

const Button = (props) => {
    const batata = `abacaxi ${props.variant}`;

    return (
        <button className={batata}>
           {props.children}
        </button>
    )
};

export default Button
