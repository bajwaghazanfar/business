import { useState, useEffect } from "react";
import {
  Arrow,
  ArrowContainer,
  ArrowWrapper,
} from "../../../styles/components/arrow/arrow";
import { Button, ButtonText } from "../../../styles/components/Buttons/Button";
import {
  ContactUs,
  ContactUsContainer,
  ContactUsGrid,
  ContactUsWrapper,
} from "../../../styles/components/contactUs/contactUs";
import { Footer } from "../../../styles/components/footer/footer";
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
} from "../../../styles/components/StickySection/StickySection";
import {
  H3,
  HR,
  Overview,
  QuoteContainer,
  Row,
} from "../../../styles/pages/bHeard/bHeard";
import fiberOptics from "../../../public/fiber-optics.webp";
import Head from "next/head";
import {
  SlideshowContainer,
  SlideshowWrapper,
} from "../../../styles/pages/home/home";
import { Slider } from "../../../styles/components/slideshow/Slider";
import lch1 from "../../../public/lchInsure/lch1.webp";
import lch2 from "../../../public/lchInsure/lch2.webp";
import lch3 from "../../../public/lchInsure/lch3.webp";
import lch4 from "../../../public/lchInsure/lch4.webp";
import lch5 from "../../../public/lchInsure/lch5.webp";
import lch6 from "../../../public/lchInsure/lch6.webp";
import lch7 from "../../../public/lchInsure/lch7.webp";
import lch8 from "../../../public/lchInsure/lch8.webp";
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
        <title>Case study LCH Insurance -Obsidian Web Developments</title>
        <meta
          name="description"
          content="Case study of LCH Insurance, an insurance website created by Obsidian Web Developments"
        />
      </Head>
      <Head>
        <meta
          property="og:title"
          content="Case study LCH Insurance -Obsidian Web Developments"
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
                Case Study/LCH Insurance
              </Description>
              <Title font="60px" align="left" sticky="sticky">
                How Obsidian Web Developments reduced the costs of laborious
                tasks by 50%, increased clients and automated 95% of an
                insurance business.
              </Title>
            </StickyContainer>
          </StickyGrid>
          <Grid width={width > 768 ? "2rem" : "0.5rem"}>
            <FullImage src={fiberOptics} alt="LCH Insurance" />

            <CenterDiv gap="1px">
              <Row>
                <Overview>Industry:</Overview>
                <Overview>Vehicle Insurance</Overview>
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
                LCH Insurance is an insurance broker founded in 2021 which
                helped people find cheap vehicle insurance in the UK and Wales.
                For the entire year, LCH Insurance operated by manually
                contacting customers for details which resulted in lengthy phone
                calls and human errors occurring throughout this entire process.
                To mitigate these problems, LCH Insurance contacted Obsidian Web
                Developments to create a web solution, which would automate this
                entire process, reducing costs and time spent.
              </Description>

              <H3 color="black">The solution.</H3>
              <Description>
                In the first step Obsidian Web Developments drafted a plan for
                the creation of an entire new system, compromised of a front-end
                and a back-end. The solution is a website which users could
                visit and fill out a multi-step form, automating this process
                and increasing the turnover rate by 80%. Once the form was
                submitted, it would be sent directly to LCH Insurance which
                could then be processed. To accomplish this, the team had to
                gather all the requirements for this new solution, which would
                be actualized and implemented into a full stack solution.
                <br />
                <br />
                The second step involved creating the software architectural
                patterns for the back-end system which communicates with the
                Google Gmail API, to send the submitted form to LCH Insurance.
                The server used was Node.js as it is fast and quick to set up.
                <br />
                <br />
                After thorough planning and consultation with the management of
                LCH Insurance, development ensued in which the project was
                rigorously tested and created within 10 days. The front-end was
                integrated with the back-end, the secret keys were stored
                securely, and the website was deployed to the cloud, ready to
                use by LCH Insurance.
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
                  "We are very greateful for the commited and flexible way of
                  working at Obsidian Web Developments. Thier holistic approach
                  to solving our business needs, saved us £5000 in labour costs
                  and increased our profit margins"
                </H3>
              </QuoteContainer>
            </CenterDiv>
          </Grid>
        </SS_ContainerWrapper>
        <ContactUs alt={false} mobile={true} />
        <Footer />
      </SS_Container>
    </>
  );
};
export default Lchinsure;
