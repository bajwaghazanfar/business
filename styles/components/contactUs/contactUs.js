import { motion } from "framer-motion";
import styled from "styled-components";

//Container and divs
export const ContactUsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  justify-content: ${(props) => (props.justify ? props.justify : "center ")};
  align-content: ${(props) => (props.align ? props.align : "center ")};
  background-color: ${(props) => (props.bg ? props.bg : "#ededed")};
  top: ${(props) => (props.top ? props.top : "0px")};
`;
export const ContactUsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  gap: 1px;
  background-color: ${(props) => (props.bg ? props.bg : "#ededed")};
  @media only screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ContactUsGrid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #c8cfcf;
  justify-content: ${(props) => (props.justify ? props.justify : "center ")};
  align-items: ${(props) => (props.align ? props.align : "center ")};
  padding: ${(props) => (props.padding ? props.padding : "2rem ")};
  gap: 20px;
`;
export const Image = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
  cursor: pointer;
`;
