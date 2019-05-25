import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  flex-direction: column;
`;

export const Repository = styled.div`
  width: 400px;
  max-width: 100%;
  height: 130px;
  border-radius: 3px;
  background: #fff;
  margin-top: 10px;

  header {
    text-align: center;
    padding: 10px;
    background: #fd0;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
  }

  ul {
    list-style: none;
  }
  li {
    font-weight: bold;
    padding: 12px 20px;
    color: #666;

    strong {
      color: #000;
    }
  }
`;
