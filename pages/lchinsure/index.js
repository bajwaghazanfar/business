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
import fiberOptics from "../../public/fiber-optics.jpg";
import Head from "next/head";
import {
  SlideshowContainer,
  SlideshowWrapper,
} from "../../styles/pages/home/home";
import { Slider } from "../../styles/components/slideshow/Slider";
import lch1 from "../../public/lchInsure/lch1.png";
import lch2 from "../../public/lchInsure/lch2.png";
import lch3 from "../../public/lchInsure/lch3.png";
import lch4 from "../../public/lchInsure/lch4.png";
import lch5 from "../../public/lchInsure/lch5.png";
import lch6 from "../../public/lchInsure/lch6.png";
import lch7 from "../../public/lchInsure/lch7.png";
import lch8 from "../../public/lchInsure/lch8.png";
const Lchinsure = () => {
  const [height, setHeight] = useState(null);

  const [width, setWidth] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.document.body.scrollHeight);
      setWidth(window.innerWidth);
    }
  }, []);
  const sliderData = [
    { image: lch1 },
    { image: lch2 },
    { image: lch3 },
    { image: lch4 },
    { image: lch5 },
    { image: lch6 },
    { image: lch7 },
    { image: lch8 },
  ];
  return (
    <>
      <Head>
        <title>Case study LCH Insure -MB Developments</title>
        <meta
          name="description"
          content="Case study of LCH Insure, an insurance website created by MB Developments"
        />
      </Head>
      <Head>
        <meta
          property="og:title"
          content="Case study LCH Insure -MB Developments"
        />
      </Head>
      <ArrowContainer height={`${height}px`}>
        <ArrowWrapper>
          <Arrow height={`${height}px`} />
        </ArrowWrapper>
      </ArrowContainer>
      <SS_Container top="100px" justify="flex-start" align="flex-start">
        <SS_ContainerWrapper>
          <StickyGrid justify="flex-start" align="flex-start" padding="2rem">
            <StickyContainer>
              <Description style={{ fontWeight: "700" }} sticky="sticky">
                Case Study/FC Properties
              </Description>
              <Title font="60px" align="left" sticky="sticky">
                How MB Developments reduced the costs of laborious tasks by 50%,
                increased clients and automated 95% of an insurance business.
              </Title>
            </StickyContainer>
          </StickyGrid>
          <Grid width={width > 768 ? "2rem" : "0.5rem"}>
            <FullImage src={fiberOptics} alt="LCH Insure" />

            <CenterDiv gap="1px">
              <Row>
                <Overview>Industry:</Overview>
                <Overview>Car Insurance</Overview>
              </Row>
              <hr />
              <Row>
                <Overview>Location:</Overview>
                <Overview>Birmingham</Overview>
              </Row>
              <hr />
              <Row>
                <Overview>Number of employees:</Overview>
                <Overview>30</Overview>
              </Row>
              <hr />
              <H3 color="black">The Challenge</H3>
              <Description>
                LCH Insure is an insurance broker founded in 2021, which helped
                people find cheap vehicle insurance in the UK and Wales. For the
                entire year, LCH Insure had operated by manually contacting
                customers for details, which could result in lengthy phone calls
                and human errors occurring throughout this entire process. In
                order to mitigate these problems, LCH Insure contacted MB
                Developments to create a web solution, which would automate this
                entire process, reducing costs and time spent.
              </Description>

              <H3 color="black">The solution.</H3>
              <Description>
                In the first step, MB Developments drafted a plan for the
                creation of an entire new system, compromised of a frontend and
                a backend. The solution would be a website, which users could
                visit and fill out a multi-step form, automating this process
                and increasing the turnover rate by 80%. Once the form was
                submitted, it would be sent directly to the companies’ email,
                which they could process from there. To accomplish this, the
                team had to gather all the requirements for this new solution,
                which would be actualized and implemented into a full stack
                solution.
                <br />
                <br />
                The second step involved creating the software architectural
                patterns for the backend system, which would communicate with
                the Google Gmail API, to send emails to the company’s email. The
                server, we chose to utilize was Node.js as its fast, easy to
                setup and would also result in one codebase, meaning less
                specialty is required to amend future changes.
                <br />
                <br />
                After thorough planning and consultation with the management of
                LCH Insure, development ensued, in which the project was
                rigorously tested and created within 10 days. The frontend was
                integrated with the backend, the secret keys were stored
                securely, and the website was deployed to the cloud, ready to
                use by LCH Insure.
              </Description>
              <SlideshowContainer>
                <SlideshowWrapper width="100%" height="440px">
                  <Slider data={sliderData} type="image" />
                </SlideshowWrapper>
              </SlideshowContainer>
              <Description style={{ fontWeight: "700" }}>
                Customer reference.
              </Description>
              <QuoteContainer>
                <H3 color="black" font="40px">
                  "We are very grateful for the committed and flexible way of
                  working of the teams at MB Developments. The optimal
                  combination of consulting and engineering supports our
                  insolvency proceedings optimally on the IT side."
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
export default Lchinsure;
