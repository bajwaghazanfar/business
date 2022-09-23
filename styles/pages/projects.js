import Image from "next/image";
import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem;
  flex-wrap: wrap;
  gap: 20px;
`;
export const Project = styled.div`
  width: 700px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImgContainer = styled.div`
  width: 100%;
  height: auto;
`;
export const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const DescriptionWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const ProjectTitle = styled.h3`
  font-size: 25px;
  font-weight: 600;
  color: white;
  margin: 0px;
`;
export const ProjectDescription = styled.h4`
  font-size: 15px;
  font-weight: 500;
  color: #8e8e8e;
  margin: 0px;
`;
