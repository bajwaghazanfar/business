import {
  Wrapper,
  Container,
  GridContainer,
  GridL,
  GridR,
  H1,
  Subtitle,
  CategoryContainer,
  Category,
  FullImageContainer,
  FullImage,
  GridWrapper,
  SpaceBetween,
  H4,
  H2,
  SpaceAroundContainer,
  LeftAlign,
  GridWrapperAlt,
  FullWidth,
  GridContainerAlt,
  Button,
  ButtonText,
  RightAlign,
} from "../../../styles/pages/blogPage/allBlogs";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Footer } from "../../../styles/components/footer/footer";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

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
  }, []);

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
      {data != null ? (
        <>
          <Container>
            <Wrapper>
              <>
                <SpaceAroundContainer>
                  <SpaceBetween>
                    <H1>{data.data.attributes.CategoryName}</H1>
                  </SpaceBetween>
                </SpaceAroundContainer>
                <GridContainerAlt>
                  {data.data.attributes.blogs.data.map((map) => (
                    <GridWrapperAlt>
                      <GridR>
                        <FullImageContainer>
                          <FullImage
                            src={`http://localhost:1337${map.attributes.BlogImage.data.attributes.url}`}
                          />
                        </FullImageContainer>
                      </GridR>
                      <GridL>
                        <H2>{map.attributes.Title}</H2>
                        <Subtitle>{map.attributes.Subtitle}</Subtitle>

                        <SpaceBetween border="true">
                          <CategoryContainer>
                            <Category>
                              {
                                map.attributes.category.data.attributes
                                  .CategoryName
                              }
                            </Category>
                          </CategoryContainer>
                          <RightAlign>
                            <Link
                              href={`http://localhost:3000/blog/singleBlog/${map.id}`}
                            >
                              <Button>
                                <ButtonText>Read more</ButtonText>
                              </Button>
                            </Link>
                          </RightAlign>
                        </SpaceBetween>
                      </GridL>
                    </GridWrapperAlt>
                  ))}
                </GridContainerAlt>
              </>
            </Wrapper>
          </Container>
        </>
      ) : null}
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  // Fetch data from external API

  const allCategories = await (
    await fetch(
      `http://localhost:1337/api/categories/${id}?populate[blogs][populate]=*`
    )
  )
    //http://localhost:1337/api/categories?populate[blogs][populate]=*
    .json();
  const data = allCategories;

  // Pass data to the page via props
  return { props: { data } };
}
