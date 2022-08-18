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
import slideshowImg1 from "../public/slideshowImg1.avif";
import slideshowImg2 from "../public/slideshowImg2.avif";
import slideshowImg3 from "../public/slideshowImg3.avif";
import development from "../public/development.avif";
//Icons
import { DiReact } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
export default function Home() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [toggle, setToggle] = useState(true);

  const sliderData = [
    {
      title: "FC Properties",
      subHeading: "compliance",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ",
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
                  ? { fontSize: "40px" }
                  : { fontSize: "80px", color: "black" }
              }
            />
          </RowChild>
          <RowChild>
            <DiNodejs
              style={
                width <= 768
                  ? { fontSize: "40px" }
                  : { fontSize: "80px", color: "black" }
              }
            />
          </RowChild>
          <RowChild>
            <DiVisualstudio
              style={
                width <= 768
                  ? { fontSize: "40px" }
                  : { fontSize: "80px", color: "black" }
              }
            />
          </RowChild>
          <RowChild>
            <GrGraphQl
              style={
                width <= 768
                  ? { fontSize: "40px" }
                  : { fontSize: "80px", color: "black" }
              }
            />
          </RowChild>
        </Row>
      </RowContainer>
      <SS_Container top="100px">
        <SS_ContainerWrapper>
          <StickyGrid sticky="sticky">
            <StickyContainer sticky="sticky">
              <Title align="left" sticky="sticky" font="60px" fontWeight="600">
                We create websites that meet your requirements and solve your
                problems
              </Title>
              <ButtonContainer>
                <Link href="/about">
                  <Button>
                    <ButtonText>View websites</ButtonText>
                  </Button>
                </Link>
              </ButtonContainer>
            </StickyContainer>
          </StickyGrid>
          <Grid>
            <CenterDiv gap="0px">
              <H3 color="black">
                The optimum between standardization and customization.
              </H3>
              <Description>
                At Purevirtual AG, technological competence meets industry
                experience - implemented by an experienced team with a lot of
                expertise and commitment. We believe that a good IT solution
                must function as silently as possible, even with complex
                requirements. Companies should concentrate on their operational
                core business and regard the IT infrastructure as a working
                tool. Our top priority is to promote your entrepreneurial
                success. To this end, we develop IT solutions whose individual
                component promotes the differentiation factors of your company,
                while proven ways of standardization ensure efficient and silent
                operation.
              </Description>
              <H3 color="black">Customers</H3>
              <CustomersWrapper>
                <Customers>
                  <CustomerLogo src={lchLogo} alt="LCH Insure logo" />
                </Customers>
                <Customers>
                  <CustomerLogo src={arvLogo} alt="ARV Tuning logo" />
                </Customers>

                <Customers>
                  <CustomerLogo src={fcLogo} alt="FC Properties logo" />
                </Customers>
              </CustomersWrapper>
            </CenterDiv>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>

      <SS_Container top="100px">
        <SS_ContainerWrapper bg="black" padding="4rem">
          <Grid align="flex-start" justify="flex-start">
            <FullImageContainer>
              <FullImage
                src={development}
                layout="fill"
                roundLeft="true"
                roundRight="true"
              />
            </FullImageContainer>
          </Grid>
          <Grid justify="center" align="flex-start" roundRight="true">
            <Title font="50px" align="left" fontWeight="700" color="#F8BBD0">
              Web development agency based in Birmingham
            </Title>
            <Description color="white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, co
            </Description>
            <Description color="white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, co
            </Description>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>
      <SS_Container>
        <SS_ContainerWrapper padding="4rem">
          <Grid justify="center" align="flex-start" roundLeft="true">
            <Title font="50px" align="left" fontWeight="700">
              Web development agency based in Birmingham
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
            <Description color="black">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, co
            </Description>
          </Grid>
          <Grid align="flex-start" justify="flex-start" roundRight="true">
            <FullImageContainer>
              <FullImage
                src={birmingham}
                layout="fill"
                roundLeft="true"
                roundRight="true"
              />
            </FullImageContainer>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>

      <SS_Container>
        <SS_ContainerWrapper bg="black " padding="4rem">
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
          <Grid align="flex-start" justify="flex-start" bg="black ">
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

      <SS_Container>
        <SS_ContainerWrapper reverseMobile="true" padding="4rem">
          <Grid align="flex-start" justify="flex-start">
            <ValuesContainer>
              <Value alt={true}>
                <ValueImgWrapper>
                  <ValueImg src="/logos/backend.svg" />
                </ValueImgWrapper>
                <ValueTextWrapper>
                  <ValueTitle alt={true}>Back-end systems</ValueTitle>
                  <ValueDescription alt={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </ValueDescription>
                </ValueTextWrapper>
              </Value>
              <Value alt={true}>
                <ValueImgWrapper>
                  <ValueImg src="/logos/frontend.svg" />
                </ValueImgWrapper>
                <ValueTextWrapper>
                  <ValueTitle alt={true}>Front-end and CMS</ValueTitle>
                  <ValueDescription alt={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </ValueDescription>
                </ValueTextWrapper>
              </Value>
              <Value alt={true}>
                <ValueImgWrapper>
                  <ValueImg src="/logos/test.svg" />
                </ValueImgWrapper>
                <ValueTextWrapper>
                  <ValueTitle alt={true}>Test driven development</ValueTitle>
                  <ValueDescription alt={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </ValueDescription>
                </ValueTextWrapper>
              </Value>
              <Value alt={true}>
                <ValueImgWrapper>
                  <ValueImg src="/logos/agile.svg" />
                </ValueImgWrapper>
                <ValueTextWrapper>
                  <ValueTitle alt={true}>Agile</ValueTitle>
                  <ValueDescription alt={true}>
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
          <Grid
            justify="center"
            align="flex-start"
            bg="black "
            roundLeft="true"
            roundRight="true"
          >
            <Title
              font="50px"
              align="left"
              fontWeight="700"
              color="#F8BBD0"
              style={{ margin: "0px" }}
            >
              Custom requirements delivered by premium web development services
            </Title>
            <Description color="white" style={{ margin: "0px" }}>
              We understand your industry which help in the exponential growth
              of your business with proven futuristic vision.
            </Description>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>

      <SS_Container id="caseStudy1">
        <SS_ContainerWrapper caseStudy="true">
          <Grid
            justify="flex-start"
            align="flex-start"
            roundLeft="true"
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
                roundRight="true"
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
            roundLeft="true"
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
                roundRight="true"
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
            roundLeft="true"
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
                roundRight="true"
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
