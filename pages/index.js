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
} from "../styles/components/StickySection/StickySection";
import { useEffect, useState } from "react";
import {
  ContactUsContainer,
  ContactUsGrid,
  ContactUsWrapper,
} from "../styles/components/contactUs/contactUs";
import { Footer } from "../styles/components/footer/footer";

export default function Home() {
  const [height, setHeight] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.document.body.scrollHeight);
    }
  }, []);

  return (
    <>
      <Container>
        <HomeContainer>
          <LeftContainer>
            <MainWrapper>
              <H2Wrapper>
                <H3>M.B Developments</H3>
                <H2>
                  <H2Span>Building</H2Span>digital solution to meet
                  <H2Span> your business needs</H2Span>
                  and inject growth
                </H2>
                <Button>
                  <ButtonText>Explore</ButtonText>
                </Button>
              </H2Wrapper>
            </MainWrapper>
          </LeftContainer>
        </HomeContainer>
        <ArrowContainer height={`${height}px`}>
          <ArrowWrapper>
            {" "}
            <Arrow height={`${height}px`} />
          </ArrowWrapper>
        </ArrowContainer>
        <VideoContainer>
          <Video controls={false} autoPlay={true} muted={true} loop={true}>
            <source src="/video2.mp4" />
          </Video>
        </VideoContainer>
      </Container>
      <SS_Container>
        <SS_ContainerWrapper>
          <StickyGrid>
            <Title>Take the leap to the top </Title>
            <Button>
              <ButtonText>Explore</ButtonText>
            </Button>
          </StickyGrid>
          <Grid>
            <CenterDiv>
              <Description color="#525252" style={{ fontWeight: "700" }}>
                The optimum between standardization and customization.
              </Description>
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
              <Description color="#525252" style={{ fontWeight: "700" }}>
                Customers
              </Description>
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
            <CenterDiv height="100%" gap="30px">
              <Image src="https://images.unsplash.com/photo-1568048773966-a18abfbffbfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80" />
            </CenterDiv>
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
              {" "}
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
