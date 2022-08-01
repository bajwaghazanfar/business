import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  filter: blur(5px);
  -webkit-filter: blur(5px);
`;
export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 50% 50%;
`;
//Left Container
export const LeftContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const H3 = styled.h3`
  font-size: 30px;
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;
`;

export const H2 = styled.h2`
  font-size: 80px;
  text-align: left;
  color: white;
  font-weight: 400;
`;
export const H2Span = styled.span`
  font-size: 80px;
  text-align: left;

  font-weight: 400;

  color: white;
  margin-right: 10px;
`;
export const H2Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FullWidthContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
