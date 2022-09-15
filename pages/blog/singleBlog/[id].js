import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import {
  Category,
  CenterAlign,
  FullImage,
  FullImageContainer,
  Subtitle,
  Title,
  Wrapper,
  Container,
  LeftAlign,
  HalfWidth,
  BlogImage,
  H1,
  H2,
  H3,
  H4,
  P,
  HR,
  FullWidth,
  Figcaption,
  CaptionBackground,
  NewsletterContainer,
  InputContainer,
  Input,
  Button,
  ButtonText,
} from "../../../styles/pages/blogPage/blogPage";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Footer } from "../../../styles/components/footer/footer";

export default function allBlogs({ data }) {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [toggle, setToggle] = useState(true);

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

  return (
    <>
      {data.data.attributes != null ? (
        <>
          <Head>
            <title>{data.data.attributes.Title}</title>
            <meta name="description" content={data.data.attributes.Subtitle} />
          </Head>
          <Head>
            <meta
              property="og:title"
              content="Obsidian Web Developments Blog"
            />
          </Head>
          <Container>
            <Wrapper>
              <CenterAlign>
                <Category>
                  {data.data.attributes.category.data.attributes.CategoryName}
                </Category>
                <Title>{data.data.attributes.Title}</Title>
                <HalfWidth>
                  <Subtitle>{data.data.attributes.Subtitle}</Subtitle>
                </HalfWidth>
                <FullImageContainer>
                  <FullImage
                    src={data.data.attributes.BlogImage.data.attributes.url}
                  />
                </FullImageContainer>
              </CenterAlign>
            </Wrapper>
          </Container>
          <Container>
            <Wrapper>
              <LeftAlign>
                <FullWidth>
                  <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </P>
                  <HR></HR>
                </FullWidth>
                {ReactHtmlParser(data.data.attributes.Description, {
                  transform: (node, index) => {
                    console.log(node.name);
                    if (node.type === "tag" && node.name === "img") {
                      const props = node.attribs;

                      return <BlogImage {...props} />;
                    }
                    if (node.type === "tag" && node.name === "h1") {
                      const data = node.children;
                      return (
                        <>
                          {data.map((map) => (
                            <>
                              <H1>{map.data}</H1>
                            </>
                          ))}
                        </>
                      );
                    }
                    if (node.type === "tag" && node.name === "h2") {
                      const data = node.children;
                      return (
                        <>
                          {data.map((map) => (
                            <>
                              <H2>{map.data}</H2>
                            </>
                          ))}
                        </>
                      );
                    }
                    if (node.type === "tag" && node.name === "h3") {
                      const data = node.children;
                      return (
                        <>
                          {data.map((map) => (
                            <>
                              <H3>{map.data}</H3>
                            </>
                          ))}
                        </>
                      );
                    }
                    if (node.type === "tag" && node.name === "h4") {
                      const data = node.children;
                      return (
                        <>
                          {data.map((map) => (
                            <>
                              <H4>{map.data}</H4>
                            </>
                          ))}
                        </>
                      );
                    }
                    if (node.type === "tag" && node.name === "p") {
                      const data = node.children;
                      return (
                        <>
                          {data.map((map) => (
                            <>
                              <P>{map.data}</P>
                            </>
                          ))}
                        </>
                      );
                    }
                    if (node.type === "tag" && node.name === "figcaption") {
                      const data = node.children;
                      return (
                        <>
                          {data.map((map) => (
                            <Figcaption>{map.data}</Figcaption>
                          ))}
                        </>
                      );
                    }
                  },
                })}
                <NewsletterContainer style={{ backgroundColor: "#28282B" }}>
                  <H1 color="white">Still thinking about it?</H1>
                  <H4 color="white">
                    Sign up for our newsletter and get the latest blogs and 10%
                    off your next purchase
                  </H4>
                  <InputContainer>
                    <Input placeholder="Enter your email" />

                    <Button>
                      <ButtonText>Submit</ButtonText>
                    </Button>
                  </InputContainer>
                </NewsletterContainer>
              </LeftAlign>
            </Wrapper>

            <Footer />
          </Container>
        </>
      ) : null}
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  // Fetch data from external API
  const res = await fetch(`http://localhost:1337/api/blogs/${id}?populate=*`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
