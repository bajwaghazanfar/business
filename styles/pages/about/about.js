import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
export const H5 = styled.h5`
  font-size: ${(props) => (props.font ? props.font : " 15px ")};
  color: ${(props) => (props.color ? props.color : " white ")};
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;
  margin: 0px;
  @media only screen and (max-width: 770px) {
    font-size: 20px;
  }
`;
export const H4 = styled(motion.h4)`
  font-size: ${(props) => (props.font ? props.font : " 20px ")};
  color: ${(props) => (props.color ? props.color : " white ")};
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;

  @media only screen and (max-width: 770px) {
    font-size: 20px;
  }
`;

export const H3 = styled.h3`
  font-size: ${(props) => (props.font ? props.font : " 30px ")};
  color: ${(props) => (props.color ? props.color : " white ")};
  font-weight: 400;
  letter-spacing: 1px;
  text-align: left;
  @media only screen and (max-width: 770px) {
    font-size: 20px;
  }
`;

export const H2 = styled(motion.h2)`
  font-size: 70px;
  text-align: left;
  color: ${(props) => (props.color ? props.color : " white ")};
  font-weight: 400;

  @media only screen and (max-width: 770px) {
    font-size: 40px;
  }
  @media (min-width: 770px) and (max-width: 1030px) {
    font-size: 40px;
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
export const ValueContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 4px;
  @media only screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Value = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 3rem;
  background-color: #d1d9d9;
`;
export const ValueTop = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  padding-bottom: 1rem;
  @media only screen and (max-width: 770px) {
    width: 100%;
  }
`;
export const ValueImage = styled(Image)`
  width: 50px;
  height: 10px;
`;
export const ValueMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const ValueTitle = styled(motion.h2)`
  font-size: 40px;
  text-align: left;
  color: ${(props) => (props.color ? props.color : " white ")};
  font-weight: 400;

  @media only screen and (max-width: 770px) {
    font-size: 40px;
  }
  @media (min-width: 770px) and (max-width: 1030px) {
    font-size: 40px;
  }
`;
export const ValueDescription = styled(motion.h2)`
  font-size: 18px;
  text-align: left;
  color: ${(props) => (props.color ? props.color : " white ")};
  font-weight: 400;
  line-height: 30px;
`;
export const TwoColumnGridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 10px;
  @media only screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
export const TwoColumnGrid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const DiffrentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Diffrent = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 10% 90%;
  gap: 10px;

  border-bottom: 1px solid #d1d1d1;
  @media only screen and (max-width: 770px) {
    grid-template-columns: 15% 85%;
  }
`;
