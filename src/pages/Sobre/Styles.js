import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f9;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #333;
  line-height: 1.6;
  text-align: center;
  max-width: 600px;
  margin-bottom: 10px;
`;
