import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --bg-color: #053536;
        --green-light-color: #64BC46;
        --yellow-color: #FFBB02;
        --red-color: #FF5353;
        --blue-color: #4285F4;
        --green-light-color: #1E494A;
        --text-green-color: #AEE1D5;
        --text-gray-color: #A6A9B8;
        --bg-body-color: #F1F2F6;
        --black-default: #000;
        --white-default: #fff;
    }

    body,
    #root{
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    section{
        flex-grow: 1;
    }

    main{
        display: flex;
        flex-direction: column;
        width: auto;
        flex-grow: 1;
        background-color: cyan;
    }
`

export default GlobalStyle