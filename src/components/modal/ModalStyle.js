import styled from 'styled-components';
import { MdClose } from 'react-icons/md'
import img from '../../assets/gif-ovni.gif';

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
width: 100%;
height: 53vh;
box-shadow: 0 0px 63px #a2835f;
background-image: url(${img});
background-repeat: no-repeat;
background-position: center;
color: #000;
display: grid;
position: relative;
z-index: 10;
border-radius: 10px;
background-color: white;

@media (max-width: 480px) {
    height: 68vh;       
  }

@media (max-width: 768px) {
    width: 80vw;       
  }

@media (min-width: 769px) {
width: 60vw;       
}

@media (min-width: 1200px) {
width: 40vw;  
height: 55vh;      
}


`
export const ModalContent = styled.div `
display: flex;
flex-direction: column;
justify-content: space-between;
line-height: 1.8;

    p{
        margin: 2.5rem;
        color: var(--dark-orange);
        font-size: 1em;
        text-align: center;
        
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
color: var(--dark-orange);
`;
