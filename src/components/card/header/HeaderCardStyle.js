import styled from "styled-components";

export const ButtonCard = styled.button `
background-color: var(--dark-orange);
cursor: pointer;
padding: 0.8rem;
border-radius: 0.4rem;
border: none;
width: 100%;
margin-bottom: 1.5em;

&&:hover {
    background-color: #f9ce6d;
}

`
export const Content = styled.div `
font-size: 1.5em;
display: flex;
align-items: center;
`

export const Title = styled.p `
color: var(--light-black);
width: 100%;

`