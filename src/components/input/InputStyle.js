import styled from "styled-components";

export const Container = styled.div `

.wrapper {
    margin-bottom: 1rem;
    width: 100%;
    }

input {
    color: var(--light-pink);
    border: 1px solid var(--grey);
    background: none;
    outline: none;
    width: 50vw;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    transition: 0.2s;
    display: block;
    margin: 1.5em;
    height: 2rem;
    
}

input:focus {
    border: 1px solid var(--light-pink);
}

label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
}



`