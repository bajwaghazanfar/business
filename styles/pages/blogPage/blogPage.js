import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 100px;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LeftAlign = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media only screen and (max-width: 770px) {
    width: 100%;
    padding: 2rem;
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
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const FullImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;
export const BlogImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
`;

export const H1 = styled.h1`
  font-size: 40px;
  color: ${(props) => (props.color ? props.color : " black ")};
  font-weight: 600;
  @media only screen and (max-width: 770px) {
    font-size: 30px;
  }
`;
export const H2 = styled.h1`
  font-size: 30px;
  color: ${(props) => (props.color ? props.color : " black ")};
  font-weight: 500;
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
`;
export const P = styled.p`
  font-size: 17px;
  color: ${(props) => (props.color ? props.color : " black ")};
  font-weight: 400;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: black;
  font-weight: 700;
  margin: 0px;
  text-align: center;
  @media only screen and (max-width: 770px) {
    font-size: 30px;
  }
`;
export const Subtitle = styled.h2`
  font-size: 18px;
  color: black;
  font-weight: 500;
`;
export const Category = styled.h3`
  font-size: 18px;
  color: black;
  font-weight: 400;
  letter-spacing: 2px;
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
export const HR = styled.hr`
  width: 100%;
  border-top: 2px solid #d4d4d4;
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
export const Figcaption = styled.figcaption`
  font-size: 12px;
  color: black;
  letter-spacing: 3px;
  text-align: center;
`;
export const CaptionBackground = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: grey;
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
export const InputContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media only screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 5px;
  outline: none;
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
  background: ${(props) => (props.alt ? `${props.alt}` : "white ")};
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
export const AltButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 2rem;
  background: black;
  border-radius: 50px;
  outline: none;
  border: 1px solid #51f7f9;
  cursor: pointer;
`;
