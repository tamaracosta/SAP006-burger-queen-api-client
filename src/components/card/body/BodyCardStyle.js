import styled from "styled-components";
import img from '../../../assets/background-resume.jpg';

export const BackgroundCard = styled.div `
width: 100%;
height: auto;
border: 2px solid #5d3f09;
background-image: url(${img});
border-radius: 10px;
box-shadow: 0 0 1em orange;
margin-bottom: 2.5em;
animation: up 1s;
background-repeat: round;
padding: 0.5em;

`
export const DivProduct = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
margin: 0.8em auto;
padding: 0.5em;


@media screen and (max-width: 425px) {
    flex-direction: column;
        
    }
`
export const DivProductKitchen = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin: 0.8em auto;
padding: 0.5em;

`






