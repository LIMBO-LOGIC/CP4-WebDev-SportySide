import styled from "styled-components";

export const CardProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  max-width: 200px;
  height: 358px;
  border-radius: 8px;
  border: 1px solid #d8d5d5;
  padding: 20px 12px;
  background-color: var(--white-default);
  box-shadow: 0px 4px 4px 0px #d8d5d5;

  button {
    border: none;
    color: inherit;
    background-color: inherit;
    padding: 4px 12px;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    color: var(--white-default);
    background-color: var(--bg-color);
    transition: all 0.5s;
  }

  img{
    transition: all .5s;
  }

  img:hover{
    scale: 1.02;
  }

  button:hover {
    color: var(--white-default);
    background-color: var(--green-light-color);
  }

  .nameProduct {
    font-size: 1.06rem;
    font-weight: 500;
    color: var(--black-default);

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }

  .prices {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .prices span {
    font-size: 0.875rem;
    color: #8c8c8c;
    text-decoration: line-through;
  }

  .prices p {
    font-size: 1rem;
    font-weight: 500;
  }
`;
