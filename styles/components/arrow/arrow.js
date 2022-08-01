import styled from "styled-components";

export const ArrowContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
`;

export const ArrowWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Arrow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    background: white;
    mix-blend-mode: difference;

    width: 1px;
    height: 100%;
  }
`;
