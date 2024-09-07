import styled from "styled-components";

const MainLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(37, 37, 37);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftLogin = styled.div`
  background-color: antiquewhite;
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 3vw;
  color: rgb(0, 126, 165);
`;

const Image = styled.img`
  width: 35vw;
`;

const RightLogin = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CardUsuario = styled.div`
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

const CardHeading = styled.h2`
  color: rgb(0, 126, 165);
  font-weight: bold;
  margin: 0;
  text-align: center;
  font-size: 50px;
  text-transform: uppercase;
`;

const Textfield = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`;

const Label = styled.label`
  color: rgb(218, 218, 218);
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 15px;
  background-color: rgb(0, 126, 165);
  color: rgb(218, 218, 218);
  box-shadow: 0px 10px 40px #00000056;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: rgb(218, 218, 218);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 16px 0px;
  border: none;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #ffffff;
  background-color: rgb(0, 126, 165);
  cursor: pointer;
  font-weight: 800;
  box-shadow: 0px 10px 40px #00000056;

  &:hover {
    background-color: rgb(0, 107, 139);
    box-shadow: 0px 10px 40px -12px #00879952;
  }
`;
