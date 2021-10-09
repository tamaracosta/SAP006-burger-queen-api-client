import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    
    
}

:root {
    --white: #FFF;
    --light-white: #dadada;
    --black: #000000;
    --light-black: #121212;
    --yellow: #F6C964;
    --dark-purple: #050441;
    --grey: #4D4C80;
    --dark-grey: #363636;
    --red: red;
    --light-orange: #CE8E43;
    --dark-orange: #E29D4B;
    --green: #0F7A1A;   
     
}

body {
    color: #CE8E43;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2em;
    background-color: var(--light-black);

    @media (min-width: 768px) {
    font-size: 1.5em;
  }
}
   

.container {
    text-align: center; 
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;

    @media (min-width: 801px) {
    width: 70%;       
  }
}

.ocultar-senha {
    position: absolute;
    
}

.login-eye {
    cursor: pointer;
    margin-left: -30px;
    
}

`