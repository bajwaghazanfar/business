import {
  Arrow,
  ArrowContainer,
  ArrowWrapper,
} from "../styles/components/arrow/arrow";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
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
} from "../styles/pages/home/home";
import { Button, ButtonText } from "../styles/components/Buttons/Button";
export default function Home() {
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
        <ArrowContainer>
          <ArrowWrapper>
            {" "}
            <Arrow />
          </ArrowWrapper>
        </ArrowContainer>
        <VideoContainer>
          <Video controls={false} autoPlay={true} muted={true} loop={true}>
            <source src="/video2.mp4" />
          </Video>
        </VideoContainer>
      </Container>
    </>
  );
}
