import {
  Container,
  HomeContainer,
  Video,
  LeftContainer,
  MainWrapper,
  H3,
  H2Wrapper,
  H2,
  LineContainer,
  AlignLeft,
  RightContainer,
  H4,
  Row,
  RowChild,
  RowContainer,
  CenterWrapper,
  HalfWidth,
  RowLogo,
  RowText,
  RightContainerImage,
} from "../../styles/pages/home/home";
import {
  Button,
  ButtonContainer,
  ButtonText,
} from "../../styles/components/Buttons/Button";
import {
  Description,
  Grid,
  SS_Container,
  Title,
  FullImage,
  ImageGrid,
  SS_ContainerWrapper,
  FullImageContainer,
  SubTitle,
} from "../../styles/components/StickySection/StickySection";
import { useEffect, useState } from "react";
import { ContactUs } from "../../styles/components/contactUs/contactUs";
import { Footer } from "../../styles/components/footer/footer";

import {
  FadeUpChildren,
  FadeUpContainer,
} from "../../styles/components/stagger";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import me from "../../public/awsMe.avif";
//Image imports
import fiberOptics from "../../public/fiber-optics.webp";
import fcProperties from "../../public/fcProperties.avif";
import arvTuning from "../../public/arvTuning.avif";
import Head from "next/head";

//Bg
import bgImage2 from "../../public/brilliance.webp";
import bgImage from "../../public/eye.webp";
import Link from "next/link";
import {
  DescriptionWrapper,
  ImgContainer,
  Project,
  ProjectContainer,
  ProjectDescription,
  ProjectImage,
  ProjectTitle,
} from "../../styles/pages/projects";
export default function Projects() {
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
  //Framework ref
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <>
      <Head>
        <title>Projects|Obsidian Web Developments</title>
        <meta
          name="description"
          content="Obsidian Web Developments, creating bespoke websites and web designs to meet your requirements."
        />
      </Head>
      <Head>
        <meta property="og:title" content="Obsidian Web Developments" />
      </Head>
      <Container style={{ background: "	#28282B " }}>
        <HomeContainer>
          <LeftContainer>
            <MainWrapper>
              <H2Wrapper>
                <H3>Projects</H3>
                {toggle ? (
                  <motion.div
                    variants={FadeUpContainer(0)}
                    initial="hidden"
                    animate="visible"
                    key={toggle}
                  >
                    <H2 variants={FadeUpChildren}>View our client projects</H2>
                  </motion.div>
                ) : (
                  <motion.div
                    variants={FadeUpContainer(0)}
                    initial="hidden"
                    animate="visible"
                    key={toggle}
                  >
                    <H2 variants={FadeUpChildren}>
                      Brilliance is what we aim for, nothing less.
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
          <RightContainer>
            <ImageGrid
              variants={FadeUpChildren}
              initial="hidden"
              animate="visible"
              key={toggle}
            >
              {toggle ? (
                <RightContainerImage
                  src={bgImage}
                  initial="hidden"
                  animate="visible"
                  key={toggle}
                  alt="Obsidian web developments with a client"
                  priority={true}
                />
              ) : (
                <RightContainerImage
                  src={bgImage2}
                  initial="hidden"
                  animate="visible"
                  key={toggle}
                  alt="Laptop coding website"
                  priority={true}
                />
              )}
            </ImageGrid>
          </RightContainer>
        </HomeContainer>
      </Container>

      <SS_Container>
        <SS_ContainerWrapper caseStudy="true" bg="#28282B">
          <Grid
            justify="flex-start"
            align="flex-start"
            roundleft="true"
            style={{
              background: "black",
              boxShadow: "-49px 33px 24px -3px rgba(0,0,0,0.1)",
            }}
          >
            <Description style={{ fontWeight: "700" }}>
              Case Study/LCH Insure
            </Description>
            <Title
              font="45px"
              align="left"
              color="white"
              fontWeight="600"
              id="caseStudy1"
            >
              How Obsidian Web Developments reduced the costs of laborious tasks
              by 50%, increased clients and automated 95% of an insurance
              business.
            </Title>
            <ButtonContainer>
              <Link href="/web-development-birmingham-web-design-birmingham/lchinsure">
                <Button id="caseStudy1">
                  <ButtonText>Explore</ButtonText>
                </Button>
              </Link>
            </ButtonContainer>
          </Grid>
          <Grid
            align="flex-start"
            justify="flex-start"
            padding="0rem"
            style={{ boxShadow: "-49px 33px 24px -3px rgba(0,0,0,0.1)" }}
          >
            <FullImageContainer caseStudy="true" height="100%">
              <FullImage
                src={fiberOptics}
                layout="fill"
                alt="LCH Insure "
                roundright="true"
              />
            </FullImageContainer>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>
      <SS_Container>
        <SS_ContainerWrapper caseStudy="true" bg="#28282B">
          <Grid
            justify="flex-start"
            align="flex-start"
            roundleft="true"
            roundright="true"
            style={{
              background: "black",
              boxShadow: "-49px 33px 24px -3px rgba(0,0,0,0.1)",
            }}
          >
            <Description style={{ fontWeight: "700" }}>
              Case Study/Arv Tuning
            </Description>
            <Title font="45px" align="left" color="white" fontWeight="600">
              How Obsidian Web Developments improved the SEO of a site,
              resulting in 60% more customers every month
            </Title>
            <ButtonContainer>
              <Link href="/web-development-birmingham-web-design-birmingham/arvTuning">
                <Button>
                  <ButtonText>Explore</ButtonText>
                </Button>
              </Link>
            </ButtonContainer>
          </Grid>
          <Grid
            padding="0rem"
            align="flex-start"
            justify="flex-start"
            style={{ boxShadow: "-49px 33px 24px -3px rgba(0,0,0,0.1)" }}
          >
            <FullImageContainer caseStudy="true" height="100%">
              <FullImage
                src={arvTuning}
                alt="ARV Tuning"
                layout="fill"
                roundright="true"
              />
            </FullImageContainer>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>
      <SS_Container>
        <SS_ContainerWrapper caseStudy="true" bg="#28282B">
          <Grid
            justify="flex-start"
            align="flex-start"
            roundleft="true"
            style={{
              background: "black",
              boxShadow: "-49px 33px 24px -3px rgba(0,0,0,0.1)",
            }}
          >
            <Description style={{ fontWeight: "600" }} color="white">
              Case Study/FC Properties
            </Description>
            <Title font="45px" align="left" color="white" fontWeight="600">
              How Obsidian Web Developments reduced the time spent on repetitive
              tasks, freeing resources and improving turnover rates by 85%
            </Title>
            <ButtonContainer>
              <Link href="/web-development-birmingham-web-design-birmingham/fcProperties">
                <Button>
                  <ButtonText>Explore</ButtonText>
                </Button>
              </Link>
            </ButtonContainer>
          </Grid>

          <Grid
            padding="0rem"
            align="flex-start"
            justify="flex-start"
            style={{ boxShadow: "-49px 33px 24px -3px rgba(0,0,0,0.1)" }}
          >
            <FullImageContainer caseStudy="true" height="100%">
              <FullImage
                src={fcProperties}
                alt="FC Properties"
                layout="fill"
                roundright="true"
              />
            </FullImageContainer>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>

      <ContactUs alt={false} mobile={true} />
      <Footer />
    </>
  );
}
