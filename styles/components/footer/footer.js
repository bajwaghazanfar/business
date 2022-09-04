import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import { Button, ButtonText } from "../Buttons/Button";
import { FullImage, FullImageContainer } from "../StickySection/StickySection";
import logo from "../../../public/logos/companyLogo/logonew.webp";
//H1,H2 etc..
export const Title = styled.h1`
  font-size: ${(props) => (props.font ? props.font : " 40px ")};
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
  width: 100px;
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

  z-index: 10;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.bg ? props.bg : "#ededed")};
  @media only screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justify ? props.justify : "flex-start "};
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

  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 760px) {
    flex-direction: column;
  }
`;
export const FooterLinkHeader = styled.h3`
  font-size: 19px;
  font-weight: 600;
  text-align: ${(props) => (props.align ? props.align : "left")};
  line-height: 30px;
  color: ${(props) => (props.color ? props.color : "#616161")};

  @media only screen and (max-width: 760px) {
    position: ${(props) => (props.sticky ? "relative" : "")};
    font-size: 15px;
  }
`;
export const FooterLink = styled.h4`
  font-size: 15px;
  font-weight: 500;
  text-align: ${(props) => (props.align ? props.align : "left")};

  color: ${(props) => (props.color ? props.color : "black")};
  cursor: pointer;
  @media only screen and (max-width: 760px) {
    position: ${(props) => (props.sticky ? "relative" : "")};
    font-size: 15px;
  }
`;
export const Grid_Alt = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  @media only screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;
export const InsightsContainer = styled(motion.div)`
  width: 100%;
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

  border-top: 1px solid #d1d1d1;
  margin: 0px;
`;
export const H5 = styled.h5`
  font-size: ${(props) => (props.font ? props.font : " 15px ")};
  color: ${(props) => (props.color ? props.color : " white ")};
  font-weight: 600;
  letter-spacing: 1px;
  text-align: left;
  margin: 0px;
  @media only screen and (max-width: 760px) {
    font-size: 15px;
  }
`;
export const H4 = styled(motion.h4)`
  font-size: ${(props) => (props.font ? props.font : " 20px ")};
  color: ${(props) => (props.color ? props.color : " white ")};
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;

  @media only screen and (max-width: 760px) {
    font-size: 15px;
  }
`;
export const Footer = () => {
  return (
    <SS_Container>
      <SS_ContainerWrapper>
        <Grid padding="2rem">
          <FullImageContainer width="10%">
            <FullImage
              src={logo}
              layout="responsive"
              roundright="true"
              roundleft="true"
            />
          </FullImageContainer>
          <InsightsContainer>
            <H4 color="black">Moving forward</H4>
            <InsightsWrapper>
              <H5 color="black">@Obsidian Web Developments 2022</H5>
              <H5 color="black">11.August.2022</H5>
            </InsightsWrapper>
          </InsightsContainer>
        </Grid>

        <Grid align="center" justify="center" padding="2rem">
          <Grid_Alt>
            <FooterLinksContainer>
              <FooterLinkHeader>Links</FooterLinkHeader>
              <Link href="/">
                <FooterLink>Home</FooterLink>
              </Link>
              <Link href="/web-development-birmingham-web-design-birmingham/about">
                <FooterLink>About</FooterLink>
              </Link>{" "}
              <Link href="/web-development-birmingham-web-design-birmingham/web-development-birmingham">
                <FooterLink>Web Development</FooterLink>
              </Link>
              <Link href="/contactUs">
                <FooterLink>Contact Us</FooterLink>
              </Link>
            </FooterLinksContainer>
            <FooterLinksContainer>
              <FooterLinkHeader>Case studies</FooterLinkHeader>
              <Link href="/web-development-birmingham-web-design-birmingham/arvTuning">
                <FooterLink>ARV Tuning</FooterLink>
              </Link>
              <Link href="/web-development-birmingham-web-design-birmingham/fcProperties">
                <FooterLink>FC Properties</FooterLink>
              </Link>
              <Link href="/web-development-birmingham-web-design-birmingham/lchinsure">
                <FooterLink>LCH Insurance</FooterLink>
              </Link>
            </FooterLinksContainer>

            <FooterLinksContainer>
              <FooterLinkHeader>Contact</FooterLinkHeader>
              <FooterLink>Email:bajwaghazanfar0@gmail.com</FooterLink>
              <FooterLink>07342806885</FooterLink>
            </FooterLinksContainer>
          </Grid_Alt>
          <InsightsContainer>
            <InsightsWrapper>
              <H5 color="black">Privacy Policy |imprint</H5>
              <H5 color="black">Designed by: Ghazanfar Bajwa</H5>
            </InsightsWrapper>
          </InsightsContainer>
        </Grid>
      </SS_ContainerWrapper>
    </SS_Container>
  );
};
