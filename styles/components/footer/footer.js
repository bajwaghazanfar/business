import { motion } from "framer-motion";
import styled from "styled-components";
import { Button, ButtonText } from "../Buttons/Button";

//H1,H2 etc..
export const Title = styled.h1`
  font-size: ${(props) => (props.font ? props.font : " 100px ")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : " 400 ")};

  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.align ? props.align : "center")};

  top: 30%;
  bottom: 10px;

  @media only screen and (max-width: 760px) {
    font-size: 40px;
    text-align: left;
  }
  @media (min-width: 760px) and (max-width: 1030px) {
    font-size: 40px;
  }
`;
export const Description = styled.h3`
  font-size: 20px;
  font-weight: 500;
  text-align: ${(props) => (props.align ? props.align : "left")};
  line-height: 35px;
  color: ${(props) => (props.color ? props.color : "#616161")};

  @media only screen and (max-width: 760px) {
    position: ${(props) => (props.sticky ? "relative" : "")};
    font-size: 15px;
  }
`;
//Images
export const LogoWrapper = styled.div`
  width: fit-content;
  height: auto;
  background: white;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  width: 80px;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
`;
export const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  cursor: pointer;
`;
export const ImageContainer = styled(motion.div)`
  width: 800px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ImageCaptionTitle = styled.h3`
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 1px;
  color: white;
  line-height: 0px;
`;
export const ImageCaption = styled.h4`
  font-size: 15px;
  font-weight: 400;
  line-height: 0px;
  color: #99a3a4;
`;
export const Vertical_Image = styled.img`
  width: 100%;
  height: auto;

  object-fit: cover;
`;
export const ImageGrid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-top: 50px;
`;

//Container and divs
export const SS_Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  justify-content: ${(props) => (props.justify ? props.justify : "center ")};
  align-content: ${(props) => (props.align ? props.align : "center ")};

  top: ${(props) => (props.top ? props.top : "0px")};
`;
export const SS_ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.bg ? props.bg : "#ededed")};
  @media only screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;
export const StickyGrid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  top: 50px;
  gap: 20px;
  @media only screen and (max-width: 760px) {
    align-items: flex-start;
  }
`;
export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? props.justify : "flex-end ")};
  align-items: ${(props) => (props.align ? props.align : "flex-start ")};
  padding: ${(props) => (props.padding ? props.padding : "2rem ")};

  gap: 20px;
`;

export const CenterDiv = styled.div`
  width: ${(props) => (props.width ? props.width : "100% ")};
  height: ${(props) => (props.height ? props.height : "auto ")};

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? props.justify : "center ")};
  align-content: ${(props) => (props.align ? props.align : "center ")};
  gap: ${(props) => (props.gap ? props.gap : "0px")};
  text-align: left;
`;
export const FooterLinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 0rem 4rem;
  @media only screen and (max-width: 760px) {
    flex-direction: column;
  }
`;
export const FooterLinkHeader = styled.h3`
  font-size: 25px;
  font-weight: 600;
  text-align: ${(props) => (props.align ? props.align : "left")};
  line-height: 35px;

  color: ${(props) => (props.color ? props.color : "#616161")};

  @media only screen and (max-width: 760px) {
    position: ${(props) => (props.sticky ? "relative" : "")};
    font-size: 15px;
  }
`;
export const FooterLink = styled.h4`
  font-size: 20px;
  font-weight: 500;
  text-align: ${(props) => (props.align ? props.align : "left")};
  line-height: 35px;
  color: ${(props) => (props.color ? props.color : "black")};

  @media only screen and (max-width: 760px) {
    position: ${(props) => (props.sticky ? "relative" : "")};
    font-size: 15px;
  }
`;
export const Footer = () => {
  return (
    <SS_Container>
      <SS_ContainerWrapper>
        <Grid justify="center" align="center" padding="0rem">
          <Title color="black" font="70px" align="left">
            MB Developments
          </Title>
        </Grid>
        <Grid align="center" justify="center" padding="0rem">
          <FooterLinksContainer>
            <FooterLinkHeader>Clients</FooterLinkHeader>
            <FooterLink>ARV Tuning</FooterLink>
            <FooterLink>FC Properties</FooterLink>
            <FooterLink>LCH Insurance</FooterLink>
          </FooterLinksContainer>
        </Grid>
      </SS_ContainerWrapper>
    </SS_Container>
  );
};
