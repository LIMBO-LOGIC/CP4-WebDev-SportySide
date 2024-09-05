import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px;
  background-color: var(--bg-body-color);
  text-align: center;
  color: var(--text-gray-color);
  overflow: hidden;
`;

export const Image = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: var(--green-light-color);
  margin-bottom: 20px;
  font-weight: bold;
`;

export const Message = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: var(--text-gray-color);
  max-width: 600px;

  a {
    color: var(--blue-color);
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
