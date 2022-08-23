import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
//H1,H2 etc..
export const Title = styled.h1`
  font-size: ${(props) => (props.font ? props.font : " 100px ")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : " 400 ")};

  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  position: ${(props) => (props.sticky ? props.sticky : "")};
  text-decoration: ${(props) => (props.underline ? props.underline : "")};
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media (min-width: 0px) and (max-width: 768px) {
    font-size: 30px;

    position: ${(props) => (props.sticky ? "relative" : "")};
  }
  @media (min-width: 770px) and (max-width: 1030px) {
    font-size: 30px;
  }
`;
export const SubTitle = styled.h2`
  font-size: ${(props) => (props.font ? props.font : " 40px ")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : " 400 ")};

  color: ${(props) => (props.color ? props.color : "black")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  position: ${(props) => (props.sticky ? props.sticky : "")};
  text-decoration: ${(props) => (props.underline ? props.underline : "")};
  bottom: 10px;

  @media (min-width: 0px) and (max-width: 768px) {
    font-size: 20px;
    text-align: left;
    position: ${(props) => (props.sticky ? "relative" : "")};
  }
  @media (min-width: 770px) and (max-width: 1030px) {
    font-size: 20px;
  }
`;
export const SubHeading = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-align: ${(props) => (props.align ? props.align : "left")};
  line-height: 35px;
  color: ${(props) => (props.color ? props.color : "#616161")};
  position: ${(props) => (props.sticky ? props.sticky : "")};

  bottom: 10px;
  @media only screen and (max-width: 770px) {
    position: ${(props) => (props.sticky ? "relative" : "")};
    font-size: 15px;
  }
`;
export const Description = styled.h4`
  font-size: 17px;
  font-weight: 500;
  text-align: ${(props) => (props.align ? props.align : "left")};
  line-height: 35px;
  color: ${(props) => (props.color ? props.color : "#616161")};
  position: ${(props) => (props.sticky ? props.sticky : "")};

  bottom: 10px;
  @media only screen and (max-width: 770px) {
    position: ${(props) => (props.sticky ? "relative" : "")};
    font-size: 15px;
  }
`;
export const A = styled.a`
  font-size: 17px;
  font-weight: 800;
  text-align: ${(props) => (props.align ? props.align : "left")};
  line-height: 35px;
  color: black;
  text-decoration: underline;

  bottom: 10px;
  @media only screen and (max-width: 770px) {
    position: ${(props) => (props.sticky ? "relative" : "")};
    font-size: 15px;
  }
`;
export const DescriptionSpan = styled.span`
  font-size: 17px;
  font-weight: 800;
  text-align: ${(props) => (props.align ? props.align : "left")};
  line-height: 35px;
  color: black;
  position: ${(props) => (props.sticky ? props.sticky : "")};

  bottom: 10px;
  @media only screen and (max-width: 770px) {
    position: ${(props) => (props.sticky ? "relative" : "")};
    font-size: 15px;
  }
`;
export const StickyContainer = styled.div`
  width: 100%;
  height: auto;
  position: sticky;
  margin: 0px;

  top: 10%;
  @media only screen and (max-width: 770px) {
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
export const FullImageContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "100% ")};
  height: 100%;
  position: relative;

  @media only screen and (max-width: 770px) {
    display: ${(props) => (props.caseStudy ? "none" : "")};
  }
`;
export const FullImage = styled(Image)`
  width: 100%;
  height: 100%;

  object-fit: cover;
  cursor: pointer;
  border-top-right-radius: ${(props) => (props.roundright ? "10px" : "0px")};
  border-bottom-right-radius: ${(props) => (props.roundright ? "10px" : "0px")};
  border-top-left-radius: ${(props) => (props.roundleft ? "10px" : "0px")};
  border-bottom-left-radius: ${(props) => (props.roundleft ? "10px" : "0px")};
  @media only screen and (max-width: 770px) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
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
export const ImageGrid = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
`;

//Container and divs
export const SS_Container = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "100% ")};

  display: flex;
  flex-direction: column;

  justify-content: ${(props) => (props.justify ? props.justify : "center ")};
  align-content: ${(props) => (props.align ? props.align : "center ")};
  position: relative;
  top: ${(props) => (props.top ? props.top : "10px")};
  padding: ${(props) => (props.padding ? props.padding : "0rem")};
  @media only screen and (max-width: 770px) {
    padding: 0rem;
  }
`;
export const SS_ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.bg ? props.bg : "#ededed")};

  padding: ${(props) =>
    props.caseStudy ? "10rem" : props.padding ? props.padding : "0rem"};
  position: relative;
  @media only screen and (max-width: 770px) {
    display: flex;
    flex-direction: ${(props) =>
      props.reverseMobile ? "column-reverse" : "column"};
    padding: ${(props) => (props.caseStudy ? "0rem" : "0rem")};
  }
`;
export const StickyGrid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: ${(props) => (props.sticky ? props.sticky : "relative")};
  padding: 2rem;

  gap: 20px;
  @media only screen and (max-width: 770px) {
    align-items: flex-start;
    position: ${(props) => (props.sticky ? "relative" : "")};
    padding: 2rem;
  }
`;
export const StickyGridWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: ${(props) => (props.sticky ? props.sticky : "")};
  justify-content: center;

  padding: 2rem;
  gap: 20px;
  @media only screen and (max-width: 770px) {
    align-items: flex-start;
  }
`;
export const Grid = styled(motion.div)`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "100% ")};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? props.justify : "flex-end ")};
  align-content: ${(props) => (props.align ? props.align : "center ")};
  padding: ${(props) => (props.padding ? props.padding : "2rem ")};
  background-color: ${(props) => (props.bg ? props.bg : "none")};
  gap: 20px;
  position: relative;
  border-top-left-radius: ${(props) => (props.roundleft ? "10px" : "0px")};
  border-bottom-left-radius: ${(props) => (props.roundleft ? "10px" : "0px")};
  border-top-right-radius: ${(props) => (props.roundright ? "10px" : "0px")};
  border-bottom-right-radius: ${(props) => (props.roundright ? "10px" : "0px")};
  @media only screen and (max-width: 770px) {
    align-items: flex-start;
    position: ${(props) => (props.sticky ? "relative" : "")};
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    padding: ${(props) => (props.padding ? props.padding : "2rem ")};
  }
`;

export const CenterDiv = styled.div`
  width: ${(props) => (props.width ? props.width : "100% ")};
  height: ${(props) => (props.height ? props.height : "auto ")};

  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column ")};
  justify-content: ${(props) => (props.justify ? props.justify : "center ")};
  align-content: ${(props) => (props.align ? props.align : "center ")};
  gap: ${(props) => (props.gap ? props.gap : "0px")};
  text-align: left;
  padding: ${(props) => (props.padding ? props.padding : "1rem")};
  border-top: ${(props) => (props.border ? props.border : "none")};
  @media only screen and (max-width: 770px) {
    padding: 0rem;
  }
`;
//3X3 GRID
export const Grid_3x3 = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: flex-end;
  align-items: center;
  grid-gap: 10px;
`;
// Projects
export const ProjectDiv = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
`;
export const Projects = styled(motion.div)`
  width: ${(props) => (props.width ? props.width : "80% ")};
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  text-align: left;
  & > div {
    display: flex;
    flex-basis: calc(50% - 30px);
    justify-content: center;
    flex-direction: column;
  }
`;
export const ValuesContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
export const Value = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 10% 90%;

  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.alternate ? "black" : " #f8bbd0")};
  border-radius: 10px;

  @media only screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
`;
export const ValueImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  @media only screen and (max-width: 770px) {
    padding: 0rem;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const ValueImg = styled.img`
  width: 40px;
  height: auto;
  object-fit: cover;
`;
export const ValueTitle = styled.h2`
  font-size: 20px;
  color: ${(props) => (props.alternate ? "#f8bbd0" : "  black")};
  font-weight: 700;
`;
export const ValueDescription = styled.p`
  font-size: 16px;
  color: ${(props) => (props.alternate ? "white" : "  black")};
  font-weight: 400;
  margin: 0px;
`;
export const ValueTextWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 0px;
  padding: 2rem;
  @media only screen and (max-width: 770px) {
    padding: 0rem;
  }
`;
export const StickySectionComponent = ({
  title,
  description1,
  description2,
  bigImage,
  smallImage1,
  smallImage2,
}) => {
  return (
    <SS_Container>
      <StickyGrid>
        <Title>{title} </Title>
      </StickyGrid>
      <Grid>
        <CenterDiv>
          <Description>{description1}</Description>
          {description2 != null ? (
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostru
            </Description>
          ) : null}
          <Image src={bigImage} />
          <ImageGrid>
            <Vertical_Image src={smallImage1} />
            <Vertical_Image src={smallImage2} />
          </ImageGrid>
        </CenterDiv>
      </Grid>
    </SS_Container>
  );
};
