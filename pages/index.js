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
  StickyGridWrapper,
  StickyContainer,
  FullImageContainer,
  SubTitle,
  DescriptionSpan,
  SubHeading,
  A,
} from "../styles/components/StickySection/StickySection";
import { useEffect, useState } from "react";
import {
  ContactUs,
  ContactUsContainer,
  ContactUsGrid,
  ContactUsWrapper,
} from "../styles/components/contactUs/contactUs";

import CountupHook from "../styles/components/countUp/countUp";
import { FadeUpChildren, FadeUpContainer } from "../styles/components/stagger";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Image imports
import fiberOptics from "../public/fiber-optics.webp";
import fcProperties from "../public/fcProperties.avif";
import about from "../public/about.webp";
import birmingham from "../public/birmingham.avif";
import altBg from "../public/altBg.avif";
import lchLogo from "../public/lch1.png";
import arvLogo from "../public/arv.png";
import fcLogo from "../public/fc.png";
import Head from "next/head";
import { Slider } from "../styles/components/slideshow/Slider";
import Contact from "./contactUs";
import Link from "next/link";
//Next Slideshow images
import slideshowImg1 from "../public/about.webp";
import slideshowImg2 from "../public/slideshowImg2.avif";
import slideshowImg3 from "../public/slideshowImg3.avif";
import development from "../public/development.avif";
import reactImg from "../public/react.webp";
import arvTuning from "../public/arvTuning.avif";
//Icons
import { DiReact } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { FcGallery } from "react-icons/fc";
import { FcSalesPerformance } from "react-icons/fc";
import { FcAcceptDatabase } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { GoBrowser } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import Xarrow from "react-xarrows";
import { useRef } from "react";
//Bg
import bgImage from "../public/bgImage.webp";
import bgImage2 from "../public/bg2.webp";
import { Footer } from "../styles/components/footer/footer";
import dynamic from "next/dynamic";

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
          Birmingham Web Development & Design company| Bespoke Web Development
          and Design company
        </title>
        <meta
          name="description"
          content="Obsidian Web Development, creating bespoke websites and web designs to meet your requirements."
        />
      </Head>
      <Head>
        <meta property="og:title" content="Obsidian Web Development" />
      </Head>
      <Container style={{ background: "	#28282B " }}>
        <HomeContainer>
          <LeftContainer>
            <MainWrapper>
              <H2Wrapper>
                <H3>Obsidian Web Development</H3>
                {toggle ? (
                  <motion.div
                    variants={FadeUpContainer(0)}
                    initial="hidden"
                    animate="visible"
                    key={toggle}
                  >
                    <H2 variants={FadeUpChildren} priority={true}>
                      #1 Web design agency in Birmingham
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
                  alt="Obsidian web development with a client"
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
              Obsidian Web Development is an award winning
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
                layout="fill"
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
              <Link href="web-design-web-development-company-birmingham/web-development">
                <Button>
                  <ButtonText>
                    View our Birmingham Web Development services
                  </ButtonText>
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
              At Obsidian Web Development, we offer the best Web Development
              service in Birmingham. Our focal point is custom-built web
              solutions which utilises the latest technologies to create your
              perfect website that solves your business needs and ensues growth.
            </Description>
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
                    tasks and increase the annual your business generates
                    through our SEO tactics.
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
              Web Developers that deliver quality results
            </Title>
            <Description color="black">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, co
            </Description>
          </HalfWidth>
        </CenterWrapper>
        <CenterWrapper bg="#28282B  ">
          <HalfWidth>
            <Title font="50px" align="center" fontWeight="700" color="#f8bbd0">
              How it works
            </Title>
            <Description color="white" style={{ textAlign: "center" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, co
            </Description>
          </HalfWidth>
          <HalfWidth width="80%">
            <ServicesContainer>
              <Service id="service1">
                <ServiceImgWrapper>
                  <ServiceImg
                    src="/logos/building.svg"
                    alt="In house full stack web development"
                  />
                </ServiceImgWrapper>
                <ServiceTextWrapper>
                  <ServiceTitle>Web Development</ServiceTitle>
                  <ServiceDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </ServiceDescription>
                </ServiceTextWrapper>
              </Service>
              <Service>
                <ServiceImgWrapper>
                  <ServiceImg
                    src="/logos/building.svg"
                    alt="In house full stack web development"
                  />
                </ServiceImgWrapper>
                <ServiceTextWrapper>
                  <ServiceTitle>Web Design</ServiceTitle>
                  <ServiceDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </ServiceDescription>
                </ServiceTextWrapper>
              </Service>
              <Service>
                <ServiceImgWrapper>
                  <ServiceImg
                    src="/logos/building.svg"
                    alt="In house full stack web development"
                  />
                </ServiceImgWrapper>
                <ServiceTextWrapper>
                  <ServiceTitle>SEO</ServiceTitle>
                  <ServiceDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </ServiceDescription>
                </ServiceTextWrapper>
              </Service>
              <Service>
                <ServiceImgWrapper>
                  <ServiceImg
                    src="/logos/building.svg"
                    alt="In house full stack web development"
                  />
                </ServiceImgWrapper>
                <ServiceTextWrapper>
                  <ServiceTitle>CMS Integration</ServiceTitle>
                  <ServiceDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </ServiceDescription>
                </ServiceTextWrapper>
              </Service>
            </ServicesContainer>
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
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, co
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
              How Obsidian Web Development reduced the costs of laborious tasks
              by 50%, increased clients and automated 95% of an insurance
              business.
            </Title>
            <ButtonContainer>
              <Link href="/lchinsure">
                <Button id="caseStudy1">
                  <ButtonText>Explore</ButtonText>
                </Button>
              </Link>
            </ButtonContainer>
          </Grid>
          <Grid
            align="flex-start"
            justify="flex-start"
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
              How Obsidian Web Development improved the SEO of a site, resulting
              in 60% more customers every month
            </Title>
            <ButtonContainer>
              <Link href="/arvTuning">
                <Button>
                  <ButtonText>Explore</ButtonText>
                </Button>
              </Link>
            </ButtonContainer>
          </Grid>
          <Grid
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
              How Obsidian Web Development reduced the time spent on repetitive
              tasks, freeing resources and improving turnover rates by 85%
            </Title>
            <ButtonContainer>
              <Link href="/fcProperties">
                <Button>
                  <ButtonText>Explore</ButtonText>
                </Button>
              </Link>
            </ButtonContainer>
          </Grid>
          <Grid
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
      <ContactUs alt={false} />
      <Footer />
    </>
  );
}
