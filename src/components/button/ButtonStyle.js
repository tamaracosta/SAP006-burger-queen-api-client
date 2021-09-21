import styled from "styled-components";

export const Container = styled.button `
  background: transparent;
  font-size: 1.2rem;
  min-width: 8rem;
  cursor: pointer;
  border: 2px solid var(--pink);
  border-radius: 0.4rem;
  color: var(--pink);
  padding: 0.8rem 1.2rem;
  box-shadow: inset 0 0 32px 0 var(--pink), 0 0 32px 0 var(--pink);
  margin: 1.5em;
    
 &:hover {
  background: var(--pink);
  color: var(--dark-purple);
  box-shadow: 0 0 30px 10px var(--pink);
 }


`