import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 24px 120px;
  height: max-content;
  width: 100vw;
  background-color: var(--bg-color);
  color: var(--white-default);

  .navFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navFooter nav {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .itemFooter {
    padding: 12px 12px;
    transition: all 0.5s;
    font-size: 1rem;
  }

  .itemFooter:hover {
    border-radius: 7px;
    color: var(--yellow-color);
    background-color: var(--green-light-color);
  }

  .socialMedia{
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .socialMedia svg{
    font-size: 1.5rem;
    transition: all .5s;
    color: var(--white-default);
  }

  .socialMedia svg:hover{
    cursor: pointer;
    color: var(--yellow-color);
  }

  .copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copyright img {
    height: 48px;
    width: auto;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .links a {
    transition: all 0.5s;
  }

  .links a:hover {
    text-decoration: underline;
  }
`;
