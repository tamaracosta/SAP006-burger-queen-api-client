import styled from "styled-components";

export const Container = styled.button `
  background: transparent;
  font-size: 1.2rem;
  min-width: 8rem;
  cursor: pointer;
  border: 2px solid var(--dark-orange);
  border-radius: 0.4rem;
  color: var(--dark-orange);
  padding: 0.8rem 1.2rem;
  box-shadow: inset 0 0 32px 0 var(--dark-orange), 0 0 32px 0 var(--dark-orange);
  margin: 1.5em;
    
 &:hover {
  background: var(--dark-orange);
  color: var(--dark-purple);
  box-shadow: 0 0 30px 10px var(--dark-orange);
 }


`

export const SecundaryButton = styled(Container)`
background: #0d2a0d;
color: #cbcbcb;
box-shadow: none;
border: 2px solid green;

&:hover {
background: transparent;
border: 2px solid green;
color: green;
box-shadow: 0 0 30px 10px green;
 }
`

export const RedButton = styled(SecundaryButton)`
background: #9d0505;
color: var(--white);
border: none;

&:hover {
  box-shadow: 0 0 30px 10px #9d0505;
  border: 2px solid #9d0505;
  color: #9d0505;
  
}

`

export const GreenButton = styled(SecundaryButton)`
background: #138b2f;
color: var(--white);
border: none;

&:hover {
  box-shadow: 0 0 30px 10px #138b2f;
  border: 2px solid #138b2f;
  color: #138b2f;
  
}

`

export const OrderButton = styled(Container)`
  background: transparent;
  color: #d1a673;
  box-shadow: 0 0 26px 4px #ce8e43;
  border: none;


&:hover {
  background: transparent;
  border: none;
  color: white;
  box-shadow: 0 0 30px 10px white;

}
`