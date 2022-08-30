import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CenterWrapper, HalfWidth } from "../../pages/home/home";
import { FAQAnimation } from "../stagger";

import React from "react";
export const FAQ_Title = styled.div`
  font-size: 25px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : " #f8bbd0;")};
  font-weight: 800;
  margin: 0px;
`;
export const FAQContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  top: 10px;

  @media only screen and (max-width: 770px) {
    margin-bottom: 100px;
  }
`;

export const FAQ = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 10% 90%;
  background-color: ${(props) => (props.bg ? props.bg : "#28282b; ")};
  padding: 1rem;

  border-radius: 10px;
  cursor: pointer;
  @media only screen and (max-width: 770px) {
    gap: 50px;
  }
`;

export const FAQ_Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const FAQ_Right = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const FAQ_TextWrapper = styled(motion.div)`
  width: 100%;
  height: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const FAQ_Description = styled.h3`
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
export const FAQComponent = React.memo(({ state, dispatch }) => {
  return (
    <CenterWrapper>
      <HalfWidth width="70%">
        <FAQContainer>
          <FAQ
            onClick={() => {
              dispatch({ type: "show", payload: "item1" });
            }}
          >
            <FAQ_Left>
              {state.item1 ? (
                <AiOutlineMinus
                  style={{ fontSize: "40px", color: "#f8bbd0" }}
                />
              ) : (
                <AiOutlinePlus style={{ fontSize: "40px", color: "#f8bbd0" }} />
              )}
            </FAQ_Left>
            <FAQ_Right>
              <FAQ_Title>What does front-end mean?</FAQ_Title>

              <FAQ_TextWrapper
                variants={FAQAnimation()}
                animate={state.item1 ? "visible" : "hidden"}
              >
                <FAQ_Description color="white">
                  Front-end describes a website, usually it's web design,
                  animations and any data that is displayed to users. Front-end
                  development is neccessary in order to develop a website that
                  utilises data from diffrent sources, optimization for maximum
                  performance aswell as SEO and mobile responsivness
                </FAQ_Description>
              </FAQ_TextWrapper>
            </FAQ_Right>
          </FAQ>
          <FAQ
            onClick={() => {
              dispatch({ type: "show", payload: "item2" });
            }}
          >
            <FAQ_Left>
              {state.item2 ? (
                <AiOutlineMinus
                  style={{ fontSize: "40px", color: "#f8bbd0" }}
                />
              ) : (
                <AiOutlinePlus style={{ fontSize: "40px", color: "#f8bbd0" }} />
              )}
            </FAQ_Left>
            <FAQ_Right>
              <FAQ_Title>What does back-end mean?</FAQ_Title>

              <FAQ_TextWrapper
                variants={FAQAnimation()}
                animate={state.item2 ? "visible" : "hidden"}
              >
                <FAQ_Description color="white">
                  Backe-end development is the development of any server to
                  compliment the front-end. This is mainly used to implement
                  functionallity to a site, in which data is server or any
                  services need to be created in order to meet requirements.
                  Back-end development is neccessary for various things, such as
                  emails, CRUD functionallity, databases etc...
                </FAQ_Description>
              </FAQ_TextWrapper>
            </FAQ_Right>
          </FAQ>{" "}
          <FAQ
            onClick={() => {
              dispatch({ type: "show", payload: "item3" });
            }}
          >
            <FAQ_Left>
              {state.item3 ? (
                <AiOutlineMinus
                  style={{ fontSize: "40px", color: "#f8bbd0" }}
                />
              ) : (
                <AiOutlinePlus style={{ fontSize: "40px", color: "#f8bbd0" }} />
              )}
            </FAQ_Left>
            <FAQ_Right>
              <FAQ_Title>How much do you charge to build a website?</FAQ_Title>

              <FAQ_TextWrapper
                variants={FAQAnimation()}
                animate={state.item3 ? "visible" : "hidden"}
              >
                <FAQ_Description color="white">
                  Our basic pricing is listed above in packages (Bronze, Silver
                  and Gold), however if you feel like your project requirements
                  do not fit in any of these boxes contact us and we will get
                  back to you with a quote
                </FAQ_Description>
              </FAQ_TextWrapper>
            </FAQ_Right>
          </FAQ>{" "}
          <FAQ
            onClick={() => {
              dispatch({ type: "show", payload: "item4" });
            }}
          >
            <FAQ_Left>
              {state.item4 ? (
                <AiOutlineMinus
                  style={{ fontSize: "40px", color: "#f8bbd0" }}
                />
              ) : (
                <AiOutlinePlus style={{ fontSize: "40px", color: "#f8bbd0" }} />
              )}
            </FAQ_Left>
            <FAQ_Right>
              <FAQ_Title>Which package shall I select?</FAQ_Title>

              <FAQ_TextWrapper
                variants={FAQAnimation()}
                animate={state.item4 ? "visible" : "hidden"}
              >
                <FAQ_Description color="white">
                  Selecting a package is difficult as it can be overwhelming
                  sometimes. Bronze is usually for clients who require a basic
                  site 5-6 page website with a sleek, modern web design, contact
                  form integration and Google maps. Whereas, silver is for
                  clients who require a website aswell as back-end development
                  to meet thier requirements e.g. storing data or serving data
                  to users. Gold is for clients who have complex project
                  requirements and require a custom-built front and back-end
                  solution to meet thier requirements as well as optimization
                  and rigirous testing. E.g. this tier is for projects that may
                  feature a portal for employees to login and carry out
                  administrative duties etc...
                </FAQ_Description>
              </FAQ_TextWrapper>
            </FAQ_Right>
          </FAQ>{" "}
          <FAQ
            onClick={() => {
              dispatch({ type: "show", payload: "item5" });
            }}
          >
            <FAQ_Left>
              {state.item5 ? (
                <AiOutlineMinus
                  style={{ fontSize: "40px", color: "#f8bbd0" }}
                />
              ) : (
                <AiOutlinePlus style={{ fontSize: "40px", color: "#f8bbd0" }} />
              )}
            </FAQ_Left>
            <FAQ_Right>
              <FAQ_Title>Is SEO included?</FAQ_Title>

              <FAQ_TextWrapper
                variants={FAQAnimation()}
                animate={state.item5 ? "visible" : "hidden"}
              >
                <FAQ_Description color="white">
                  In all of our projects we perform basic SEO. We optimize the
                  site so it has excellent performance scores, which are good
                  for SEO, including meta and title tags aswell as optimizing
                  images so your website is faster and not penalized for
                  performance
                </FAQ_Description>
              </FAQ_TextWrapper>
            </FAQ_Right>
          </FAQ>
        </FAQContainer>
      </HalfWidth>
    </CenterWrapper>
  );
});
