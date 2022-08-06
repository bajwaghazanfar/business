import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.width ? `${props.width}` : "fit-content ")};

  height: ${(props) => (props.height ? `${props.height}` : "auto ")};
  padding: 1rem 4rem;
  background: ${(props) => (props.alt ? `${props.alt}` : "white")};
  border-radius: 70px;
  border: none;
  outline: none;
  cursor: pointer;
  position: ${(props) => (props.sticky ? props.sticky : "")};

  top: 100px;
  &:hover {
    background: black;
    transition: all 0.5s ease-in-out;
  }
  @media only screen and (max-width: 760px) {
    padding: 0rem 4rem;
  }
`;
export const ButtonText = styled.h3`
  font-size: 20px;
  color: ${(props) => (props.alt ? `${props.alt}` : " black")};
  font-weight: 700;
  &:hover {
    color: white;
    transition: all 0.5s ease-in-out;
  }
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
