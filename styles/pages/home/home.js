import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
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
  @media only screen and (max-width: 760px) {
    padding: 0rem;
  }
  @media (min-width: 760px) and (max-width: 1030px) {
    padding: 0rem;
  }
`;
export const H3 = styled.h3`
  font-size: 30px;
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;
  @media only screen and (max-width: 760px) {
    font-size: 20px;
  }
`;

export const H2 = styled.h2`
  font-size: 80px;
  text-align: left;
  color: white;
  font-weight: 400;

  @media only screen and (max-width: 760px) {
    font-size: 40px;
  }
  @media (min-width: 760px) and (max-width: 1030px) {
    font-size: 40px;
  }
`;
export const H2Span = styled.span`
  font-size: 80px;
  text-align: left;

  font-weight: 400;

  color: white;
  margin-right: 10px;
  @media only screen and (max-width: 760px) {
    font-size: 40px;
    text-align: center;
  }
  @media (min-width: 760px) and (max-width: 1030px) {
    font-size: 40px;
  }
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
export const CustomersWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
export const Customers = styled.div`
  width: 400px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c8c8c8;
`;
export const CustomerLogo = styled.img`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: auto;
`;