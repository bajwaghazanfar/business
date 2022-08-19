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
  FullImage,
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
import fcProperties from "../../public/fcProperties1.avif";
import Head from "next/head";
import {
  SlideshowContainer,
  SlideshowWrapper,
} from "../../styles/pages/home/home";
import { Slider } from "../../styles/components/slideshow/Slider";
import fc1 from "../../public/fcProperties/fc1.webp";
import fc2 from "../../public/fcProperties/fc2.webp";
import fc3 from "../../public/fcProperties/fc3.webp";
import fc4 from "../../public/fcProperties/fc4.webp";
import fc5 from "../../public/fcProperties/fc5.webp";
import fc6 from "../../public/fcProperties/fc6.webp";

const Fcproperties = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.document.body.scrollHeight);
      setWidth(window.innerWidth);
    }
  }, []);
  const sliderData = [
    { image: fc1 },
    { image: fc2 },
    { image: fc3 },
    { image: fc4 },
    { image: fc5 },
    { image: fc6 },
  ];
  return (
    <>
      <Head>
        <title>Case study FC Properties -Obsidian Web Developments</title>
        <meta
          name="description"
          content="Case study of FC Properties, an insurance website created by Obsidian Web Developments"
        />
      </Head>
      <Head>
        <meta
          property="og:title"
          content="Case study FC Properties -Obsidian Web Developments"
        />
      </Head>
      <ArrowContainer height={`${height}px`}>
        <ArrowWrapper>
          <Arrow height={`${height}px`} />
        </ArrowWrapper>
      </ArrowContainer>
      <SS_Container
        top={width > 768 ? "200px" : "100px"}
        justify="flex-start"
        align="flex-start"
      >
        <SS_ContainerWrapper>
          <StickyGrid justify="flex-start" align="flex-start" padding="2rem">
            <StickyContainer>
              <Description style={{ fontWeight: "700" }} sticky="sticky">
                Case Study/FC Properties
              </Description>
              <Title font="60px" align="left" sticky="sticky">
                How Obsidian Web Developments reduced the time spent on
                repetitive tasks, freeing resources and improving turnover rates
                by 85%
              </Title>
            </StickyContainer>
          </StickyGrid>
          <Grid width={width > 768 ? "2rem" : "0rem"}>
            <FullImage
              src={fcProperties}
              layout="responsive"
              alt="FC Properties"
            />

            <CenterDiv gap="1px" padding="0rem">
              <Row>
                <Overview>Industry:</Overview>
                <Overview>Real estate</Overview>
              </Row>
              <hr />
              <Row>
                <Overview>Location:</Overview>
                <Overview>Birmingham</Overview>
              </Row>
              <hr />
              <Row>
                <Overview>Number of employees:</Overview>
                <Overview>20+</Overview>
              </Row>
              <hr />
              <H3 color="black">The Challenge.</H3>
              <Description>
                FC Properties is a real estate agency founded in 2020 which
                deals with the sales of properties throughout the UK and Wales.
                FC Properties manages rental properties for landlords and serves
                as the bridge between landlords and tenants. During the first
                year of business, FC Properties used Excel to manage rental
                properties for landlords, provide monthly reports to landlords
                and track the sales of properties. Laborious, repetitive work
                took up 80% of the time at FC Properties, restricting the
                opportunities for expansion and other avenues of success. <br />
                <br />
                FC Properties approached Obsidian Web Developments in their
                second year of business and assigned us with the task to create
                an intuitive system. This system will automate the repetitive
                work involved with tracking finances. In addition to this,
                Obsidian Web Developments were also tasked with creating a CMS
                system to advertise properties for rent or sale on their
                website, add authorization and authentication to their system as
                well as adding permission-based access to sensitive data for
                employees.
              </Description>

              <H3 color="black">The solution.</H3>
              <Description>
                In the first step Obsidian Web Developments, in consultation
                with external management and consultants drafted a plan for the
                creation of this new system for FC Properties. As part of the
                planning process, the team gathered all the requirements for
                this new system which involved the creation and integration of a
                front-end and back-end system supported by AWS and MongoDB.
                <br />
                <br />
                The second step involved creating the software architectural
                patterns for the backend system which would communicate with AWS
                and MongoDB. This stage also involved picking the technologies
                involved in the creation of this system, creating test cases for
                the entire project, and creating web designs for the front-end.
                <br />
                <br />
                After extensive planning and consultation with the management of
                FC Properties, development ensued in which the entire project
                was created and tested within 20 days. The front-end was
                integrated with the back-end and all sensitive secret keys were
                stored securely to prevent unauthorized access to the sever and
                database. Test-driven development was used to ensure the project
                was robust and had no vulnerabilities.
                <br />
                <br />
                The project was then deployed and handed over to the client.
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
                  working of the teams at Obsidian Web Developments. The optimal
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
export default Fcproperties;
