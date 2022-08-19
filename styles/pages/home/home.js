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
  position: relative;
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
  font-size: ${(props) => (props.font ? props.font : " 25px ")};
  color: ${(props) => (props.color ? props.color : " white ")};
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;
  margin: 0px;
  @media only screen and (max-width: 760px) {
    font-size: 20px;
  }
`;

export const H2 = styled(motion.h2)`
  font-size: 70px;
  text-align: left;
  color: ${(props) => (props.color ? props.color : " white ")};
  font-weight: 400;
  margin: 0px;
  @media only screen and (max-width: 760px) {
    font-size: 30px;
  }
  @media (min-width: 760px) and (max-width: 1030px) {
    font-size: 30px;
  }
`;
export const H2Span = styled.span`
  font-size: 80px;
  text-align: left;

  font-weight: 400;

  color: white;
  margin-right: 10px;
  @media only screen and (max-width: 760px) {
    font-size: 30px;
    text-align: center;
  }
  @media (min-width: 760px) and (max-width: 1030px) {
    font-size: 30px;
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
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  background: #f8bbd0;
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

export const RowContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Row = styled(motion.div)`
  width: 50%;
  height: 100px;
  padding: 1rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  box-shadow: ${(props) =>
    props.alternate ? "none" : "-49px 33px 24px -3px rgba(0, 0, 0, 0.05) "};
  border-radius: 20px;
  position: absolute;
  z-index: 10;
  ${(props) =>
    props.alternate
      ? `
      width:90%; 
      display:flex; 
      gap:20px;
      padding:3rem; 
      background-color:white; 
     
      justify-content:space-between;  
      background-color: transparent;
      @media only screen and (max-width: 760px) {
        display:none;
        
      }

      `
      : ""}
  @media only screen and (max-width: 760px) {
    width: 90%;
    padding: 1rem 2rem;
  }
`;
export const RowChild = styled(motion.div)`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  ${(props) =>
    props.alternate
      ? `display:flex; padding:0rem 1rem; background-color:white; width:100%; height:auto;justify-content:flex-start; gap:10px;
      
     
      
      `
      : ""}
`;
export const RowLogo = styled.div`
  width: auto;
  height: auto;
  background: ${(props) => (props.bg ? props.bg : "")};
  border-radius: 50%;
  padding: 0.5rem;
`;
export const RowText = styled.p`
  font-size: 17px;
  font-weight: 500;
  text-align: ${(props) => (props.align ? props.align : "left")};
  line-height: 30px;
  color: ${(props) => (props.color ? props.color : "#616161")};
  position: ${(props) => (props.sticky ? props.sticky : "")};

  bottom: 10px;
  @media only screen and (max-width: 760px) {
    position: ${(props) => (props.sticky ? "relative" : "")};
    font-size: 15px;
  }
`;
export const CenterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? props.justify : "center ")};
  align-items: ${(props) => (props.align ? props.align : "center ")};
  background: ${(props) => (props.bg ? props.bg : "")};
  padding: 2rem;
`;
export const HalfWidth = styled.div`
  width: ${(props) => (props.width ? props.width : "50% ")};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? props.justify : "center ")};
  align-content: ${(props) => (props.align ? props.align : "center ")};
  padding: 2rem;
  @media only screen and (max-width: 760px) {
    width: 100%;
    height: auto;
    padding: 0rem 0rem;
  }
`;
export const FullWidthContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : " 80vh ")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ServicesContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
export const Service = styled.div`
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${(props) => (props.alternate ? "black" : " #f8bbd0")};
  border-radius: 10px;
  padding: 2rem;

  @media only screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
`;
export const ServiceImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media only screen and (max-width: 760px) {
    padding: 0rem;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const ServiceImg = styled.img`
  width: 40px;
  height: auto;
  object-fit: cover;
`;
export const ServiceTitle = styled.h2`
  font-size: 20px;
  color: ${(props) => (props.alternate ? "#f8bbd0" : "  black")};
  font-weight: 700;
`;
export const ServiceDescription = styled.p`
  font-size: 16px;
  color: ${(props) => (props.alternate ? "white" : "  black")};
  font-weight: 400;
  margin: 0px;
`;
export const ServiceTextWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 0px;

  @media only screen and (max-width: 760px) {
    padding: 0rem;
  }
`;
