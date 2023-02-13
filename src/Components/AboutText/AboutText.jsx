import React from "react";
import styled from "styled-components";
import { theme } from "../Theme/Theme";

const TextDiv = styled.div`
  width: 50%;
  height: fit-content;
  max-height: 80%;
  padding: 30px !important;
  line-height: 25px;
  background-color: ${theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25),
    -4px -4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const Title = styled.h1`
  font-size: 50px;
  color: ${theme.secondary};
  margin-bottom: 20px !important;
  font-family: "Inter", sans-serif;
`;

const Text = styled.p`
  font-size: 20px;
  text-align: justify;
  color: ${theme.secondary};
  font-weight: 600;
  font-family: "Inter", sans-serif;
  margin-bottom: 10px !important;
`;

const AboutText = () => {
  return (
    <TextDiv>
      <Title>METALIKK</Title>
      <Text>
        Welcome to Metalikk, the premier destination for metal weight
        calculations. At Metalikk, we understand the importance of accuracy and
        efficiency in metalworking. That's why we've developed a powerful tool
        that makes it easy to calculate the weight of various metal shapes,
        including cubes, cylinders, and plates.
      </Text>
      <Text>
        Our founder, Dharmik Abhangi, is a mechanical engineering graduate who
        has turned his talents to frontend web development. With a passion for
        both technology and metalworking, Dharmik saw an opportunity to create a
        platform that would revolutionize the industry. The result is Metalikk,
        a cutting-edge tool that makes metal weight calculations fast, easy, and
        accurate.
      </Text>
      <Text>
        At Metalikk, we believe in the power of technology to simplify and
        streamline complex processes. That's why we've built our platform using
        a powerful stack of technologies, including HTML5, CSS, ReactJS,
        Javascript, ReduxJS, and Styled Components. This combination of tools
        ensures that Metalikk is not only functional but also user-friendly,
        with a sleek and modern design that makes it easy to use for
        professionals and hobbyists alike.
      </Text>
      <Text>
        We understand that accuracy is crucial in metalworking, which is why
        we've put a lot of effort into ensuring that Metalikk provides the most
        precise calculations possible. With a comprehensive selection of
        materials to choose from, you can rest assured that the weight
        measurements you get from our platform are as accurate as possible.
      </Text>
      <Text>
        At Metalikk, we're dedicated to providing the best possible experience
        for our users. Whether you're a professional metalworker or just
        starting out, we believe that our platform can help you save time and
        improve your efficiency. So why wait? Try out Metalikk today and
        experience the power of accurate, convenient metal weight calculations.
      </Text>
    </TextDiv>
  );
};

export default AboutText;
