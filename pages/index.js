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
  Image,
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
export default function Home() {
  const [height, setHeight] = useState(null);
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
          <Video controls={false} autoPlay={true} muted={true} loop={true}>
            <source src="/video4.mp4" />
          </Video>
        </VideoContainer>
      </Container>
      <SS_Container>
        <SS_ContainerWrapper>
          <StickyGrid sticky="sticky">
            <StickyContainer sticky="sticky">
              <Title align="left" sticky="sticky" font="70px">
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
                  <CustomerLogo src="/lch1.png" />
                </Customers>
                <Customers>
                  <CustomerLogo src="/arv.png" />
                </Customers>
                <Customers>
                  <CustomerLogo src="/bheard.png" />
                </Customers>
                <Customers>
                  <CustomerLogo src="/fc.png" width="60%" />
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
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
            <Title color="white" font="70px" align="left">
              How MB Developments reduced the costs of laborious tasks by 50%,
              increased clients and automated 95% of an insurance business.
            </Title>
            <Button>
              <ButtonText>Explore</ButtonText>
            </Button>
          </Grid>
          <Grid align="flex-start" justify="flex-start" padding="0rem">
            <Image src="/fiber-optics.jpg" />
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>
      <SS_Container>
        <SS_ContainerWrapper>
          <Grid justify="flex-start" align="flex-start" padding="2rem">
            <Description style={{ fontWeight: "700" }}>
              Case Study/Arv Tuning
            </Description>
            <Title font="70px" align="left">
              How MB Developments reduced the costs of laborious tasks by 50%,
              increased clients and automated 95% of an insurance business.
            </Title>
            <Button>
              <ButtonText>Explore</ButtonText>
            </Button>
          </Grid>
          <StickyGrid>
            <Image src="https://images.unsplash.com/photo-1568048773966-a18abfbffbfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80" />
          </StickyGrid>
        </SS_ContainerWrapper>
      </SS_Container>
      <SS_Container>
        <SS_ContainerWrapper bg="black">
          <Grid justify="flex-start" align="flex-start" padding="2rem">
            <Description style={{ fontWeight: "700" }}>
              Case Study/LCH Insure
            </Description>
            <Title color="white" font="70px" align="left">
              How MB Developments reduced the costs of laborious tasks by 50%,
              increased clients and automated 95% of an insurance business.
            </Title>
            <Button>
              <ButtonText>Explore</ButtonText>
            </Button>
          </Grid>
          <Grid align="flex-start" justify="flex-start" padding="0rem">
            <Image src="https://images.unsplash.com/photo-1527245240659-ccf507abd66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=809&q=80" />
          </Grid>
        </SS_ContainerWrapper>
      </SS_Container>
      <ContactUsContainer>
        <ContactUsWrapper>
          <ContactUsGrid>
            <Description align="center">
              Arrange a free consultation
            </Description>
            <Title font="70px" align="center" fontWeight="500">
              Arrange your non-binding, free inital consulation now
            </Title>
            <Button>
              <ButtonText>Arrange a conversation</ButtonText>
            </Button>
          </ContactUsGrid>
          <ContactUsGrid padding="0rem">
            <Image src="https://www.purevirtual.com/wp-content/uploads/2021/01/contact-us.jpg" />
          </ContactUsGrid>
        </ContactUsWrapper>
      </ContactUsContainer>
      <Footer />
    </>
  );
}
