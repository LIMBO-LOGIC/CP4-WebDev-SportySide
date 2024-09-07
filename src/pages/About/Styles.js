import styled from "styled-components";

export const AboutStyled = styled.section`
  display: flex;
  align-items: center;
  height: 75vh;
  gap: 32px;
  padding: 0px 60px;

  img{
    height: 90%;
  }

  .boxText{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1{
    font-size: clamp(1.5rem, 0.6156rem + 2.8302vw, 3.375rem);
    color: var(--green-light-color);
  }

  p{
    font-size: clamp(0.75rem, 0.3962rem + 1.1321vw, 1.5rem);
  }

  @media(max-width: 1200px){
    img{
      height: auto;
      width: 50%;
    }
  }

  @media(max-width: 860px){
    display: flex;
    flex-direction: column-reverse;
    justify-content: start;
    padding-top: 32px;
    height: auto;
    
    img{
      height: auto;
      width: 80%;
    }
  }
`;
