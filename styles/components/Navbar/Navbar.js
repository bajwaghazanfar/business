import { useEffect, useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../../public/logos/companyLogo/logonew.webp";
import Image from "next/image";

//Fonts
export const H3 = styled.h3`
  font-size: 15px;
  color: ${(props) => (props.color ? props.color : "white")};
  font-weight: 600;
  margin: 0px;
  cursor: pointer;
  letter-spacing: 3px;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
export const H1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  margin: 0px;
`;
//Divs
export const NavbarContainer = styled.div`
  width: 100%;
  height: 10%;
  position: absolute;
  z-index: 10;
  background-color: transparent;
  @media (max-width: 768px) {
    z-index: 10;
    height: 15%;
  }
`;
export const NavbarWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0rem;
`;
//position: fixed;
//top: 0;
//left: 0;
export const LeftContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
export const RightContainer = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
//Mobile
export const HamburgerLogo = styled.button`
  width: auto;
  height: auto;
  padding: 1rem;
  border: none;
  outline: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;
export const MobileMenu = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  border-radius: 10px;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Logo = styled(Image)`
  width: 80px;
  height: auto;
  border-radius: 10px;
`;
export const LogoContainer = styled.div`
  width: 80px;
  height: auto;
`;
export const Navbar = () => {
  const [width, setWidth] = useState(0);
  const [open, setOpen] = useState(false);
  //Next router
  const router = useRouter();
  //Routes for bg color
  const routes = [
    "/contactUs",
    "/web-development-birmingham-web-design-birmingham/lchinsure",
    "/web-development-birmingham-web-design-birmingham/fcProperties",
    "/web-development-birmingham-web-design-birmingham/arvTuning",
    "/blog",
  ];
  const setBgColor = () => {
    const isPresent = routes.indexOf(router.pathname);
    const checkIfIncludes = router.pathname.includes("/blog");
    if (isPresent > 0 || checkIfIncludes === true) {
      return true;
    } else {
      return false;
    }
  };
  console.log(router.pathname, "bgcollorrr");
  const openMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    console.log(window.innerWidth);
    setWidth(innerWidth);
  }, [width]);
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <LeftContainer>
          <Link href="/">
            <LogoContainer>
              <Logo
                src={logo}
                layout="responsive"
                priority={true}
                alt="Web development and web design company logo"
              />
            </LogoContainer>
          </Link>
        </LeftContainer>

        {width < 768 ? (
          <HamburgerLogo onClick={openMenu}>
            <MenuIcon style={{ color: "white" }} />
          </HamburgerLogo>
        ) : (
          <RightContainer>
            <Link href="/web-development-birmingham-web-design-birmingham/about">
              <H3
                style={setBgColor() ? { color: "black" } : { color: "white" }}
              >
                About
              </H3>
            </Link>

            <Link href="/web-development-birmingham-web-design-birmingham/web-development-birmingham">
              <H3
                style={setBgColor() ? { color: "black" } : { color: "white" }}
              >
                Services
              </H3>
            </Link>
            <Link href="/blog/allBlogs">
              <H3
                style={setBgColor() ? { color: "black" } : { color: "white" }}
              >
                Blog
              </H3>
            </Link>
            <Link href="/contactUs">
              <H3
                style={setBgColor() ? { color: "black" } : { color: "white" }}
              >
                Contact Us
              </H3>
            </Link>
          </RightContainer>
        )}
      </NavbarWrapper>
      <MobileMenu style={open ? { display: "flex" } : { display: "none" }}>
        <Link href="/web-development-birmingham-web-design-birmingham/about">
          <H3
            onClick={() => {
              setOpen(!open);
            }}
          >
            About
          </H3>
        </Link>{" "}
        <Link href="/web-development-birmingham-web-design-birmingham/web-development">
          <H3
            onClick={() => {
              setOpen(!open);
            }}
          >
            Services
          </H3>
        </Link>
        <Link href="/blog/allBlogs">
          <H3 style={setBgColor() ? { color: "black" } : { color: "white" }}>
            Blog
          </H3>
        </Link>
        <Link href="/contactUs">
          <H3
            onClick={() => {
              setOpen(!open);
            }}
          >
            Contact Us
          </H3>
        </Link>
      </MobileMenu>
    </NavbarContainer>
  );
};
