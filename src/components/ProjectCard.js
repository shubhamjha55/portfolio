import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

import { projectSection } from "../containers/PortfolioData";

function ProjectCard() {
  return (
    <Container>
      {projectSection.Data.map((project, i) => {
        return (
          <Card>
            <Fade bottom duration={2000} distance="50px">
              <ProjectTitle>
                <h1>{project.name}</h1>
              </ProjectTitle>
              <ProjectDesc>
                <p>{project.desc}</p>
              </ProjectDesc>
              <Icons>
                <ul>
                  <li key={i} name={project.name}>
                    <a href={project.link} title={project.name}>
                      {" "}
                      <i className={project.class} />{" "}
                    </a>
                  </li>
                </ul>
              </Icons>
            </Fade>
          </Card>
        );
      })}
    </Container>
  );
}

export default ProjectCard;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem auto 4rem;
  max-width: 90%;

  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 100%;
  }
`;

const Card = styled.div`
  position: relative;
  flex: 1 0 21%;
  text-align: center;
  max-width: 20rem;
  margin-bottom: 3rem;
  padding: 0 2rem 2rem;
  border-radius: 3px;

  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05), 0 5px 20px rgba(0, 0, 0, 0.1);
  background-color: #44318d;
  transition: all 100ms ease-in-out;
  @media (max-width: 768px) {
    margin: 0 auto 3rem;
    padding-right: 2.4rem;
  }
`;
const ProjectTitle = styled.div`
  h1 {
    display: inline-block;
    line-height: 1;
    padding-bottom: 1rem;
    ${"" /* transform: translateY(-1rem); */}
    font-family: 'RocknRoll One', sans-serif;
  }
  margin: 2rem auto;

  display: block;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const ProjectDesc = styled.div`
  font-size: 90%;
  margin: 1rem auto 0 auto;
  padding-top: 1rem;
  padding-bottom: 9rem;
  letter-spacing: 0.33px;
  max-width: 15rem;
`;
// const ProjectLink = styled.div`
//   margin-top: 1rem;
//   margin-bottom: 0.25rem;
//   font-weight: 600;
//   font-size: inherit;
// `

const Icons = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: inline-block;
  margin: 0 auto;

  @media (max-width: 768px) {
    position: relative;
  }
  ul {
    padding: 0;
    li {
      list-style: none;

      @media (max-width: 768px) {
        padding-left: 40px;
      }

      a,
      a:hover,
      a:focus,
      a:active {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
      }

      i {
        font-size: 3rem;

        @media (max-width: 768px) {
          font-size: 2.5rem;
          display: flex;
          flex-wrap: block;
          padding-right: 2.5rem;
        }
      }
    }
  }

  :hover {
    color: #d83f87;
    -webkit-animation: fa-spin 1s infinite linear;
    -moz-animation: fa-spin 1s infinite linear;
    -o-animation: fa-spin 1s infinite linear;
    animation: fa-spin 1s infinite linear;
  }
`;
