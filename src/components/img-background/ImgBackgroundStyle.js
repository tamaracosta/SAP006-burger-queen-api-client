import styled from "styled-components";
import img from '../../assets/bg-small.png';
import imgBigger from '../../assets/bg-bigger.png';

const ImgBackgroundStyle = styled.div `
   
   background-image: url(${img});
    background-repeat: no-repeat;
    width: 100%;
    min-height: 100vh;
    top:0;
    z-index: -10;
    position: fixed;
    background-size: cover;
    background-position: center;

    @media screen and (min-width: 768px) {
        background-image: url(${imgBigger});
        filter: brightness(0.6);
    }

`
export default ImgBackgroundStyle
