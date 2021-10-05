import styled from "styled-components";

export const Paragraph = styled.p`
  color: var(--light-white);
  margin-top: 0.7em;

`;


export const SecundaryParagraph = styled(Paragraph) `
color: red;
`

export const LinkStyle = styled.span`
color: var(--yellow);

`

export const DefaultTitle = styled.p`
text-align: center;
font-size: 1.5em;
margin: 0.7em;
color: var(--light-white);

  @media screen and (min-width: 1024px) {
    font-size: 1.2em;
              
  }
`