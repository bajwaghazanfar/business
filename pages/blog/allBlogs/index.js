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
  const [categories, setCategories] = useState([]);
  const [latestBlog, setLatestBlog] = useState();

  //#0096FF
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.document.body.scrollHeight);
      setWidth(window.innerWidth);
    }

    setCategories(data[1]);
    setLatestBlog(data[0]);
  }, []);

  console.log(categories);
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
      {latestBlog != null ? (
        <>
          <Container>
            <Wrapper>
              <GridContainer>
                <GridWrapper>
                  <GridR>
                    <FullImageContainer>
                      <FullImage
                        src={
                          latestBlog.data.attributes.BlogImage.data.attributes
                            .url
                        }
                      />
                    </FullImageContainer>
                  </GridR>
                  <GridL>
                    <H2>
                      Introducing Segment Data lakes: How to start using
                      advanced analytics
                    </H2>
                    <Subtitle>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum."
                    </Subtitle>
                    <CategoryContainer>
                      <Category>
                        {
                          latestBlog.data.attributes.category.data.attributes
                            .CategoryName
                        }
                      </Category>
                    </CategoryContainer>
                  </GridL>
                </GridWrapper>
              </GridContainer>

              {categories.data.map((map) => (
                <>
                  <SpaceAroundContainer>
                    <SpaceBetween>
                      <H1>{map.attributes.CategoryName}</H1>
                      <Link href={`/blog/allBlogs/${map.id}`}>
                        <H4>
                          All {map.attributes.CategoryName} Articles{" "}
                          <BsArrowRight />
                        </H4>
                      </Link>
                    </SpaceBetween>
                  </SpaceAroundContainer>
                  <GridContainerAlt>
                    {map.attributes.blogs.data.map((map) => (
                      <GridWrapperAlt>
                        <GridR>
                          <FullImageContainer>
                            <FullImage
                              src={map.attributes.BlogImage.data.attributes.url}
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
                                  latestBlog.data.attributes.category.data
                                    .attributes.CategoryName
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
              ))}
            </Wrapper>
          </Container>
        </>
      ) : null}
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const categories = await (
    await fetch(
      `https://strapi-obsidian-blog.herokuapp.com/api/blogs/1?populate=*`
    )
  ).json();
  console.log(categories);
  const allCategories = await (
    await fetch(
      `https://strapi-obsidian-blog.herokuapp.com/api/categories?populate[blogs][populate]=*`
    )
  )
    ///api/categories?populate[blogs][populate]=*
    .json();
  const data = [categories, allCategories];

  // Pass data to the page via props
  return { props: { data } };
}
