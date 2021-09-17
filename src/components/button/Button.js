import React from 'react'
import { Container } from './ButtonStyle';

const Button = ({children, ...props}) => {
    const variant = props.className ? props.className : "";
    const batata = `btn-class ${variant}`;

    return (
        <Container {...props} className={batata}>
           {children}
        </Container>
    )
};

export default Button
