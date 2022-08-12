import { useState, useEffect } from "react";
import {
  Arrow,
  ArrowContainer,
  ArrowWrapper,
} from "../../styles/components/arrow/arrow";
import { Button, ButtonText } from "../../styles/components/Buttons/Button";
import {
  ContactUs,
  ContactUsContainer,
  ContactUsGrid,
  ContactUsWrapper,
} from "../../styles/components/contactUs/contactUs";
import { Footer } from "../../styles/components/footer/footer";
import {
  CenterDiv,
  Description,
  Grid,
  Image,
  SS_Container,
  SS_ContainerWrapper,
  StickyContainer,
  StickyGrid,
  StickyGridWrapper,
  Title,
} from "../../styles/components/StickySection/StickySection";
import {
  H3,
  HR,
  Overview,
  QuoteContainer,
  Row,
} from "../../styles/pages/bHeard/bHeard";
CenterDiv;
const Contact = () => {
  const [height, setHeight] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.document.body.scrollHeight);
    }
  }, []);
  return (
    <>
      <ArrowContainer height={`${height}px`}>
        <ArrowWrapper>
          <Arrow height={`${height}px`} />
        </ArrowWrapper>
      </ArrowContainer>
      <SS_Container top="200px" justify="flex-start" align="flex-start">
        <SS_ContainerWrapper>
          <StickyGrid justify="flex-start" align="flex-start" padding="2rem">
            <StickyContainer>
              <Description style={{ fontWeight: "700" }} sticky="sticky">
                Contact Us.
              </Description>
              <Title font="70px" align="left" sticky="sticky">
                Get your free intial non-binding consultation now
              </Title>
            </StickyContainer>
          </StickyGrid>
        </SS_ContainerWrapper>
        <ContactUs alt={true} />
        <Footer />
      </SS_Container>
    </>
  );
};
export default Contact;