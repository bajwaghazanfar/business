import { useState, useEffect } from "react";
import {
  Arrow,
  ArrowContainer,
  ArrowWrapper,
} from "../../styles/components/arrow/arrow";
import { Button, ButtonText } from "../../styles/components/Buttons/Button";
import { ContactUs } from "../../styles/components/contactUs/contactUs";
import { Footer } from "../../styles/components/footer/footer";
import {
  CenterDiv,
  Description,
  Grid,
  SS_Container,
  FullImage,
  SS_ContainerWrapper,
  Title,
} from "../../styles/components/StickySection/StickySection";

import about from "../../public/about1.webp";
import Head from "next/head";
import Gear from "../../public/logos/settings.png";
import Power from "../../public/logos/power.png";
import Calendar from "../../public/logos/calendar.png";
import Edit from "../../public/logos/edit.png";
import philosophy from "../../public/philosophy.webp";
philosophy;
import {
  Diffrent,
  DiffrentContainer,
  FullWidthContainer,
  H2,
  H3,
  H4,
  TwoColumnGrid,
  TwoColumnGridContainer,
  Value,
  ValueContainer,
  ValueDescription,
  ValueImage,
  ValueMain,
  ValueTitle,
  ValueTop,
} from "../../styles/pages/about/about";
import Diagram from "../../public/diagram.svg";
const About = () => {
  const [height, setHeight] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.document.body.scrollHeight);
    }
  }, []);
  return (
    <>
      <Head>
        <title>About - MB Developments</title>
        <meta name="description" content="About MB Developments" />
      </Head>
      <Head>
        <meta property="og:title" content="About MB Developments" />
      </Head>
      <ArrowContainer height={`${height}px`}>
        <ArrowWrapper>
          <Arrow height={`${height}px`} />
        </ArrowWrapper>
      </ArrowContainer>
      <SS_Container justify="flex-start" align="flex-start">
        <SS_ContainerWrapper>
          <Grid
            justify="flex-end"
            align="flex-end"
            padding="2rem"
            height="60vh"
          >
            <H4 color="black">Experience,capabillity and integrity</H4>
            <H2 color="black" style={{ margin: "0px" }}>
              MB Developments - a partner you can trust
            </H2>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>
      <FullWidthContainer>
        <FullImage src={about} layout="fill" alt="Alternate background image" />
      </FullWidthContainer>
      <SS_Container>
        <SS_ContainerWrapper>
          <Grid justify="flex-start" align="flex-start">
            <Title font="50px" align="left" fontWeight="500">
              Responsibillity for IT means responsibillity for a company's
              success
            </Title>
          </Grid>
          <Grid align="flex-start" justify="flex-start">
            <H4 color="black">Binding, Responsible and Available</H4>
            <ValueContainer>
              <Value>
                <ValueTop>
                  <ValueImage src={Power} height={30} width={30} />
                  <H3 color="black">01</H3>
                </ValueTop>
                <ValueMain>
                  <ValueTitle color="black">transparency</ValueTitle>
                  <ValueDescription color="black">
                    We create transparency in the planning, implementation and
                    operation of IT environments. Our dashboard solutions give
                    you a precise overview of all facets of your IT systems and
                    applications.
                  </ValueDescription>
                </ValueMain>
              </Value>
              <Value>
                <ValueTop>
                  <ValueImage src={Gear} height={30} width={30} />
                  <H3 color="black">02</H3>
                </ValueTop>
                <ValueMain>
                  <ValueTitle color="black">integrity</ValueTitle>
                  <ValueDescription color="black">
                    We take responsibility and act as a long-term partner to our
                    customers. For this reason, we have no binding sales
                    partnerships with dealers and manufacturers, but always
                    strive for the best solution from the customer's point of
                    view.
                  </ValueDescription>
                </ValueMain>
              </Value>
              <Value>
                <ValueTop>
                  <ValueImage src={Calendar} height={30} width={30} />
                  <H3 color="black">03</H3>
                </ValueTop>
                <ValueMain>
                  <ValueTitle color="black">stabillity</ValueTitle>
                  <ValueDescription color="black">
                    Both our management and the Supervisory Board work to ensure
                    that our company always has a stable entrepreneurial basis
                    and that we are able to support our customers worldwide at
                    the highest level even in economically uncertain times.
                  </ValueDescription>
                </ValueMain>
              </Value>
              <Value>
                <ValueTop>
                  <ValueImage src={Edit} height={30} width={30} />
                  <H3 color="black">04</H3>
                </ValueTop>
                <ValueMain>
                  <ValueTitle color="black">competence</ValueTitle>
                  <ValueDescription color="black">
                    All of our consultants have extensive technical skills and a
                    relevant professional background with solid practical
                    experience. We attach great importance to continuous
                    training and proof of qualification through certification.
                  </ValueDescription>
                </ValueMain>
              </Value>
            </ValueContainer>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>{" "}
      <SS_Container>
        <SS_ContainerWrapper bg="#eaddca">
          <Grid padding="0rem">
            <FullWidthContainer>
              <FullImage
                src={philosophy}
                layout="fill"
                alt="Alternate background image"
              />
            </FullWidthContainer>
          </Grid>
          <Grid align="flex-start" justify="flex-start">
            <H4 color="black">Our philosophy</H4>
            <TwoColumnGridContainer>
              <TwoColumnGrid>
                <ValueDescription color="black">
                  Obsidian Web Developments combines over ten years of
                  technological expertise from various IT service providers with
                  another ten years of industry experience in management
                  consulting, software development, construction, automotive and
                  production. This consulting and implementation power is based
                  on a solid entrepreneurial foundation and makesObsidian Web
                  Developments a stable, long-term and future-oriented partner
                  for companies. Due to the medium-sized character of our team,
                  we always focus on the essentials and put the solutions in the
                  foreground. On this binding and down-to-earth basis, we bring
                  cutting-edge technologies together with the needs of
                  medium-sized companies with a constant eye on the actual
                  needs.
                </ValueDescription>
              </TwoColumnGrid>
              <TwoColumnGrid>
                <ValueDescription color="black">
                  Obsidian Web Developments combines over ten years of
                  technological expertise from various IT service providers with
                  another ten years of industry experience in management
                  consulting, software development, construction, automotive and
                  production. This consulting and implementation power is based
                  on a solid entrepreneurial foundation and makesObsidian Web
                  Developments a stable, long-term and future-oriented partner
                  for companies. Due to the medium-sized character of our team,
                  we always focus on the essentials and put the solutions in the
                  foreground. On this binding and down-to-earth basis, we bring
                  cutting-edge technologies together with the needs of
                  medium-sized companies with a constant eye on the actual
                  needs.
                </ValueDescription>
              </TwoColumnGrid>
            </TwoColumnGridContainer>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>
      <SS_Container>
        <SS_ContainerWrapper>
          <Grid justify="flex-start" align="flex-start">
            <Title font="50px" align="left" fontWeight="500">
              A strategic partner asks the right questions and gives the right
              answers.
            </Title>
          </Grid>
          <Grid align="flex-start" justify="flex-start">
            <H4 color="black">
              Integrated processes are the cornerstone of the Purevirtual
              Framework.
            </H4>
            <FullWidthContainer height="auto">
              <FullImage src={Diagram} alt="Alternate background image" />
            </FullWidthContainer>
            <DiffrentContainer>
              <Diffrent>
                <CenterDiv>
                  <ValueTitle color="black">01</ValueTitle>
                </CenterDiv>
                <CenterDiv>
                  <H4 color="black" style={{ margin: "0px" }}>
                    Agile and motivated
                  </H4>
                  <ValueDescription color="black">
                    Obsidian Web Developments combines over ten years of
                    technological expertise from various IT service providers
                    with another ten years of indus
                  </ValueDescription>
                </CenterDiv>
              </Diffrent>
              <Diffrent>
                <CenterDiv>
                  <ValueTitle color="black">02</ValueTitle>
                </CenterDiv>
                <CenterDiv>
                  <H4 color="black" style={{ margin: "0px" }}>
                    Agile and motivated
                  </H4>
                  <ValueDescription color="black">
                    Obsidian Web Developments combines over ten years of
                    technological expertise from various IT service providers
                    with another ten years of indus
                  </ValueDescription>
                </CenterDiv>
              </Diffrent>
              <Diffrent>
                <CenterDiv>
                  <ValueTitle color="black">03</ValueTitle>
                </CenterDiv>
                <CenterDiv>
                  <H4 color="black" style={{ margin: "0px" }}>
                    Agile and motivated
                  </H4>
                  <ValueDescription color="black">
                    Obsidian Web Developments combines over ten years of
                    technological expertise from various IT service providers
                    with another ten years of indus
                  </ValueDescription>
                </CenterDiv>
              </Diffrent>
            </DiffrentContainer>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>
      <ContactUs alt={false} />
      <Footer />
    </>
  );
};
export default About;
