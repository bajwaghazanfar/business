import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CenterWrapper, HalfWidth } from "../../pages/home/home";
import { FAQAnimation } from "../stagger";

import React from "react";
export const FAQ_Title = styled.div`
  font-size: 25px;
  text-align: center;
  color: #f8bbd0;
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
  @media only screen and (max-width: 760px) {
    margin-bottom: 100px;
  }
`;

export const FAQ = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 10% 90%;
  background-color: #28282b;
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
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
  @media only screen and (max-width: 760px) {
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
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut
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
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut
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
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut
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
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut
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
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut
                </FAQ_Description>
              </FAQ_TextWrapper>
            </FAQ_Right>
          </FAQ>
        </FAQContainer>
      </HalfWidth>
    </CenterWrapper>
  );
});
