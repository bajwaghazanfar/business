import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { ContactUs } from "../../styles/components/contactUs/contactUs";
import { Footer } from "../../styles/components/footer/footer";
import {
  FadeUpChildren,
  FadeUpContainer,
} from "../../styles/components/stagger";
import { CenterDiv } from "../../styles/components/StickySection/StickySection";

import {
  Container,
  HomeContainer,
  LeftContainer,
  MainWrapper,
  H3,
  H2Wrapper,
  H2,
  LineContainer,
  AlignLeft,
  RightContainer,
  H4,
} from "../../styles/pages/home/home";

CenterDiv;
const Contact = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.document.body.scrollHeight);
      setWidth(window.innerWidth);
    }
    const intervalID = setInterval(() => {
      setToggle((toggle) => !toggle);
    }, 5000);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <>
      <Container style={{ background: "	#28282B " }}>
        <HomeContainer>
          <LeftContainer mobile={true}>
            <MainWrapper>
              <H2Wrapper>
                <H3>Contact Us</H3>
                {toggle ? (
                  <motion.div
                    variants={FadeUpContainer(0)}
                    initial="hidden"
                    animate="visible"
                    key={toggle}
                  >
                    <H2 variants={FadeUpChildren}>
                      #1 Birmingham Web Development agency
                    </H2>
                  </motion.div>
                ) : (
                  <motion.div
                    variants={FadeUpContainer(0)}
                    initial="hidden"
                    animate="visible"
                    key={toggle}
                  >
                    <H2 variants={FadeUpChildren}>
                      #1 Web Design and Development Birmingham
                    </H2>
                  </motion.div>
                )}
              </H2Wrapper>
              <AlignLeft>
                <H4>{toggle ? 0 : 1}</H4>
                <LineContainer
                  //style={{ background: "#F7139F" }}
                  animate={{ width: "50%" }}
                  transition={{ ease: "easeOut", duration: 5 }}
                  key={toggle}
                />
              </AlignLeft>
            </MainWrapper>
          </LeftContainer>
          <RightContainer mobile={true}>
            <ContactUs alt={true} mobile={width <= 768 ? true : false} />
          </RightContainer>
        </HomeContainer>
      </Container>

      <Footer />
    </>
  );
};
export default Contact;
