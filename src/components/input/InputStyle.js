import styled from "styled-components";

export const Container = styled.div `
   display: inline-block;
   width: 100%;

    input {
        color: var(--light-pink);
        border: 1px solid var(--grey);
        background: none;
        outline: none;
        font-size: 1rem;
        padding: 0.8rem;
        border-radius: 0.4rem;
        transition: 0.2s;
        display: block;
        margin-bottom: 1.5em;
        height: 2rem;
        width: 100%;

    }

    input:focus {
        border: 1px solid var(--light-pink);
    }

    label {
        display: block;
        font-size: 1.2rem;
        line-height: 1;
        padding-bottom: 0.5rem;
        text-align: left;
    }

        @media screen and (min-width: 768px) {
            width: 60%;
        }
        
        @media screen and (min-width: 1024px) {
            width: 51%;
            
        } 
   



`