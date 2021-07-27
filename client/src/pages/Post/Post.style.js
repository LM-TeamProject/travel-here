import styled from "styled-components";

// background-color: red;
const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 30rem;
  height: 35rem;
  background-color: white;
  border-radius: 10px;
  display: flex;
`;


export { Container, Content };