import styled from "styled-components";

export const BoxProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  p{
    font-size: 2rem;
    font-weight: 600;
  }

  .listProduct {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
`;
