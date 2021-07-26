import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Board = styled.main`
  width: 45%;
  border-radius: 4px;
  background: #fff;
  padding: 10px;
  border: 1px solid #e1e4e8;
  text-align: center;

  h2 {
    padding-top: 20px;
    text-align: center;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
`;

export const Footer = styled.div`

`;