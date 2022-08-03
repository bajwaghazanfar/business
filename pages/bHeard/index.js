import { useState, useEffect } from "react";
import {
  Arrow,
  ArrowContainer,
  ArrowWrapper,
} from "../../styles/components/arrow/arrow";
import { Button, ButtonText } from "../../styles/components/Buttons/Button";
import {
  ContactUsContainer,
  ContactUsGrid,
  ContactUsWrapper,
} from "../../styles/components/contactUs/contactUs";
import {
  CenterDiv,
  Description,
  Grid,
  Image,
  SS_Container,
  SS_ContainerWrapper,
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
const Bheard = () => {
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
            <Description style={{ fontWeight: "700" }} sticky="sticky">
              Case Study/Arv Tuning
            </Description>
            <Title font="70px" align="left" sticky="sticky">
              How MB Developments reduced the costs of laborious tasks by 50%,
              increased clients and automated 95% of an insurance business.
            </Title>
          </StickyGrid>
          <Grid>
            <Image src="https://images.unsplash.com/photo-1568048773966-a18abfbffbfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80" />

            <CenterDiv gap="1px">
              <Row>
                <Overview>Branch:</Overview>
                <Overview>Automotive</Overview>
              </Row>
              <hr />
              <Row>
                <Overview>Branch:</Overview>
                <Overview>Automotive</Overview>
              </Row>
              <hr />
              <Row>
                <Overview>Branch:</Overview>
                <Overview>Automotive</Overview>
              </Row>
              <hr />
              <H3 color="black">The brief</H3>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum
              </Description>

              <H3 color="black">The solution.</H3>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum
              </Description>
              <QuoteContainer>
                <H3 color="black">
                  n ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum
                </H3>
              </QuoteContainer>
            </CenterDiv>
          </Grid>
        </SS_ContainerWrapper>
        <ContactUsContainer>
          <ContactUsWrapper>
            <ContactUsGrid>
              <Description align="center">
                {" "}
                Arrange a free consultation
              </Description>
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
      </SS_Container>
    </>
  );
};
export default Bheard;
