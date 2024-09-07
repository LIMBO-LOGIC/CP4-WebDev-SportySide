import styled from "styled-components";


export const MainContact = styled.section`
  display: flex;
  align-items: stretch; /* Garantir que os itens internos ocupem a altura total */
  justify-content: center;
  width: 100vw;
  min-height: 100%; /* Definindo a altura mínima para 100% do container */
  background-color: rgb(37, 37, 37);

  @media(max-width: 860px){
    height: auto;
    padding: 32px 0px;
  }
`;

export const LeftContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  gap: 20px;
  background-color: var(--text-green-color);
  flex-grow: 1; /* Expande o LeftContact para ocupar o máximo de espaço vertical */

  img{
    height: 40vh;
  }

  @media(max-width: 860px){
    display: none;
  }
`;

export const Heading = styled.h1`
  font-size: 3vw;
  color: var(--bg-color);
`;

// export const Image = styled.img`
//   width: 35vw;
// `;

export const RightContact = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
`;

export const CardUsuario = styled.div`
  width: 60%;
  background: #303030;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 35px;
  border-radius: 20px;
  box-shadow: 0px 10px 40px #00000056;
`;

export const CardHeading = styled.h2`
  color: var(--text-green-color);
  font-weight: bold;
  margin: 0;
  text-align: center;
  font-size: 50px;
`;

export const Textfield = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`;

export const Label = styled.label`
  color: rgb(218, 218, 218);
  margin-bottom: 10px;
  text-align: start;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 15px;
  background-color: var(--green-light-color);
  color: rgb(218, 218, 218);
  box-shadow: 0px 10px 40px #00000056;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: rgb(218, 218, 218);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 16px 0px;
  border: none;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #ffffff;
  background-color: var(--green-light-color);
  cursor: pointer;
  font-weight: 800;
  box-shadow: 0px 10px 40px #00000056;
  transition: all .5s;

  &:hover {
    background-color: var(--text-green-color);
    box-shadow: 0px 10px 40px -12px #00879952;
  }
`;
