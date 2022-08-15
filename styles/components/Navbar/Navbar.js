import { useEffect, useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/router";
//Fonts
export const H3 = styled.h3`
  font-size: 15px;
  color: ${(props) => (props.color ? props.color : "white")};
  font-weight: 600;
  margin: 0px;
  cursor: pointer;
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
  height: 5%;
  position: absolute;
  z-index: 10;

  @media (max-width: 768px) {
    z-index: 10;
  }
`;
export const NavbarWrapper = styled.div`
  width: 100%;
  height: 5%;

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
  width: 20%;
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
export const Navbar = () => {
  const [width, setWidth] = useState(0);
  const [open, setOpen] = useState(false);
  //Next router
  const router = useRouter();

  console.log(router.pathname);
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
            <H1
              style={
                router.pathname === "/"
                  ? { color: "white" }
                  : { color: "black" }
              }
            >
              MB
            </H1>
          </Link>
        </LeftContainer>

        {width < 768 ? (
          <HamburgerLogo onClick={openMenu}>
            <MenuIcon style={{ color: "white" }} />
          </HamburgerLogo>
        ) : (
          <RightContainer>
            <Link href="/about">
              <H3
                style={
                  router.pathname === "/"
                    ? { color: "white" }
                    : { color: "black" }
                }
              >
                About
              </H3>
            </Link>

            <Link href="/about">
              <H3
                style={
                  router.pathname === "/"
                    ? { color: "white" }
                    : { color: "black" }
                }
              >
                Projects
              </H3>
            </Link>
            <Link href="/contactUs">
              <H3
                style={
                  router.pathname === "/"
                    ? { color: "white" }
                    : { color: "black" }
                }
              >
                Contact Us
              </H3>
            </Link>
          </RightContainer>
        )}
      </NavbarWrapper>
      <MobileMenu style={open ? { display: "flex" } : { display: "none" }}>
        <Link href="/about">
          <H3
            onClick={() => {
              setOpen(!open);
            }}
          >
            About
          </H3>
        </Link>{" "}
        <Link href="/about">
          <H3
            onClick={() => {
              setOpen(!open);
            }}
          >
            Projects
          </H3>
        </Link>{" "}
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
