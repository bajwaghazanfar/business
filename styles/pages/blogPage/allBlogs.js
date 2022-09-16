import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 100px;
  padding: 2rem;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
//Grid Layout
export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0rem;
  @media only screen and (max-width: 770px) {
    padding: 0rem;
  }
`;
export const GridContainerAlt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
  padding: 3rem 0rem;
  @media only screen and (max-width: 770px) {
    padding: 0rem;
  }
`;
export const GridWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 20px;
  @media only screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
  }
`;
export const GridWrapperAlt = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 20px;
  @media only screen and (max-width: 770px) {
    width: 100%;
  }
`;
export const GridL = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 3rem;
  @media only screen and (max-width: 770px) {
    padding: 0rem;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;
export const GridR = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SpaceAroundContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 0rem;
  @media only screen and (max-width: 770px) {
    padding: 2rem 0rem;
  }
`;
export const SpaceBetween = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  border-left: ${(props) => (props.border ? "none" : " 4px solid #f8bbd0 ")};

  @media only screen and (max-width: 770px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const LeftAlign = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem 0rem;

  @media only screen and (max-width: 770px) {
    width: 100%;
    padding: 0rem;
  }
`;
export const RightAlign = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 2rem 0rem;

  @media only screen and (max-width: 770px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    j
  }
`;
export const CenterAlign = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FullImageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
export const FullImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;
export const BlogImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
`;

export const H1 = styled.h1`
  font-size: 40px;
  color: black;
  font-weight: 700;
  margin: 0px;

  @media only screen and (max-width: 770px) {
    font-size: 30px;
    text-align: center;
  }
`;
export const H2 = styled.h2`
  font-size: 25px;
  color: black;
  font-weight: 700;
  margin: 0px;
  text-align: left;
  @media only screen and (max-width: 770px) {
    font-size: 30px;

    text-align: center;
  }
`;
export const H3 = styled.h1`
  font-size: 20px;
  color: ${(props) => (props.color ? props.color : " black ")};
  font-weight: 400;
`;
export const H4 = styled.h1`
  font-size: 18px;
  color: ${(props) => (props.color ? props.color : " black ")};
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
`;
export const P = styled.p`
  font-size: 17px;
  color: ${(props) => (props.color ? props.color : " black ")};
  font-weight: 400;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  color: #838383;
  font-weight: 500;
`;
export const Category = styled.h3`
  font-size: 14px;
  color: black;
  font-weight: 400;
`;
export const CategoryContainer = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8dedda;
  padding: 0rem 1rem;
  border-radius: 10px;
`;
export const HalfWidth = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 770px) {
    width: 100%;
  }
`;

export const FullWidth = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem 0rem;
`;

export const NewsletterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 2rem;
`;
export const ButtonText = styled.h3`
  font-size: 18px;
  color: ${(props) => (props.alt ? `${props.alt}` : " black")};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  width: ${(props) => (props.width ? `${props.width}` : "auto ")};

  height: ${(props) => (props.height ? `${props.height}` : "50px ")};
  background: ${(props) => (props.alt ? `${props.alt}` : "#FF4081 ")};
  padding: 0rem 2rem;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 760px) {
    padding: 0rem 2rem;
  }
`;
