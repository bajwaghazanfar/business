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
  FullImage,
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
import arvTuning from "../../public/arvTuning.avif";
import Head from "next/head";

const Arvtuning = () => {
  const [height, setHeight] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.document.body.scrollHeight);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Case study ARV Tuning -MB Developments</title>
        <meta
          name="description"
          content="Case study of ARV Tuning, an insurance website created by MB Developments"
        />
      </Head>
      <Head>
        <meta
          property="og:title"
          content="Case study ARV Tuning -MB Developments"
        />
      </Head>
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
                Case Study/Arv Tuning
              </Description>
              <Title font="70px" align="left" sticky="sticky">
                How MB Developments reduced the costs of laborious tasks by 50%,
                increased clients and automated 95% of an insurance business.
              </Title>
            </StickyContainer>
          </StickyGrid>
          <Grid>
            <FullImage src={arvTuning} objectFit="cover" alt="ARV Tuning " />

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
        <ContactUs />
        <Footer />
      </SS_Container>
    </>
  );
};
export default Arvtuning;
