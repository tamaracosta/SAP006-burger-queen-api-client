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