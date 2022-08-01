import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.width ? `${props.width}` : "fit-content ")};
  height: 50px;
  height: auto;
  padding: 0rem 3.5rem;
  background: ${(props) => (props.alt ? `${props.alt}` : "white")};
  border-radius: 1px;
  border: 4px solid #17202a;
  outline: none;

  cursor: pointer;
`;
export const ButtonText = styled.h3`
  font-size: 15px;
  color: ${(props) => (props.alt ? `${props.alt}` : " black")};
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AltButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 2rem;
  background: black;
  border-radius: 50px;
  outline: none;
  border: 1px solid #51f7f9;
  cursor: pointer;
`;
