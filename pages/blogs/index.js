import { Description } from "../../styles/components/StickySection/StickySection";
import {
  CenterWrapper,
  Container,
  H2,
  HalfWidth,
} from "../../styles/pages/home/home";
import ReactMarkdown from "react-markdown";
export const Blogs = ({ posts }) => {
  console.log(posts.data);
  return (
    <Container>
      <CenterWrapper>
        <HalfWidth>
          {posts.data.map((map) => (
            <Container key={map.id}>
              <H2 color="black">{map.attributes.Title}</H2>
              <Description>{map.attributes.Slug}</Description>
              <ReactMarkdown>{map.attributes.Content}</ReactMarkdown>
            </Container>
          ))}
        </HalfWidth>
      </CenterWrapper>
    </Container>
  );
};
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:1337/api/articles");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
export default Blogs;
