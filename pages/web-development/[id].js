import {
  Container,
  HomeContainer,
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
  ServicesContainer,
  Service,
  ServiceImgWrapper,
  ServiceImg,
  ServiceTextWrapper,
  ServiceTitle,
  ServiceDescription,
  RightContainerImage,
  TwoColumnGrid,
  Li,
  ServiceSubText,
  ServicePrice,
  ServiceSubTextSpan,
} from "../../styles/pages/home/home";
import {
  Button,
  ButtonContainer,
  ButtonText,
} from "../../styles/components/Buttons/Button";
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
  FullImageContainer,
  SubTitle,
  DescriptionSpan,
} from "../../styles/components/StickySection/StickySection";
import { useEffect, useState } from "react";
import { ContactUs } from "../../styles/components/contactUs/contactUs";
import { Footer } from "../../styles/components/footer/footer";
import CountupHook from "../../styles/components/countUp/countUp";
import {
  FadeUpChildren,
  FadeUpContainer,
  FAQAnimation,
} from "../../styles/components/stagger";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Image imports
import fiberOptics from "../../public/fiber-optics.webp";
import fcProperties from "../../public/fcProperties.avif";
import me from "../../public/awsMe.avif";
import design from "../../public/web-development-3.avif";
import Head from "next/head";

import Link from "next/link";
//Next Slideshow images

import development from "../../public/development.avif";
import reactImg from "../../public/react.webp";
import arvTuning from "../../public/arvTuning.avif";
//Icons
import { DiReact } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { FcGallery } from "react-icons/fc";
import { FcSalesPerformance } from "react-icons/fc";
import { FcAcceptDatabase } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";

import dynamic from "next/dynamic";

const Xarrow = dynamic(() => import("react-xarrows"), {
  ssr: false,
});
//Config server

//Bg
import bgImage from "../../public/web-development-1.avif";
import bgImage2 from "../../public/web-development-2.avif";
import { FAQComponent } from "../../styles/components/faq/faq";
import { useReducer } from "react";
import { server } from "../../config";

const faqState = {
  item1: false,
  item2: false,
  item3: false,
  item4: false,
  item5: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "show":
      if (action.payload === "item1") {
        return { ...state, item1: !state.item1 };
      } else if (action.payload === "item2") {
        return { ...state, item2: !state.item2 };
      } else if (action.payload === "item3") {
        return { ...state, item3: !state.item3 };
      } else if (action.payload === "item4") {
        return { ...state, item4: !state.item4 };
      } else {
        return { ...state, item5: !state.item5 };
      }

    case "notShow":
      console.log(state);

      return { ...state, item1: false };
    default:
      throw new Error();
  }
};

//Get static props
export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/landingPage`);
  const data = await res.json();
  const paths = data.map((map) => {
    return {
      params: { id: map.location },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};
export async function getStaticProps(context) {
  const id = context.params.id;
  // Call an external API endpoint to get posts
  const res = await fetch(`http://localhost:3000/api/landingPage`);
  const data = await res.json();

  const found = data.find((element) => element.location == id);
  return {
    props: {
      data: found,
    },
  };
}
export default function LandinPageWebDevelopment({ data }) {
  console.log(data);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [toggle, setToggle] = useState(true);
  //Reducer
  const [state, dispatch] = useReducer(reducer, faqState);
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
  console.log("refresh");

  return (
    <>
      <Head>
        <title>
          #1 {data.location} Web Development Specialists | Obsidian Web
          Developments
        </title>
        <meta
          name="description"
          content={`Our  Web Development strategies in ${data.location} will ensure that you have the most optimal website that meets your business requirements. We have 10+ years commercially in web development and specifically ${data.keyword}, so rest assured you can count on us to build the most optimal complete business solution for you! `}
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
                <H3>{data.keyword}</H3>
                {toggle ? (
                  <motion.div
                    variants={FadeUpContainer(0)}
                    initial="hidden"
                    animate="visible"
                    key={toggle}
                  >
                    <H2 variants={FadeUpChildren}>
                      #1 {data.location} Web Development agency
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
                      #1 Web Design and Development {data.location}
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
                  alt="Obsidian Web Developments with a client"
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
              {data.keyword}
            </Title>
            <Description color="black" align="center">
              Obsidian Web Developments is an award winning
              <DescriptionSpan> Web development</DescriptionSpan> and{" "}
              <DescriptionSpan>
                Web Design Agency based in {data.location}
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
                src={design}
                layout="fill"
                roundleft="true"
                roundright="true"
                alt="Web Development logo"
                priority={true}
              />
            </FullImageContainer>
          </Grid>
          <Grid justify="center" align="flex-start" roundright="true">
            <SubTitle font="50px" align="left" fontWeight="700">
              Bespoke Web Development
            </SubTitle>
            <Description color="black">
              Most web development agencies in {data.location} will create a
              website for you that is
              <DescriptionSpan>
                {" "}
                slow, unneccesarily expensive, has poor SEO
              </DescriptionSpan>{" "}
              and uses a{" "}
              <DescriptionSpan>pre-purchased template</DescriptionSpan>. At
              Obsidian Web Developments, we pride ourselves on creating
              <DescriptionSpan> custom-built websites</DescriptionSpan> from the
              ground up that meet your requirements and has a unique web design
              which you are happy with. We also ensure that your website is
              <DescriptionSpan>
                {" "}
                fast, responsive on mobile devices
              </DescriptionSpan>{" "}
              and has the best <DescriptionSpan>SEO</DescriptionSpan> so your
              website ranks high on Google, resulting in more customers.
            </Description>
            <Description color="black">
              At Obsidian Web Developments, we create{" "}
              <DescriptionSpan>
                solutions for businesses, ensuing sucess, rapid growth and
                scalabillity
              </DescriptionSpan>
              . Our Web Development services are bespoke meaning we don't use
              any templates and our project are built from the ground up for
              every client.
            </Description>
            <ButtonContainer>
              <Button>
                <ButtonText>View {data.keyword} pricing</ButtonText>
              </Button>
            </ButtonContainer>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>
      <SS_Container>
        <SS_ContainerWrapper bg="#28282B  " padding="4rem">
          <Grid justify="center" align="flex-start" roundright="true">
            <SubTitle font="50px" align="left" fontWeight="700" color="#F8BBD0">
              Web design & Web Development industries
            </SubTitle>
            <Description color="white">
              We create websites for every industry. See your industry below?
              We've probably created a website for it
            </Description>
            <TwoColumnGrid>
              <CenterDiv>
                <Li color="white">Architecture</Li>
                <Li color="white">Business</Li>
                <Li color="white">Beauty</Li>
                <Li color="white">Blog</Li>
                <Li color="white">Consulting</Li>
                <Li color="white">Construction</Li>
              </CenterDiv>
              <CenterDiv>
                <Li color="white">Dental</Li>
                <Li color="white">Vehicle Insurance</Li>
                <Li color="white">Property Management</Li>
                <Li color="white">Real Estate</Li>
                <Li color="white">Restaurants</Li>
                <Li color="white">Travel</Li>
              </CenterDiv>
            </TwoColumnGrid>
          </Grid>
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
          <RowChild id="technologies">
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
      <Xarrow
        start="technologies" //can be react ref
        end="bespoke" //or an id
        startAnchor="right"
      />
      <Container>
        <CenterWrapper justify="flex-start" align="flex-start">
          <HalfWidth>
            <Title
              font="50px"
              align="left"
              fontWeight="700"
              justify="flex-start"
              id="bespoke"
            >
              Bespoke, in-house coded websites, tailored to meet your
              requirements
            </Title>
            <Description color="black">
              At Obsidian Web Developments, we don't use templates. Templates
              are boring, slow and cluttered with junk that is poor for SEO,
              performance and can reduce the likelihood of your website ranking
              high for certain keywords on Google. With our approach to
              custom-built websites, we ensure that your website is optimized
              for maximum performance, efficency and scalabillity for future
              updates to your website. Interested? View our pricing below
            </Description>
          </HalfWidth>
        </CenterWrapper>
        <CenterWrapper bg="#28282B  ">
          <HalfWidth>
            <Title font="50px" align="center" fontWeight="700" color="#f8bbd0">
              {data.location} front-end and back-end development
            </Title>
            <Description color="white" style={{ textAlign: "center" }}>
              At Obsidian Web Developments, we create complete business
              solutions for clients no matter the complexity of the project. We
              offer front-end and back-end development, think of server and
              website development.
            </Description>
          </HalfWidth>
          <HalfWidth width="80%">
            <ServicesContainer>
              <Service id="service1">
                <ServiceImgWrapper>
                  <ServiceImg
                    src="/logos/building.svg"
                    alt="In house full stack Web Development"
                  />
                </ServiceImgWrapper>
                <ServiceTextWrapper>
                  <ServiceTitle>Front-end Web Development</ServiceTitle>
                  <ServiceDescription>
                    We offer {data.location}'s #1 front-end development
                    services. We aim to create a website that matches your
                    expectation, performs well, has great SEO and has a
                    beautiful design. Our front-end services have proven to be
                    successful for various clients, which can be seen on our
                    case studies.
                  </ServiceDescription>
                </ServiceTextWrapper>
              </Service>
              <Service>
                <ServiceImgWrapper>
                  <ServiceImg
                    src="/logos/building.svg"
                    alt="In house full stack Web Development"
                  />
                </ServiceImgWrapper>
                <ServiceTextWrapper>
                  <ServiceTitle>Back-end Web Development</ServiceTitle>
                  <ServiceDescription>
                    Our back-end development services for businesses who require
                    complex functionallity inlcuded in thier complete business
                    solution. This service is mainly used for various
                    requirements such as contact forms, dashboards, content
                    management etc..
                  </ServiceDescription>
                </ServiceTextWrapper>
              </Service>
              <Service>
                <ServiceImgWrapper>
                  <ServiceImg
                    src="/logos/building.svg"
                    alt="In house full stack Web Development"
                  />
                </ServiceImgWrapper>
                <ServiceTextWrapper>
                  <ServiceTitle>Custom-built to meet requirements</ServiceTitle>
                  <ServiceDescription>
                    All of our solutions are custom built per project. We don't
                    use templated as we pride ourselves on speed, SEO and fast
                    build times. Which is why we create all of our projects from
                    the ground up so we ensure that the customer recieves a
                    solution that is blazing-fast, has great SEO and is mobile
                    responsive
                  </ServiceDescription>
                </ServiceTextWrapper>
              </Service>
              <Service>
                <ServiceImgWrapper>
                  <ServiceImg
                    src="/logos/building.svg"
                    alt="In house full stack Web Development"
                  />
                </ServiceImgWrapper>
                <ServiceTextWrapper>
                  <ServiceTitle>Tested rigorously before handover</ServiceTitle>
                  <ServiceDescription>
                    All of our web solutions are tested rigorously before the
                    handover the the client. This ensures that the product you
                    are recivieving performs as expected and meets all the
                    requirements that you have outline and is robust and secure
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
              View our Web Development case studies below
            </Title>
            <Description color="black" style={{ textAlign: "center" }}>
              Interested in the work we do? We build{" "}
              <DescriptionSpan>complete business solutions</DescriptionSpan>{" "}
              that add real value to a business. Interested in automation or
              dashboards for your employees? <br />
              <DescriptionSpan> View our work below</DescriptionSpan>
            </Description>
          </HalfWidth>
        </CenterWrapper>
      </Container>
      <SS_Container>
        <SS_ContainerWrapper caseStudy="true" bg="	#28282B ">
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
              <Link href="/web-development-{data.location}-web-design-{data.location}/lchinsure">
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
        <SS_ContainerWrapper caseStudy="true" bg="	#28282B ">
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
              <Link href="/web-development-{data.location}-web-design-{data.location}/arvTuning">
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
        <SS_ContainerWrapper caseStudy="true" bg="	#28282B ">
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
              <Link href="/web-development-{data.location}-web-design-{data.location}/fcProperties">
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
      <Container>
        <CenterWrapper>
          <HalfWidth>
            <Title font="50px" align="center" fontWeight="700">
              Our Web Development pricing
            </Title>
            <Description color="black" style={{ textAlign: "center" }}>
              Interested in our web development services? <br />
              View our bundles below, and pick the most suitable one for you
            </Description>
          </HalfWidth>
          <HalfWidth width="80%">
            <ServicesContainer>
              <Service>
                <ServiceTextWrapper>
                  <ServiceTitle style={{ textAlign: "center" }}>
                    Bronze
                  </ServiceTitle>
                  <ServiceSubText>
                    We will
                    <ServiceSubTextSpan> custom-build</ServiceSubTextSpan> a
                    website based on your samples provided, direction and brand
                    guidlines.
                    <ServiceSubTextSpan>Front-end only</ServiceSubTextSpan>
                  </ServiceSubText>
                  <ServiceSubText
                    style={{ fontWeight: "800", textAlign: "left" }}
                  >
                    Website package details
                  </ServiceSubText>
                  <CenterDiv>
                    <Li color="black">Custom-built front-end template</Li>
                    <Li color="black">Customization of template</Li>
                    <Li color="black">Mobile responsive & optimization</Li>
                    <Li color="black">Google maps</Li>
                    <Li color="black">Contact forms(as many as you like)</Li>
                    <Li color="black">
                      Website hosted and domain setup included
                    </Li>
                    <ServicePrice>£2000</ServicePrice>
                  </CenterDiv>
                </ServiceTextWrapper>
              </Service>
              <Service>
                <ServiceTextWrapper>
                  <ServiceTitle style={{ textAlign: "center" }}>
                    Silver
                  </ServiceTitle>
                  <ServiceSubText>
                    We will custom-build a website based on your samples
                    provided, direction, brand identity and project
                    requirements.
                    <ServiceSubTextSpan>
                      Front-end and back-end included
                    </ServiceSubTextSpan>
                  </ServiceSubText>
                  <ServiceSubText
                    style={{ fontWeight: "800", textAlign: "left" }}
                  >
                    Website package details
                  </ServiceSubText>
                  <CenterDiv>
                    <Li color="black">Custom-built front-end template</Li>
                    <Li color="black">Customization of template</Li>
                    <Li color="black">Mobile responsive & optimization</Li>
                    <Li color="black">Google maps</Li>
                    <Li color="black">Contact forms(as many as you like)</Li>
                    <Li color="black">Google analytics</Li>
                    <Li color="black">404 redirect</Li>
                    <Li color="black">XML sitemap</Li>
                    <Li color="black">
                      Back-end development(server and database for complex
                      requirements)
                    </Li>
                    <Li color="black">Test driven development</Li>
                    <Li color="black">
                      Website and server hosted and domain setup included
                    </Li>
                    <ServicePrice>£3000</ServicePrice>
                  </CenterDiv>
                </ServiceTextWrapper>
              </Service>
              <Service>
                <ServiceTextWrapper>
                  <ServiceTitle style={{ textAlign: "center" }}>
                    Gold
                  </ServiceTitle>
                  <ServiceSubText>
                    We will custom-build a website from scratch with mockups on
                    a development server in order to meet your complex project
                    requirements.
                    <ServiceSubTextSpan>
                      Front-end and back-end included
                    </ServiceSubTextSpan>
                  </ServiceSubText>
                  <ServiceSubText
                    style={{ fontWeight: "800", textAlign: "left" }}
                  >
                    Website package details
                  </ServiceSubText>
                  <CenterDiv>
                    <Li color="black">Customized front-end </Li>

                    <Li color="black">Mobile responsive & optimization</Li>
                    <Li color="black">Google maps</Li>
                    <Li color="black">Contact forms(as many as you like)</Li>
                    <Li color="black">Google analytics</Li>
                    <Li color="black">404 redirect</Li>
                    <Li color="black">XML sitemap</Li>
                    <Li color="black">
                      Back-end development(server and database for complex
                      requirements)
                    </Li>
                    <Li color="black">
                      Website and server hosted and domain setup included
                    </Li>
                    <Li color="black">1 month of maintanence</Li>
                    <Li color="black">Complex front-end animations</Li>
                    <Li color="black">
                      Optimisation for maximum performance and SEO
                    </Li>
                    <Li color="black"> </Li>
                    <ServicePrice>£4000</ServicePrice>
                  </CenterDiv>
                </ServiceTextWrapper>
              </Service>
            </ServicesContainer>

            <ButtonContainer
              justify="center"
              align="center"
              style={{ padding: "1rem" }}
            >
              <Button>
                <ButtonText>Request Web Development consultation</ButtonText>
              </Button>
            </ButtonContainer>
          </HalfWidth>
        </CenterWrapper>
      </Container>
      <Container>
        <CenterWrapper>
          <HalfWidth>
            <Title font="50px" align="center" fontWeight="700">
              FREQUENTLY ASKED QUESTIONS
            </Title>
            <Description color="black" style={{ textAlign: "center" }}>
              Here are some of our most frequently answered Web Development
              questions and answers.
            </Description>
          </HalfWidth>
        </CenterWrapper>
        <FAQComponent state={state} dispatch={dispatch} />
      </Container>
      <ContactUs alt={false} mobile={true} />
      <Footer />
    </>
  );
}
