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
} from "../styles/pages/home/home";
import { Button, ButtonText } from "../styles/components/Buttons/Button";
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
} from "../styles/components/StickySection/StickySection";
import { useEffect, useState } from "react";
import {
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
import contactUs from "../public/contactUs.jpg";
import altBg from "../public/altBg.avif";
import lchLogo from "../public/lch1.png";
import arvLogo from "../public/arv.png";
import fcLogo from "../public/fc.png";
export default function Home() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [toggle, setToggle] = useState(true);
  const titleArray = [
    {
      title:
        "Building digital solutions to meet your business needs and inject growth ",
    },
    {
      title:
        "We have a holistic approach to creating digital solutions for businesses",
    },
  ];

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
      <Container>
        <HomeContainer>
          <LeftContainer>
            <MainWrapper>
              <H2Wrapper>
                <H3>M.B Developments</H3>
                {toggle ? (
                  <motion.div
                    variants={FadeUpContainer(0)}
                    initial="hidden"
                    animate="visible"
                    key={toggle}
                  >
                    <H2 variants={FadeUpChildren}>
                      Building digital solutions to meet your business needs and
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
                      We have a holistic approach to creating digital solutions
                      for businesses
                    </H2>
                  </motion.div>
                )}
              </H2Wrapper>
              <AlignLeft>
                <H4>{toggle ? 0 : 1}</H4>
                <LineContainer
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
                  <H5>MB Developments</H5>
                  <H5>11.August.2022</H5>
                </InsightsWrapper>
                <H4>MB Developments is launched</H4>
              </InsightsContainer>
            </AlignRight>
          </RightContainer>
        </HomeContainer>
        <ArrowContainer height={`${height}px`}>
          <ArrowWrapper>
            <Arrow height={`${height}px`} />
          </ArrowWrapper>
        </ArrowContainer>
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
            <FullImage src={altBg} layout="fill" />
          )}
        </VideoContainer>
      </Container>
      <SS_Container>
        <SS_ContainerWrapper>
          <StickyGrid sticky="sticky">
            <StickyContainer sticky="sticky">
              <Title align="left" sticky="sticky" font="60px">
                What we do best
              </Title>
              <Button>
                <ButtonText>Explore</ButtonText>
              </Button>
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
                  <CustomerLogo src={lchLogo} />
                </Customers>
                <Customers>
                  <CustomerLogo src={arvLogo} />
                </Customers>

                <Customers>
                  <CustomerLogo src={fcLogo} />
                </Customers>
              </CustomersWrapper>
            </CenterDiv>

            <CenterDiv gap="0px">
              <H3 color="black"> The services we provide</H3>
              <ValuesContainer>
                <Value>
                  <ValueImgWrapper>
                    <ValueImg src="/logos/building.svg" />
                  </ValueImgWrapper>
                  <ValueTextWrapper>
                    <ValueTitle>Web Development</ValueTitle>
                    <ValueDescription>
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
                    </ValueDescription>
                  </ValueTextWrapper>
                </Value>
                <Value>
                  <ValueImgWrapper>
                    <ValueImg src="/logos/phone-call.svg" />
                  </ValueImgWrapper>
                  <ValueTextWrapper>
                    <ValueTitle>Web design</ValueTitle>
                    <ValueDescription>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </ValueDescription>
                  </ValueTextWrapper>
                </Value>
              </ValuesContainer>
            </CenterDiv>
            <FrameworkContainer ref={ref}>
              {inView ? (
                <>
                  <Framework>
                    <CountupHook
                      end={100}
                      id="counter1"
                      description="Change cases"
                    />
                  </Framework>
                  <Framework>
                    <CountupHook
                      end={10000}
                      id="counter2"
                      description="Lines of code"
                    />
                  </Framework>
                  <Framework>
                    <CountupHook end={4} id="counter3" description="Clients" />
                  </Framework>
                  <Framework>
                    <CountupHook end={100} id="counter4" description="Effort" />
                  </Framework>
                </>
              ) : (
                <></>
              )}
            </FrameworkContainer>
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>

      <SS_Container>
        <SS_ContainerWrapper bg="black">
          <Grid justify="flex-start" align="flex-start" padding="2rem">
            <Description style={{ fontWeight: "700" }}>
              Case Study/LCH Insure
            </Description>
            <Title color="white" font="60px" align="left">
              How MB Developments reduced the costs of laborious tasks by 50%,
              increased clients and automated 95% of an insurance business.
            </Title>
            <Button>
              <ButtonText>Explore</ButtonText>
            </Button>
          </Grid>
          <Grid align="flex-start" justify="flex-start" padding="0rem">
            <FullImage src={fiberOptics} />
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>
      <SS_Container>
        <SS_ContainerWrapper>
          <Grid justify="flex-start" align="flex-start" padding="2rem">
            <Description style={{ fontWeight: "700" }}>
              Case Study/Arv Tuning
            </Description>
            <Title font="60px" align="left">
              How MB Developments reduced the costs of laborious tasks by 50%,
              increased clients and automated 95% of an insurance business.
            </Title>
            <Button>
              <ButtonText>Explore</ButtonText>
            </Button>
          </Grid>
          <StickyGrid>
            <FullImage src={arvTuning} />
          </StickyGrid>
        </SS_ContainerWrapper>
      </SS_Container>
      <SS_Container>
        <SS_ContainerWrapper bg="black">
          <Grid justify="flex-start" align="flex-start" padding="2rem">
            <Description style={{ fontWeight: "700" }}>
              Case Study/LCH Insure
            </Description>
            <Title color="white" font="60px" align="left">
              How MB Developments reduced the costs of laborious tasks by 50%,
              increased clients and automated 95% of an insurance business.
            </Title>
            <Button>
              <ButtonText>Explore</ButtonText>
            </Button>
          </Grid>
          <Grid align="flex-start" justify="flex-start" padding="0rem">
            <FullImage src={fcProperties} />
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>
      <ContactUsContainer>
        <ContactUsWrapper>
          <ContactUsGrid>
            <Description align="center">
              Arrange a free consultation
            </Description>
            <Title font="60px" align="center" fontWeight="500">
              Arrange your non-binding, free inital consulation now
            </Title>
            <Button>
              <ButtonText>Arrange a conversation</ButtonText>
            </Button>
          </ContactUsGrid>
          <ContactUsGrid padding="0rem">
            <FullImage src={contactUs} layout="fill" />
          </ContactUsGrid>
        </ContactUsWrapper>
      </ContactUsContainer>
      <Footer />
    </>
  );
}
