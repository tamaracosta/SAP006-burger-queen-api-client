import styled from 'styled-components';
import { MdClose } from 'react-icons/md'

export const Background = styled.div `
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 0;
`
export const ModalWrapper = styled.div `
width: 50vw;
height: 50vh;
box-shadow: 0 5px 16px var(--pink);
background: var(--black);
color: #000;
display: grid;
position: relative;
z-index: 10;
border-radius: 10px;

@media (max-width: 768px) {
    width: 80vw;       
  }
`
export const ModalContent = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.8;
color: red;

    p{
        margin-bottom: 1rem;
        color: var(--light-pink);
        font-size: 1.5em;
        text-align: center;
        margin-bottom: 2em;
    }
`;

export const CloseModalButton = styled(MdClose) `
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 32px;
height: 32px;
padding: 0;
z-index: 10;
color: var(--light-pink);
`;
