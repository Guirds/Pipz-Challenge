import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #fd0;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #fff584;
    }
  }
`;

const Main = () => (
  <Container>
    <h1>Pipz's Challenge</h1>
    <Form action="" method="get">
      <input type="text" placeholder="Título" />
      <button type="submit">Ok</button>
    </Form>
  </Container>
);

export default Main;
