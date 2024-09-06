import styled from "styled-components";

export const ContainerHeaderStyled = styled.div`
  .css-1wvake5 {
    border: none !important;
    border-color: none !important;
  }

  .css-dip3t8 {
    background: none !important;
  }

  .ps-menu-button {
    height: auto !important;
  }

  .ps-menu-button:hover {
    background: none !important;
  }

  .css-1t8x7v1:hover {
    background: none !important;
  }

  .css-dip3t8 {
    background-color: var(--bg-color) !important;
  }

  .css-dip3t8 {
    padding: 24px 0px;
  }

  .containerHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--bg-color) !important;
  }

  .navegation {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .imgMenu {
    height: auto;
    width: 90%;
    margin-bottom: 60px;
  }

  .itemMenu {
    width: 100%;
    padding: 12px 24px;
    text-align: center;
    font-size: 1.15rem;
    transition: all .5s;
    color: var(--white-default);
  }

  .itemMenu:hover{
    border-radius: 7px;
    color: var(--yellow-color);
    background-color: var(--green-light-color);
  }
`;

export const HeaderMobileStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 36px;
  width: 100vw;
  height: 100px;
  background-color: var(--bg-color);

  img {
    height: 100%;
    width: auto;
  }

  .iconMenu {
    height: 80%;
    width: auto;
    color: var(--white-default);
  }
`;
