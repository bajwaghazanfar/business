import styled from "styled-components";

export const ArrowContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "100% ")};
  position: absolute;
  z-index: 2;
  mix-blend-mode: difference;

  @media only screen and (max-width: 760px) {
    display: none;
  }
`;

export const ArrowWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: difference;
`;
export const Arrow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: difference;
  &::before {
    content: "";
    background-color: white;
    position: absolute;
    width: 3px;
    height: 100%;
  }
`;
