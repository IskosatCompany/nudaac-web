import styled from "@emotion/styled";
import React from "react";
import { NudaacCalendar } from "../../components/Calendar";
import { useHomeInfo } from "../../Hooks/Home/useHomeInfo";

const MainImage = styled("header")(() => ({
  display: "flex",
  flex: 1,
  height: "100vh",
  width: "100%",
  overflow: "hidden",
  position: "relative",
}));

const Container = styled("div")(() => ({
  display: "flex",
  flex: 1,
  paddingBlock: "64px 80px",
  marginInline: "10%",
  flexDirection: "row",
  gap: 24,
  justifyContent: "center",
  zIndex: "20",
}));

const Body = styled("div")(() => ({
  paddingBlock: "64px 80px",

  position: "relative",
  width: "100%",
}));

const ImageContainer = styled("div")(() => ({
  position: "absolute",
  zIndex: 0,
}));

const Image = styled("img")(() => ({
  width: "100vw",
  height: "100vh",
  objectFit: "cover",
}));

const Home = () => {
  const { data } = useHomeInfo();

  return (
    <>
      <MainImage>
        <ImageContainer>
          <Image src={require("../../assets/uc-main-page.jpeg")} />
        </ImageContainer>
      </MainImage>

      <Body>
        <NudaacCalendar />
      </Body>
    </>
  );
};

export default React.memo(Home);
