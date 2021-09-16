import React from 'react'
import './Button.css'; 

const Button = ({children, ...props}) => {
    const variant = props.className ? props.className : "";
    const batata = `btn-class ${variant}`;

    return (
        <button {...props} className={batata}>
           {children}
        </button>
    )
};

export default Button
