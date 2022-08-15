import { style } from "@mui/system";
import { motion } from "framer-motion";
import Image from "next/image";

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
  @media only screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
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
export const RightContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  @media only screen and (max-width: 760px) {
    display: none;
  }
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
export const H5 = styled.h5`
  font-size: ${(props) => (props.font ? props.font : " 15px ")};
  color: ${(props) => (props.color ? props.color : " white ")};
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;
  margin: 0px;
  @media only screen and (max-width: 760px) {
    font-size: 20px;
  }
`;
export const H4 = styled(motion.h4)`
  font-size: ${(props) => (props.font ? props.font : " 20px ")};
  color: ${(props) => (props.color ? props.color : " white ")};
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;

  @media only screen and (max-width: 760px) {
    font-size: 20px;
  }
`;
export const H3 = styled.h3`
  font-size: ${(props) => (props.font ? props.font : " 30px ")};
  color: ${(props) => (props.color ? props.color : " white ")};
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;
  @media only screen and (max-width: 760px) {
    font-size: 20px;
  }
`;

export const H2 = styled(motion.h2)`
  font-size: 70px;
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
  position: relative;
  padding: 5rem;
  @media only screen and (max-width: 760px) {
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
`;
export const CustomerLogo = styled(Image)``;
export const FrameworkContainer = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  padding: 1rem;
`;
export const Framework = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 3px solid black;
  padding: 0rem;
`;
export const FrameworkDescription = styled.p`
  font-size: ${(props) => (props.font ? props.font : " 20px ")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : " 400 ")};

  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  margin: 0px;
  text-decoration: ${(props) => (props.underline ? props.underline : "")};
`;
export const LineContainer = styled(motion.div)`
  width: 0px;
  height: 10px;
  background: #d3d5d6;
`;
export const AlignLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const AlignRight = styled(motion.h4)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const InsightsContainer = styled(motion.div)`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px;
`;
export const InsightsWrapper = styled(motion.div)`
  width: ${(props) => (props.width ? props.width : "100% ")};
  height: ${(props) => (props.height ? props.height : "auto ")};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-end;
  gap: ${(props) => (props.gap ? props.gap : "0px")};
  text-align: left;

  border-top: 1px solid white;
  margin: 0px;
`;
export const SlideshowContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SlideshowWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "60% ")};
  height: ${(props) => (props.height ? props.height : "700px ")};

  @media only screen and (max-width: 760px) {
    width: 100%;
    height: 100%;
  }
`;
