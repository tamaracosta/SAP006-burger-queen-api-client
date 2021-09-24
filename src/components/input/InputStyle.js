import styled from "styled-components";

export const Container = styled.div `
   display: inline-block;
   width: 100%;

   @media screen and (min-width: 768px) {
        width: 60%;
    }
        
     @media screen and (min-width: 1024px) {
        width: 51%;
            
    }


`
export const InputStyle = styled.input `
    color: var(--light-white);
    border: 1px solid var(--light-orange);
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

    &:focus{
    border: 1px solid var(--light-orange);
    }
`

export const Label = styled.label `
display: block;
        font-size: 1.2em;
        line-height: 1;
        padding-bottom: 0.5rem;
        text-align: left;
        color: var(--light-orange)
`
    
 
  



