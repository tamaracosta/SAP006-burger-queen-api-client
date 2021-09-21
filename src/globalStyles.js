import { createGlobalStyle } from 'styled-components';
import img from './assets/background-tijolo.png';

export default createGlobalStyle `

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    
}

:root {
    --white: #FFF;
    --black: #000000;
    --pink: #F72585;
    --light-pink: #F9B1D2;
    --yellow: #FAFF02;
    --dark-purple: #050441;
    --grey: #4D4C80;
    --red: red;   
}

body {
    color: var(--light-pink);
    font-family: 'Open Sans', sans-serif;
    background-image: url(${img});
      
    
}

.container {
    text-align: center; 
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}

.ocultar-senha {
    position: absolute;
    
}

.login-eye {
    cursor: pointer;
    margin-left: -30px;
    
}

.option-role {
    display: flex;
    
}

`