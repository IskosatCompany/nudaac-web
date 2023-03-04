import styled from "@emotion/styled";
import { MiniDrawer } from "../Drawer";
import { TabsValues } from "../Drawer/Drawer";

const Container = styled("div")(() => ({
  display: "flex",
  flex: 1,
}));

const ImageContainer = styled("div")(() => ({
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  /* z-index usage is up to you.. although there is no need of using it because the default stack context will work. */
  zIndex: -1, // this is optional
}));

const Image = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  opacity: "0.6",
}));

const PageContent = styled("div")(() => ({
  display: "flex",
  marginInline: "10%",
  marginBlock: "64px 64px",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
}));

interface PageContainerProps {
  children: JSX.Element;
  tab: TabsValues;
}

const PageContainer = ({ children, tab }: PageContainerProps) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={require("../../assets/uc-main-page.jpeg")} />
      </ImageContainer>

      <PageContent>{children}</PageContent>

      <MiniDrawer selectedTab={tab} />
    </Container>
  );
};

export default PageContainer;
