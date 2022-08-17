import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: ${(props) =>
    props.justify ? props.justify : "flex-start "};
  align-content: ${(props) => (props.align ? props.align : "flex-start ")};
`;

export const ButtonText = styled.h3`
  font-size: 18px;
  color: ${(props) => (props.alt ? `${props.alt}` : " black")};
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  width: ${(props) => (props.width ? `${props.width}` : "auto ")};

  height: ${(props) => (props.height ? `${props.height}` : "auto ")};
  padding: 1rem 4rem;
  background: ${(props) => (props.alt ? `${props.alt}` : "#FF4081 ")};
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  position: ${(props) => (props.sticky ? props.sticky : "absolute")};
  position: absolute;
  z-index: 3;

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
