import {
  Arrow,
  ArrowContainer,
  ArrowWrapper,
} from "../styles/components/arrow/arrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Container,
  HomeContainer,
  Video,
  VideoContainer,
  LeftContainer,
  MainWrapper,
  H3,
  H2Wrapper,
  H2,
  H2Span,
  CustomersWrapper,
  Customers,
  CustomerLogo,
  FrameworkContainer,
  Framework,
  LineContainer,
  AlignLeft,
  RightContainer,
  AlignRight,
  H4,
  InsightsWrapper,
  InsightsContainer,
  H5,
  SlideshowContainer,
  SlideshowWrapper,
  Row,
  RowChild,
  RowContainer,
  CenterWrapper,
  HalfWidth,
  RowLogo,
  RowText,
  FullWidthContainer,
  ServicesContainer,
  Service,
  ServiceImgWrapper,
  ServiceImg,
  ServiceTextWrapper,
  ServiceTitle,
  ServiceDescription,
  RightContainerImage,
  TwoColumnGrid,
  ServiceA,
} from "../styles/pages/home/home";
import {
  Button,
  ButtonContainer,
  ButtonText,
} from "../styles/components/Buttons/Button";
import {
  CenterDiv,
  Description,
  Grid,
  SS_Container,
  StickyGrid,
  Title,
  FullImage,
  ImageGrid,
  Vertical_Image,
  SS_ContainerWrapper,
  ValuesContainer,
  Value,
  ValueImg,
  ValueTitle,
  ValueDescription,
  ValueTextWrapper,
  ValueImgWrapper,
  FullImageContainer,
  SubTitle,
  DescriptionSpan,
  A,
} from "../styles/components/StickySection/StickySection";
import { useEffect, useState } from "react";
import { ContactUs } from "../styles/components/contactUs/contactUs";

import { FadeUpChildren, FadeUpContainer } from "../styles/components/stagger";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Image imports
import fiberOptics from "../public/fiber-optics.webp";
import fcProperties from "../public/fcProperties.avif";

import Head from "next/head";

import Link from "next/link";
//Next Slideshow images
import slideshowImg1 from "../public/about.webp";
import slideshowImg2 from "../public/slideshowImg2.avif";
import slideshowImg3 from "../public/slideshowImg3.avif";
import development from "../public/development.avif";

import arvTuning from "../public/arvTuning.avif";
import undraw1 from "../public/undraw/undraw1.svg";
//Icons
import { DiReact } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { FcGallery } from "react-icons/fc";
import { FcSalesPerformance } from "react-icons/fc";
import { FcAcceptDatabase } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { IoMdBrowsers } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { useRef } from "react";
//Bg
import bgImage from "../public/bgImage.webp";
import bgImage2 from "../public/bg2.webp";
import { Footer } from "../styles/components/footer/footer";
import dynamic from "next/dynamic";
import {
  FAQ,
  FAQContainer,
  FAQ_Description,
  FAQ_Left,
  FAQ_Right,
  FAQ_TextWrapper,
  FAQ_Title,
} from "../styles/components/faq/faq";

export default function Home() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [toggle, setToggle] = useState(true);

  //ref
  const box1Ref = useRef(null);
  const sliderData = [
    {
      title: "FC Properties",
      subHeading: "compliance",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ",
      image: slideshowImg1,
    },
    {
      title: "LCH Insure",
      subHeading: "compliance",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ",
      image: slideshowImg2,
    },
    {
      title: "ARV Tuning",
      subHeading: "compliance",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ",
      image: slideshowImg3,
    },
  ];
  //#0096FF
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
        <title>
          #1 Web Development Birmingham | Web design Birmingham | Obsidian Web
          Developments
        </title>
        <meta
          name="description"
          content="Obsidian Web Developments, #1  Web Development Birmingham and web design agency. We custom-build bespoke websites using state of the art technologies to meet your requirements"
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
                <H3>Obsidian Web Developments</H3>
                {toggle ? (
                  <motion.div
                    variants={FadeUpContainer(0)}
                    initial="hidden"
                    animate="visible"
                    key={toggle}
                  >
                    <H2 variants={FadeUpChildren} priority={true}>
                      #1 Web Development Birmingham
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
                      Premium Web Design and Web Development services in
                      Birmingham
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
                  alt="Obsidian web developments with a client"
                />
              ) : (
                <RightContainerImage
                  src={bgImage2}
                  alt="Laptop coding website"
                />
              )}
            </ImageGrid>
          </RightContainer>
        </HomeContainer>
      </Container>

      <Container>
        <RowContainer>
          <Row
            bg="none"
            alternate="true"
            drag="x"
            dragConstraints={{ left: 100, right: 100 }}
          >
            <RowChild bg="white" alternate="true">
              <RowLogo bg="#90CAF9 ">
                <FcGallery
                  style={
                    width <= 768
                      ? { fontSize: "40px", color: "#4EC63F" }
                      : { fontSize: "40px", color: "#4EC63F" }
                  }
                />
              </RowLogo>
              <RowText>10+ years in Web Development commercially</RowText>
            </RowChild>
            <RowChild bg="white" alternate="true">
              <RowLogo bg="#FFFACD">
                <FcBullish
                  style={
                    width <= 768
                      ? { fontSize: "40px", color: "#4EC63F" }
                      : { fontSize: "40px", color: "#4EC63F" }
                  }
                />
              </RowLogo>
              <RowText>
                Execptional service and custom built web solutions
              </RowText>
            </RowChild>
            <RowChild bg="white" alternate="true">
              <RowLogo bg="#EAFED6 ">
                <FcSalesPerformance
                  style={
                    width <= 768
                      ? { fontSize: "40px", color: "#4EC63F" }
                      : { fontSize: "40px", color: "#4EC63F" }
                  }
                />
              </RowLogo>
              <RowText>Flexible pricing per individual project</RowText>
            </RowChild>
            <RowChild bg="white" alternate="true">
              <RowLogo bg="	#FEE1D6">
                <FcAcceptDatabase
                  style={
                    width <= 768
                      ? { fontSize: "40px", color: "#4EC63F" }
                      : { fontSize: "40px", color: "#4EC63F" }
                  }
                />
              </RowLogo>
              <RowText>Front-end and back-end development</RowText>
            </RowChild>
          </Row>
        </RowContainer>
        <CenterWrapper>
          <HalfWidth>
            <Title font="50px" align="center" fontWeight="700">
              #1 Web Development agency in Birmingham
            </Title>
            <Description color="black" align="center">
              Obsidian Web Developments is an award winning
              <DescriptionSpan> Web development</DescriptionSpan> and{" "}
              <DescriptionSpan>
                Web Design Agency based in Birmingham
              </DescriptionSpan>
              , with a team passionate about delivering web solutions for
              clients with complex requirements. Our focal point is{" "}
              <DescriptionSpan>Web Development</DescriptionSpan> and{" "}
              <DescriptionSpan>Web Design</DescriptionSpan>, we aim to combine
              various state of the art technologies to meet your project
              requirements on time, within budget and most important of all to a
              high standard.
            </Description>
          </HalfWidth>
        </CenterWrapper>
      </Container>
      <SS_Container>
        <SS_ContainerWrapper padding="4rem">
          <Grid align="flex-start" justify="flex-start">
            <FullImageContainer>
              <FullImage
                src={development}
                layout={`${width <= 770 ? "responsive" : "fill"}`}
                roundleft="true"
                roundright="true"
                alt="Web Development logo"
              />
            </FullImageContainer>
          </Grid>
          <Grid justify="center" align="flex-start" roundright="true">
            <SubTitle font="50px" align="left" fontWeight="700">
              Web Design Birmingham
            </SubTitle>
            <Description color="black">
              We are a newly founded Web Development and Web Design agency based
              in Birmingham with over{" "}
              <DescriptionSpan>
                10+ years in Web Development and Web Design commercially
              </DescriptionSpan>
              . Our team of developers have gained vital experience with large
              corporations all over the world, to grasp the intricacies of{" "}
              <DescriptionSpan>
                Web Development, Web Design and SEO
              </DescriptionSpan>
              . We pride ourselves on understanding these services to a
              high-level and delivering quality web solutions that meet your
              project requirements no matter how complex.
            </Description>
            <Description color="black">
              <DescriptionSpan>
                Code runs in our blood, literally!
              </DescriptionSpan>{" "}
              Which is why we are passionate about custom built websites that
              are not built from Wordpress templates which are bloated, slow and
              restrict the capaballities for creative expansion. Our Web
              Development team will produce websites that score perfect{" "}
              <A href="https://web.dev/">lighthouse scores</A> and rank well on
              Google.
              <br />
            </Description>

            <ButtonContainer>
              <Link href="/web-development-birmingham-web-design-birmingham/web-development-birmingham">
                <Button>
                  <ButtonText>View web design birmingham </ButtonText>
                </Button>
              </Link>
            </ButtonContainer>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>
      <SS_Container>
        <SS_ContainerWrapper bg="#28282B  " padding="4rem">
          <Grid justify="center" align="flex-start">
            <Title
              font="50px"
              align="left"
              fontWeight="700"
              color="#F8BBD0"
              style={{ margin: "0px" }}
            >
              Web development services we offer
            </Title>
            <Description color="white" style={{ margin: "0px" }}>
              At Obsidian Web Developments, we offer the best Web Development
              service in Birmingham. Our focal point is custom-built web
              solutions which utilises the latest technologies to create your
              perfect website that solves your business needs and ensues growth.
            </Description>
            <ButtonContainer>
              <Link href="/web-development-birmingham-web-design-birmingham/web-development-birmingham">
                <Button>
                  <ButtonText>View web Development Birmingham</ButtonText>
                </Button>
              </Link>
            </ButtonContainer>
          </Grid>
          <Grid align="flex-start" justify="flex-start">
            <ValuesContainer>
              <Value>
                <ValueImgWrapper>
                  <ValueImg
                    src="/logos/building.svg"
                    alt="In house web development"
                  />
                </ValueImgWrapper>
                <ValueTextWrapper>
                  <ValueTitle>Web Development</ValueTitle>
                  <ValueDescription>
                    Custom built, fast and SEO-friendly websites are the
                    cornerstone of our business. Our Web Development service is
                    guaranteed to meet your business needs, automate repetitive
                    tasks and increase the annual revenue your business
                    generates through our SEO tactics.
                  </ValueDescription>
                </ValueTextWrapper>
              </Value>
              <Value>
                <ValueImgWrapper>
                  <ValueImg
                    src="/logos/layers.svg"
                    alt="In house full stack web development logo"
                  />
                </ValueImgWrapper>
                <ValueTextWrapper>
                  <ValueTitle>Full stack development</ValueTitle>
                  <ValueDescription>
                    Full stack development is another cornerstone of our
                    business. This service is geared towards business that
                    require a solution to meet complex project requirements.
                    Full stack development is compromised of 3 factors. A
                    front-end, back-end and cloud services for any database
                    access etc..
                  </ValueDescription>
                </ValueTextWrapper>
              </Value>
              <Value>
                <ValueImgWrapper>
                  <ValueImg
                    src="/logos/browser.svg"
                    alt="Premium web design services logo"
                  />
                </ValueImgWrapper>
                <ValueTextWrapper>
                  <ValueTitle> Web design</ValueTitle>
                  <ValueDescription>
                    Alongside Web Development and Full stack development, we
                    also offer Web Design as a service aswell. We produce modern
                    sleek web designs using industry leading tools such as Figma
                    to create responsive, eye-catching web designs that are
                    guaranteed to increase user's session lengths
                  </ValueDescription>
                </ValueTextWrapper>
              </Value>
            </ValuesContainer>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>
      <RowContainer>
        <Row>
          <RowChild>
            <DiReact
              style={
                width <= 768
                  ? { fontSize: "60px", color: "#65C9FF " }
                  : { fontSize: "80px", color: "#65C9FF " }
              }
            />
          </RowChild>
          <RowChild>
            <DiNodejs
              style={
                width <= 768
                  ? { fontSize: "60px", color: "#4EC63F" }
                  : { fontSize: "80px", color: "#4EC63F" }
              }
            />
          </RowChild>
          <RowChild>
            <DiVisualstudio
              style={
                width <= 768
                  ? { fontSize: "60px", color: "#4FB1E6 " }
                  : { fontSize: "80px", color: "#4FB1E6 " }
              }
            />
          </RowChild>
          <RowChild>
            <GrGraphQl
              style={
                width <= 768
                  ? { fontSize: "60px", color: "#F76EE9 " }
                  : { fontSize: "80px", color: "#F76EE9 " }
              }
            />
          </RowChild>
        </Row>
      </RowContainer>
      <Container>
        <CenterWrapper justify="flex-start" align="flex-start">
          <HalfWidth>
            <Title
              font="50px"
              align="left"
              fontWeight="700"
              justify="flex-start"
            >
              Web Development Birmingham
            </Title>
            <Description color="black">
              Most web development agencies will customize a pre-built,
              wordpress website with a bloated theme that has poor performance
              and poor SEO. At Obsidian Web Developments, we pride ourselves on
              building websites that are blazing-fast, responsive, easy to
              navigate and have great SEO.
            </Description>
          </HalfWidth>
        </CenterWrapper>
        <CenterWrapper bg="#28282B  ">
          <HalfWidth>
            <Title font="50px" align="center" fontWeight="700" color="#f8bbd0">
              How it works
            </Title>
            <Description color="white" style={{ textAlign: "center" }}>
              Get the quality website that meets your business needs. Here's how
              to get started in just 3 simple steps.
            </Description>
          </HalfWidth>
          <HalfWidth width="80%">
            <ServicesContainer>
              <Service id="service1">
                <ServiceImgWrapper>
                  <IoMdBrowsers style={{ fontSize: "30px", color: "BLACK" }} />
                </ServiceImgWrapper>
                <ServiceTextWrapper>
                  <ServiceTitle>
                    Browse through our site and pick a service
                  </ServiceTitle>
                  <ServiceDescription>
                    Browse through our site and view our various services such
                    as{" "}
                    <ServiceA href="//web-development-birmingham-web-design-birmingham/web-development-birmingham">
                      Web Development
                    </ServiceA>
                    ,{" "}
                    <ServiceA href="//web-development-birmingham-web-design-birmingham/web-development-birmingham">
                      Web Design
                    </ServiceA>{" "}
                    or{" "}
                    <ServiceA href="//web-development-birmingham-web-design-birmingham/web-development-birmingham">
                      SEO
                    </ServiceA>
                    .
                  </ServiceDescription>
                </ServiceTextWrapper>
              </Service>
              <Service>
                <ServiceImgWrapper>
                  <MdEmail style={{ fontSize: "30px", color: "BLACK" }} />
                </ServiceImgWrapper>
                <ServiceTextWrapper>
                  <ServiceTitle>
                    Contact us through our contact form
                  </ServiceTitle>
                  <ServiceDescription>
                    Intrested in a service, contact us and be sure to leave your
                    phone number, query and a suitable time to call you
                  </ServiceDescription>
                </ServiceTextWrapper>
              </Service>
              <Service>
                <ServiceImgWrapper>
                  <AiFillPhone style={{ fontSize: "30px", color: "BLACK" }} />
                </ServiceImgWrapper>
                <ServiceTextWrapper>
                  <ServiceTitle>
                    We will give you a call shortly after
                  </ServiceTitle>
                  <ServiceDescription>
                    Our team will take a look at the project requirements and
                    will give you a call back with more info and a suitable
                    quote
                  </ServiceDescription>
                </ServiceTextWrapper>
              </Service>
            </ServicesContainer>
            <TwoColumnGrid>
              <CenterWrapper>
                <Title
                  font="50px"
                  align="left"
                  fontWeight="700"
                  color="#f8bbd0"
                >
                  Explore{" "}
                  <BsArrowRight
                    style={
                      width <= 768 ? { display: "none" } : { display: "flex" }
                    }
                  />
                </Title>
              </CenterWrapper>
              <FAQContainer>
                <Link href="/web-development-birmingham-web-design-birmingham/about">
                  <FAQ bg="#f8bbd0">
                    <FAQ_Left>
                      <FiExternalLink
                        style={{ fontSize: "40px", color: "#28282b" }}
                      />
                    </FAQ_Left>
                    <FAQ_Right>
                      <FAQ_Title color="#28282b">About</FAQ_Title>
                    </FAQ_Right>
                  </FAQ>
                </Link>
                <Link href="//web-development-birmingham-web-design-birmingham/web-development-birmingham">
                  <FAQ bg="#f8bbd0">
                    <FAQ_Left>
                      <FiExternalLink
                        style={{ fontSize: "40px", color: "#28282b" }}
                      />
                    </FAQ_Left>
                    <FAQ_Right>
                      <FAQ_Title color="#28282b">Web development</FAQ_Title>
                    </FAQ_Right>
                  </FAQ>
                </Link>

                <Link href="/contactUs">
                  <FAQ bg="#f8bbd0">
                    <FAQ_Left>
                      <FiExternalLink
                        style={{ fontSize: "40px", color: "#28282b" }}
                      />
                    </FAQ_Left>
                    <FAQ_Right>
                      <FAQ_Title color="#28282b">Contact Us</FAQ_Title>
                    </FAQ_Right>
                  </FAQ>
                </Link>
              </FAQContainer>
            </TwoColumnGrid>
          </HalfWidth>
        </CenterWrapper>
      </Container>

      <Container>
        <CenterWrapper>
          <HalfWidth>
            <Title font="50px" align="center" fontWeight="700" id="start">
              View our web development case studies below
            </Title>
            <Description color="black" style={{ textAlign: "center" }}>
              Interested in the work we do? We build{" "}
              <DescriptionSpan>business solutions</DescriptionSpan> that add
              real value to a business. Interested in automation or dashboards
              for your employees? <br />
              <DescriptionSpan> View our work below</DescriptionSpan>
            </Description>
          </HalfWidth>
        </CenterWrapper>
      </Container>
      <SS_Container>
        <SS_ContainerWrapper caseStudy="true">
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
              font="50px"
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
            <FullImageContainer caseStudy="true">
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
        <SS_ContainerWrapper caseStudy="true">
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
              Case Study/Arv Tuning
            </Description>
            <Title font="50px" align="left" color="white" fontWeight="600">
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
            <FullImageContainer caseStudy="true">
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
        <SS_ContainerWrapper caseStudy="true">
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
            <Title font="50px" align="left" color="white" fontWeight="600">
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
            <FullImageContainer caseStudy="true">
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
