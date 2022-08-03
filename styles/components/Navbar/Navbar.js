import styled from "styled-components";

//Fonts
export const H3 = styled.h3`
  font-size: 15px;
  color: black;
  font-weight: 600;
`;
export const H1 = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: black;
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
  padding: 2rem;
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

  padding: 1rem 2rem;
`;
export const RightContainer = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 2rem;
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <LeftContainer>
          <H1>MB</H1>
        </LeftContainer>
        <RightContainer>
          <H3>Projects</H3>
          <H3>Projects</H3>
          <H3>Projects</H3>
        </RightContainer>
      </NavbarWrapper>
    </NavbarContainer>
  );
};
