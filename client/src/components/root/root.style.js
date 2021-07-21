import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
  margin-right: 12px;
  border: none;
  background-color: transparent;
  font-size: 25px;
  color: white;
  cursor: pointer;
`;

const Img = styled.img`
  cursor: pointer;
  width: 145px;
  height: 180px;
`;

export { Ul, Button, Img };
