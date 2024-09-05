import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 120px;
    width: 100vw;
    height: 100px;
    background-color: var(--bg-color);

    img{
        height: 100%;
        width: auto;
    }

    ul {
        display: flex;
        align-items: center;
        gap: 60px;
    }

    .itemMenu {
        color: var(--text-green-color);
    }

    .itemMenu a {
        padding: 12px 20px;
        transition: all .5s;
        font-size: 1.25rem;
    }
    
    .itemMenu a:hover{
        border-radius: 7px;
        color: var(--yellow-color);
        background-color: var(--green-light-color);
    }

    @media(max-width: 1020px){
        padding: 24px 48px;

        ul{
            gap: 40px;
        }
    }
`