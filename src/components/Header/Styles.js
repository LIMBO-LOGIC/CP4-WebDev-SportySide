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
`