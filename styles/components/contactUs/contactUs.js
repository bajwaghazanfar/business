import { motion } from "framer-motion";
import styled from "styled-components";
import { Button, ButtonText } from "../Buttons/Button";
import { Description, Title } from "../StickySection/StickySection";

//Container and divs
export const ContactUsContainer = styled.div`
  width: 100%;
  height: 100%;

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
//Form
export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const Form = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 10;
  gap: 5px;
  @media only screen and (max-width: 760px) {
    position:relative;
  }
  }
`;
export const InputWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const InputName = styled.h3`
  font-size: 20px;
  font-weight: 400;
`;
export const Input = styled.input`
  width: 100%;
  height: 60px;

  border-radius: 5px;
  outline: none;
  border: none;
  background: white;
  color: black;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 500;

  ::placeholder {
    font-size: 15px;
    font-weight: 400;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 250px;
  border: none;
  background: white;
  border-radius: 5px;
  color: black;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 500;

  ::placeholder {
    font-size: 15px;
    font-weight: 400;
  }
  &:focus {
    outline: none;
  }
`;
export const Row = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  @media only screen and (max-width: 760px) {
    flex-direction: column;
  }
`;
export const ContactUs = (alt) => {
  if (alt) {
    return (
      <ContactUsContainer>
        <ContactUsWrapper>
          <ContactUsGrid padding="0rem">
            <Image src="https://www.purevirtual.com/wp-content/uploads/2021/01/contact-us.jpg" />
          </ContactUsGrid>
          <ContactUsGrid justify="flex-start" align="flex-start">
            <Description>Contact Us</Description>
            <FormContainer>
              <Form>
                <Row>
                  <InputWrapper>
                    <InputName>First name</InputName>
                    <Input placeholder="First name" />
                  </InputWrapper>
                  <InputWrapper>
                    <InputName>Last name</InputName>
                    <Input placeholder="Last name" />
                  </InputWrapper>
                </Row>
                <Row>
                  <InputWrapper>
                    <InputName>Email Address</InputName>
                    <Input placeholder="Email Address" />
                  </InputWrapper>
                  <InputWrapper>
                    <InputName>Mobile number</InputName>
                    <Input placeholder="Mobile number" />
                  </InputWrapper>
                </Row>
                <InputWrapper>
                  <InputName>Subject</InputName>
                  <Input placeholder="Subject" />
                </InputWrapper>
                <InputWrapper>
                  <InputName>Message</InputName>
                  <TextArea />
                </InputWrapper>
                <Button>
                  <ButtonText>Submit</ButtonText>
                </Button>
              </Form>
            </FormContainer>
          </ContactUsGrid>
        </ContactUsWrapper>
      </ContactUsContainer>
    );
  }
  return (
    <ContactUsContainer>
      <ContactUsWrapper>
        <ContactUsGrid>
          <Description align="center">Arrange a free consultation</Description>
          <Title font="70px" align="left">
            Arrange your non-binding, free inital consulation now
          </Title>
          <Button>
            <ButtonText>Arrange a conversation</ButtonText>
          </Button>
        </ContactUsGrid>
        <ContactUsGrid padding="0rem">
          <Image src="https://www.purevirtual.com/wp-content/uploads/2021/01/contact-us.jpg" />
        </ContactUsGrid>
      </ContactUsWrapper>
    </ContactUsContainer>
  );
};
