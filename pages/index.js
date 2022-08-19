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
  SubTtitle,
} from "../styles/components/StickySection/StickySection";
import { useEffect, useState } from "react";
import {
  ContactUs,
  ContactUsContainer,
  ContactUsGrid,
  ContactUsWrapper,
} from "../styles/components/contactUs/contactUs";
import { Footer } from "../styles/components/footer/footer";
import CountupHook from "../styles/components/countUp/countUp";
import { FadeUpChildren, FadeUpContainer } from "../styles/components/stagger";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Image imports
import fiberOptics from "../public/fiber-optics.jpg";
import fcProperties from "../public/fcProperties.avif";
import arvTuning from "../public/arvTuning.avif";
import birmingham from "../public/birmingham.avif";
import altBg from "../public/altBg.avif";
import lchLogo from "../public/lch1.png";
import arvLogo from "../public/arv.png";
import fcLogo from "../public/fc.png";
import Head from "next/head";
import { Slider } from "../styles/components/slideshow/Slider";
import Contact from "./contactUs";
import Link from "next/link";
//Next Head
import slideshowImg1 from "../public/about.jpg";
import slideshowImg2 from "../public/slideshowImg2.avif";
import slideshowImg3 from "../public/slideshowImg3.avif";
import development from "../public/development.avif";
import reactImg from "../public/react.jpg";
//Icons
import { DiReact } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { FcGallery } from "react-icons/fc";
import { FcSalesPerformance } from "react-icons/fc";
import { FcAcceptDatabase } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
export default function Home() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [toggle, setToggle] = useState(true);

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
          content="Obsidian Web Developments, creating bespoke websites and web designs to meet your requirements."
        />
      </Head>
      <Head>
        <meta property="og:title" content="Obsidian Web Developments" />
      </Head>
      <Container>
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
                    <H2 variants={FadeUpChildren}>
                      Building web solutions to meet your business needs and
                      inject growth
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
                      We have a holistic approach to creating web solutions for
                      businesses
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
            <AlignRight
              direction="row"
              justify="space-evenly"
              variants={FadeUpContainer(0)}
              initial="hidden"
              animate="visible"
              key={toggle}
            >
              <InsightsContainer variants={FadeUpChildren}>
                <InsightsWrapper>
                  <H5>Obsidian Web Developments</H5>
                  <H5>11.August.2022</H5>
                </InsightsWrapper>
                <H4>Obsidian Web Developments is launched</H4>
              </InsightsContainer>
            </AlignRight>
          </RightContainer>
        </HomeContainer>

        <VideoContainer>
          {width > 768 ? (
            <Video
              controls={false}
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline
            >
              <source src="/video4.mp4" />
            </Video>
          ) : (
            <FullImage
              src={altBg}
              layout="fill"
              alt="Alternate background image"
            />
          )}
        </VideoContainer>
      </Container>
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
        <CenterWrapper>
          <HalfWidth>
            <Title font="50px" align="center" fontWeight="700">
              What we do
            </Title>
            <Description color="black" align="center">
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
        <SS_ContainerWrapper padding="4rem">
          <Grid align="flex-start" justify="flex-start">
            <FullImageContainer>
              <FullImage
                src={development}
                layout="fill"
                roundleft="true"
                roundright="true"
              />
            </FullImageContainer>
          </Grid>
          <Grid justify="center" align="flex-start" roundright="true">
            <SubTtitle font="50px" align="left" fontWeight="700">
              Web development agency based in Birmingham
            </SubTtitle>
            <Description color="black">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, co
            </Description>
            <Description color="black">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, co
            </Description>{" "}
            <ButtonContainer>
              <Button>
                <ButtonText>Explore</ButtonText>
              </Button>
            </ButtonContainer>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>

      <SS_Container>
        <SS_ContainerWrapper bg="#816885  " padding="4rem">
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
              We understand your industry which help in the exponential growth
              of your business with proven futuristic vision.
            </Description>
          </Grid>
          <Grid align="flex-start" justify="flex-start">
            <ValuesContainer>
              <Value>
                <ValueImgWrapper>
                  <ValueImg src="/logos/building.svg" />
                </ValueImgWrapper>
                <ValueTextWrapper>
                  <ValueTitle>Web Development</ValueTitle>
                  <ValueDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </ValueDescription>
                </ValueTextWrapper>
              </Value>
              <Value>
                <ValueImgWrapper>
                  <ValueImg src="/logos/layers.svg" />
                </ValueImgWrapper>
                <ValueTextWrapper>
                  <ValueTitle>Full stack development</ValueTitle>
                  <ValueDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </ValueDescription>
                </ValueTextWrapper>
              </Value>
              <Value>
                <ValueImgWrapper>
                  <ValueImg src="/logos/browser.svg" />
                </ValueImgWrapper>
                <ValueTextWrapper>
                  <ValueTitle>Web design</ValueTitle>
                  <ValueDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </ValueDescription>
                </ValueTextWrapper>
              </Value>
            </ValuesContainer>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>
      <RowContainer>
        <Row
          bg="none"
          alternate={true}
          drag="x"
          dragConstraints={{ left: 100, right: 100 }}
        >
          <RowChild bg="white" alternate={true}>
            <RowLogo bg="#90CAF9 ">
              <FcGallery
                style={
                  width <= 768
                    ? { fontSize: "40px", color: "#4EC63F" }
                    : { fontSize: "40px", color: "#4EC63F" }
                }
              />
            </RowLogo>
            <RowText>Execptional service and award winning portfolio</RowText>
          </RowChild>
          <RowChild bg="white" alternate={true}>
            <RowLogo bg="#FFFACD">
              <FcBullish
                style={
                  width <= 768
                    ? { fontSize: "40px", color: "#4EC63F" }
                    : { fontSize: "40px", color: "#4EC63F" }
                }
              />
            </RowLogo>
            <RowText>Execptional service and award winning portfolio</RowText>
          </RowChild>
          <RowChild bg="white" alternate={true}>
            <RowLogo bg="#EAFED6 ">
              <FcSalesPerformance
                style={
                  width <= 768
                    ? { fontSize: "40px", color: "#4EC63F" }
                    : { fontSize: "40px", color: "#4EC63F" }
                }
              />
            </RowLogo>
            <RowText>Execptional service and award winning portfolio</RowText>
          </RowChild>
          <RowChild bg="white" alternate={true}>
            <RowLogo bg="	#FEE1D6">
              <FcAcceptDatabase
                style={
                  width <= 768
                    ? { fontSize: "40px", color: "#4EC63F" }
                    : { fontSize: "40px", color: "#4EC63F" }
                }
              />
            </RowLogo>
            <RowText>Execptional service and award winning portfolio</RowText>
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
              What we do
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
          <FullWidthContainer>
            <FullImage
              src={reactImg}
              layout="fill"
              roundleft="true"
              roundright="true"
            />
          </FullWidthContainer>
        </CenterWrapper>
        <CenterWrapper bg="#816885  ">
          <HalfWidth>
            <Title font="50px" align="center" fontWeight="700" color="#f8bbd0">
              What we do
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
          <HalfWidth>
            <ServicesContainer>
              <Service>
                <ServiceImgWrapper>
                  <ServiceImg src="/logos/building.svg" />
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
                  <ServiceImg src="/logos/building.svg" />
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
                  <ServiceImg src="/logos/building.svg" />
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
                  <ServiceImg src="/logos/building.svg" />
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
            </ServicesContainer>
          </HalfWidth>
        </CenterWrapper>
      </Container>
      <SS_Container id="caseStudy1">
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
            <Title font="50px" align="left" color="white" fontWeight="600">
              How Obsidian Web Developments reduced the costs of laborious tasks
              by 50%, increased clients and automated 95% of an insurance
              business.
            </Title>
            <ButtonContainer>
              <Link href="/lchinsure">
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
              How Obsidian Web Developments reduced the time spent on repetitive
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
      <ContactUs alt={false} mobile={true} />
      <Footer />
    </>
  );
}
