import React from "react";
import styled from "styled-components";

import img1 from "../../img/features/desktop/responsive.svg";
import img2 from "../../img/features/desktop/no-limit.svg";
import img3 from "../../img/features/desktop/embed.svg";
import img4 from "../../img/features/desktop/custom-domain.svg";
import img5 from "../../img/features/desktop/boost-exposure.svg";
import img6 from "../../img/features/desktop/drag-drop.svg";

const Container = styled.div`
  padding: 5rem 10rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 27rem);

  @media (max-width: 1024px) {
    padding: 5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 27rem);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 455px) {
    padding: 5rem 3rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 1rem 3rem;
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

const FeatureSectionTwo = () => {
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

      <Card>
        <ImgCont>
          <Image src={img4} />
        </ImgCont>
        <Title>Custom Domain</Title>
        <Text>
          With Photosnap subscriptions you can host your stories on your own
          domain. You can also remove our branding!
        </Text>
      </Card>

      <Card>
        <ImgCont>
          <Image src={img5} />
        </ImgCont>
        <Title>Boost Your Exposure</Title>
        <Text>
          Users that viewed your story or gallery can easily get notifed of new
          and featured stories with our built in mailing list.
        </Text>
      </Card>

      <Card>
        <ImgCont>
          <Image src={img6} />
        </ImgCont>
        <Title>Drag & Drop Image</Title>
        <Text>
          Easily drag and drop your image and get beautiful shots everytime. No
          over the top tooling to add friction to creating stories.
        </Text>
      </Card>
    </Container>
  );
};

export default FeatureSectionTwo;
