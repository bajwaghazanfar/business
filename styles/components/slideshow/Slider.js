import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState } from "react";
import styled, { css } from "styled-components";
import { H3, H4 } from "../../pages/home/home";
import { motion } from "framer-motion";
import { MoveLeft } from "../stagger";
import Image from "next/image";

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  background: black;

  border-radius: 40px;
  position: relative;
`;
export const GridContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5px;
  @media only screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Grid = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
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
  border-radius: 5px;
  color: white;
  transform: translate(0, 0%);
  border-radius: 5px;
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
export const DotContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1%;
  left: 40%;
  @media only screen and (max-width: 760px) {
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
  font-weight: 400;

  @media only screen and (max-width: 760px) {
    font-size: 40px;
  }
  @media (min-width: 760px) and (max-width: 1030px) {
    font-size: 40px;
  }
`;
export const Subheading = styled.h3`
  font-size: 30px;
  text-align: left;
  color: white;
  font-weight: 500;
  border-bottom: 1px solid white;
  padding-bottom: 1rem;
  @media only screen and (max-width: 760px) {
    font-size: 40px;
  }
  @media (min-width: 760px) and (max-width: 1030px) {
    font-size: 40px;
  }
`;
export const Description = styled.h4`
  font-size: 20px;
  font-weight: 400;
  text-align: ${(props) => (props.align ? props.align : "left")};
  line-height: 35px;
  color: ${(props) => (props.color ? props.color : "#616161")};
  position: ${(props) => (props.sticky ? props.sticky : "")};

  bottom: 10px;
  @media only screen and (max-width: 760px) {
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
  border: 2px solid red;
  border-radius: 10px;
`;
export const Info = ({ data, index, type, width }) => {
  console.log(width);
  return (
    <motion.div
      variants={MoveLeft()}
      initial="hidden"
      animate="visible"
      key={index}
    >
      {type === "image" ? (
        <SlideshowImg src={data.image} />
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
        <>
          <Title>{data.title}</Title>
          <Subheading>{data.subHeading}</Subheading>
          <Description>{data.description}</Description>
        </>
      )}
    </motion.div>
  );
};
export const Slider = ({ data, type, width }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const next = () => {
    setImageIndex((state) => (state += 1));
    if (imageIndex === data.length - 1) {
      setImageIndex(0);
    }
  };
  const prev = () => {
    setImageIndex((state) => (state -= 1));
    if (imageIndex === 0) {
      setImageIndex(data.length - 1);
    }
  };
  const onDotClick = (index) => {};

  return (
    <SliderContainer type={type} width={width}>
      <Info
        data={data[imageIndex]}
        index={imageIndex}
        type={type}
        width={width}
      />
      <NavButton right={true} onClick={next}>
        <ChevronRightIcon style={{ color: "white", fontSize: "30px" }} />
      </NavButton>
      <NavButton onClick={prev}>
        <ChevronLeftIcon style={{ color: "white", fontSize: "30px" }} />
      </NavButton>
      <DotContainer>
        {data.map((map, index) => (
          <Dot
            key={map.title}
            active={index === imageIndex}
            onClick={() => {
              onDotClick(index);
            }}
          />
        ))}
      </DotContainer>
    </SliderContainer>
  );
};
