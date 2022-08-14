import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.h3`
  font-size: 20px;
  color: ${(props) => (props.alt ? `${props.alt}` : " black")};
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  width: ${(props) => (props.width ? `${props.width}` : "fit-content ")};

  height: ${(props) => (props.height ? `${props.height}` : "auto ")};
  padding: 1rem 4rem;
  background: ${(props) => (props.alt ? `${props.alt}` : "white")};
  border-radius: 70px;
  border: none;
  outline: none;
  cursor: pointer;
  position: ${(props) => (props.sticky ? props.sticky : "absolute")};
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:hover {
    background: black;
    transition: all 0.5s ease-in-out;
    ${ButtonText} {
      color: white;
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 0rem 4rem;
  }
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
