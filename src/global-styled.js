import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --bg-color: #053536;
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