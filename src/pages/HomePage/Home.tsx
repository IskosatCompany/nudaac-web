import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import { useHomeInfo } from "../../Hooks/Home/useHomeInfo";

const MainImage = styled("header")(() => ({
  display: "flex",
  flex: 1,
  height: "100vh",
  backgroundImage: `url(${require("../../assets/uc-main-page.jpeg")})`,
  overflow: "hidden",
  position: "relative",
  resize: "both",
}));

const Container = styled("div")(() => ({
  display: "flex",
  flex: 1,
  paddingBlock: "64px 80px",
  marginInline: "10%",
  flexDirection: "row",
  gap: 24,
  justifyContent: "center",
}));

const Body = styled("div")(() => ({
  paddingBlock: "64px 80px",
  background: "#DEDEDE",
  height: "300px",
  position: "relative",
  width: "100%",
}));

const Home = () => {
  const { data } = useHomeInfo();

  console.log(data);

  return (
    <>
      <MainImage>
        <Container>
          <Typography>HOME</Typography>
          <Typography>HOME</Typography>
        </Container>
      </MainImage>

      <Body></Body>
    </>
  );
};

export default React.memo(Home);
