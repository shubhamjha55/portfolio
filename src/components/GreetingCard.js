import Button from "@material-ui/core/Button";
import React from "react";
import { Fade } from "react-reveal";
import Tada from "react-reveal/Tada";
import * as Scroll from "react-scroll";
import styled from "styled-components";
import hello from "../assets/lottie/hello1.json";
import DisplayLottie from "./displayLottie/DisplayLottie";
import "./greetings.css";

function GreetingCard() {
  var scroll = Scroll.animateScroll;

  function scrollToBottom() {
    scroll.scrollToBottom({ duration: 100 });
  }

  return (
    <Fade bottom duration={1000} distance="50px">
      <Container>
        <Animation>
          <DisplayLottie animationData={hello} />
        </Animation>

        <GreetingText>
          <Tada>
            <h1>
              Hi all <span className="wave-emoji">👋</span>, I'm Shubham
            </h1>
          </Tada>

          <p>
            A passionate Backend Engineer 🚀 with experience in designing and
            building web applications using Spring Boot, ASP.NET Core,
            JavaScript / React.js / Node.js, and other modern technologies.
          </p>
          <Buttons>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1pXbmhRp6sLh1bZ0gUk9VVEgbNew-leig/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Resume
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={scrollToBottom}
            >
              Contact Me
            </Button>
          </Buttons>
        </GreetingText>
      </Container>
    </Fade>
  );
}

export default GreetingCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: block;
  }
`;
const Animation = styled.div`
  flex: 1;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const GreetingText = styled.div`
  flex: 1;
  text-align: center;

  h1 {
    font-size: 3.5rem;
    color: #d1e8e2;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    color: #0b0c10;
    line-height: 1.5;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const Buttons = styled.div`
margin-top:2rem;

Button{
    margin-right:2rem;
 
    @media(max-width:768px){
        margin:0 0.5rem;
    }
`;
