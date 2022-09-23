import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { AlignEnd, H3, H4, HalfWidth } from "../../pages/home/home";
import { motion } from "framer-motion";
import { MoveLeft, MoveRight } from "../stagger";
import Image from "next/image";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FullImage, FullImageContainer } from "../StickySection/StickySection";

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
export const GridContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5px;

  @media only screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  @media only screen and (max-width: 770px) {
    display: ${(props) => (props.image ? "none" : "flex")};
  }
`;
export const Slide = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const NavButton = styled.button`
  width: 30px;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 0%;
  z-index: 10;
  border-radius: 10px;
  color: white;
  transform: translate(0, 0%);

  background-color: rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);

    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  ${(props) =>
    props.right === true
      ? css`
          right: 0%;
        `
      : css`
          left: 0%;
        `}
`;
export const SliderButton = styled.button`
  width: auto;
  height: auto;
  outline: none;
  border: none;

  background: #ff4081;

  cursor: pointer;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
`;
export const DotContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -2%;
  left: 40%;

  @media only screen and (max-width: 770px) {
    left: 35%;
  }
`;
export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: grey;

  ${(props) =>
    props.active
      ? css`
          background-color: grey;
        `
      : css`
          background-color: white;
        `}
`;
export const Title = styled.h2`
  font-size: 40px;
  text-align: left;
  color: ${(props) => (props.color ? props.color : "white")};
  font-weight: 300;
  margin: 0px;
  color: black;

  @media (max-width: 770px) {
    font-size: 30px;
  }
`;
export const Subheading = styled.h3`
  font-size: 30px;
  text-align: left;
  color: ${(props) => (props.color ? props.color : "white")};
  font-weight: 500;
  color: black;
  padding-bottom: 1rem;
  @media only screen and (max-width: 770px) {
    font-size: 40px;
  }
  @media (min-width: 770px) and (max-width: 1030px) {
    font-size: 40px;
  }
`;
export const Description = styled.h4`
  font-size: 18px;
  font-weight: 400;
  text-align: ${(props) => (props.align ? props.align : "left")};
  line-height: 35px;
  color: #868686;
  position: ${(props) => (props.sticky ? props.sticky : "")};

  bottom: 10px;
  @media only screen and (max-width: 770px) {
    position: ${(props) => (props.sticky ? "relative" : "")};
    font-size: 15px;
  }
`;
export const DescriptionSpan = styled.h4`
  font-size: 18px;
  font-weight: 700;
  text-align: ${(props) => (props.align ? props.align : "left")};
  margin: 0px;
  color: ${(props) => (props.color ? props.color : "black")};
  position: ${(props) => (props.sticky ? props.sticky : "")};

  bottom: 10px;
  @media only screen and (max-width: 770px) {
    position: ${(props) => (props.sticky ? "relative" : "")};
    font-size: 15px;
  }
`;
export const SlideshowImg = styled(Image)`
  width:100%;
  height:100%;
  object:fit:cover;  
  border-radius: 10px;
  
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 10px;
`;
export const TestimonialContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  @media only screen and (max-width: 770px) {
    flex-direction: column;
  }
  @media (min-width: 760px) and (max-width: 1445px) {
    height: 100%;
  }
`;
export const TestimonialWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 30px;

  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  @media only screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
    padding: 0rem;
  }
  @media (min-width: 760px) and (max-width: 1445px) {
    grid-template-columns: 40% 60%;
  }
`;
export const Customer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;
export const Row = styled.div`
  width: auto;
  height: 100%;
  display: flex;

  justify-content: flex-end;
  align-items: center;
`;
export const Info = ({ data, index, type, width, direction }) => {
  console.log(direction);
  return (
    <motion.div
      variants={MoveLeft()}
      initial="hidden"
      animate="visible"
      transition={{ type: "ease", ease: "easeIn" }}
      key={index}
      style={{ width: "100%" }}
    >
      {type === "image" ? (
        <SlideshowImg src={data.image} loading="eager" />
      ) : type === "complex" ? (
        <GridContainer>
          <Grid
            style={width <= 768 ? { display: "none" } : { display: "block" }}
          >
            <ImageContainer>
              <SlideshowImg
                src={data.image}
                alt="Slideshow Image"
                loading="eager"
              />
            </ImageContainer>
          </Grid>
          <Grid>
            <Title color="white">{data.title}</Title>
            <Description>{data.description}</Description>
          </Grid>
        </GridContainer>
      ) : (
        <TestimonialContainer>
          <TestimonialWrapper>
            <Grid image={true}>
              <FullImageContainer
                overlay={true}
                bg={data.bg}
                style={{ height: "600px" }}
              >
                <FullImage
                  src={data.image}
                  layout={`${width <= 770 ? "responsive" : "fill"}`}
                  alt="Web Development logo"
                  priority
                  loading="eager"
                />
              </FullImageContainer>
            </Grid>
            <Grid>
              <HalfWidth width="80%">
                <Title>{data.title}</Title>
                <Description>{data.description}</Description>
                <Customer>
                  <div>
                    <DescriptionSpan>{data.customer}</DescriptionSpan>
                    <Description style={{ margin: "0px" }}>
                      {data.business}
                    </Description>
                  </div>
                  <Row>
                    {" "}
                    <AiFillStar style={{ color: "#D1CC2A" }} />{" "}
                    <AiFillStar style={{ color: "#D1CC2A" }} />{" "}
                    <AiFillStar style={{ color: "#D1CC2A" }} />{" "}
                    <AiFillStar style={{ color: "#D1CC2A" }} />{" "}
                    <AiFillStar style={{ color: "#D1CC2A" }} />
                  </Row>
                </Customer>
              </HalfWidth>
            </Grid>
          </TestimonialWrapper>
        </TestimonialContainer>
      )}
    </motion.div>
  );
};
export const Slider = ({ data, type, width }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const [direction, setDirection] = useState("");
  const next = () => {
    setImageIndex((state) => (state += 1));
    if (imageIndex === data.length - 1) {
      setImageIndex(0);
    }
    setDirection("forwards");
  };
  const prev = () => {
    setImageIndex((state) => (state -= 1));
    if (imageIndex === 0) {
      setImageIndex(data.length - 1);
    }
    setDirection("backwards");
  };

  return (
    <>
      <SliderContainer type={type} width={width}>
        <Info
          data={data[imageIndex]}
          index={imageIndex}
          type={type}
          width={width}
          direction={direction}
        />
        {type != undefined ? (
          <>
            <NavButton right={true} onClick={next}>
              <ChevronRightIcon style={{ color: "white", fontSize: "30px" }} />
            </NavButton>
            <NavButton onClick={prev}>
              <ChevronLeftIcon style={{ color: "white", fontSize: "30px" }} />
            </NavButton>
          </>
        ) : null}
        {type === undefined ? (
          <AlignEnd>
            <SliderButton onClick={next}>
              <BsChevronLeft
                style={{ fontSize: "30px", color: "black ", fontWeight: "400" }}
              />
            </SliderButton>
            <SliderButton onClick={prev}>
              <BsChevronRight style={{ fontSize: "30px", color: "black " }} />
            </SliderButton>
          </AlignEnd>
        ) : null}
        {type === undefined ? null : (
          <DotContainer>
            {data.map((data, index) => (
              <Dot
                key={data.title}
                active={index === imageIndex}
                onClick={() => {
                  onDotClick(index);
                }}
              />
            ))}
          </DotContainer>
        )}
      </SliderContainer>
    </>
  );
};
