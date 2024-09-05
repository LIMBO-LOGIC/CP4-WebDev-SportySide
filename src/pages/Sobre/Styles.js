import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: var(--bg-color);
  color: var(--text-green-color);
  transition: background-color 0.5s ease, transform 0.3s ease;

  &:hover {
    background-color: var(--green-light-color);
    transform: scale(1.02);
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20%;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin-bottom: 20px;
  color: var(--text-gray-color);
  transition: color 0.3s ease;

  &:hover {
    color: var(--text-green-color);
  }
`;
