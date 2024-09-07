import styled from "styled-components";

export const ProductStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: var(--bg-body-color);
  padding: 32px 120px;
  gap: clamp(1rem, 0.4333rem + 0.8889vw, 1.5rem);

  h1{
    color: var(--bg-color);
  }

  .containerProduct {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(250px, 1fr)
    ); /* Define a largura mínima dos cards */
    gap: 20px; /* Espaçamento entre os cards */
  }

  @media (max-width: 1020px) {
    padding: 24px 48px;
  }

  @media (max-width: 800px) {
    padding: 24px 48px;

    .containerProduct {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
`;
