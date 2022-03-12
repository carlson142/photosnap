import React from "react";
import styled from "styled-components";

import img1 from "../../img/features/desktop/responsive.svg";
import img2 from "../../img/features/desktop/no-limit.svg";
import img3 from "../../img/features/desktop/embed.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  text-align: center;

  width: 27vw;
  height: 27rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImgCont = styled.div`
  height: 7.5rem;
  width: 7.5rem;

  display: flex;
  align-items: center;

  margin-bottom: 2rem;
`;

const Image = styled.img``;

const Title = styled.h3`
  font-size: 1.6rem;

  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const HomeSectionFive = () => {
  return (
    <Container>
      <Card>
        <ImgCont>
          <Image src={img1} />
        </ImgCont>
        <Title>100% Responsive</Title>
        <Text>
          No matter which the device you’re on, our site is fully responsive and
          stories look beautiful on any screen.
        </Text>
      </Card>

      <Card>
        <ImgCont>
          <Image src={img2} />
        </ImgCont>
        <Title>No Photo Upload Limit</Title>
        <Text>
          Our tool has no limits on uploads or bandwidth. Freely upload in bulk
          and share all of your stories in one go.
        </Text>
      </Card>

      <Card>
        <ImgCont>
          <Image src={img3} />
        </ImgCont>
        <Title>Available to Embed</Title>
        <Text>
          Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
          videos, Google Maps, and more.
        </Text>
      </Card>
    </Container>
  );
};

export default HomeSectionFive;
