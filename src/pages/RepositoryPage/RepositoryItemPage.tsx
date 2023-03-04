import { styled } from "@mui/material/styles";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { TabsValues } from "../../components/Drawer/Drawer";
import { PageContainer } from "../../components/PageContainer";

const Image = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
}));

interface GridProps {
  width: number;
}

const Grid = styled("div")(({ width }: GridProps) => ({
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateColumns: `1fr 1fr 1fr 1fr`,
  gridTemplateRows: `300px 300px 300px 300px`,
  columnGap: "24px",
  rowGap: "16px",
}));

const photos: string[] = [
  "https://images.unsplash.com/photo-1593601243018-eb18fc87042f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1677174262675-3b3118c1eb14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1676995601133-cf2d69195af1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1641555203179-afb3549b2fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHVrcmFpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1485286162995-aa63d31c06cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dWtyYWluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://plus.unsplash.com/premium_photo-1668447247252-86fb6c96523b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dWtyYWluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];

type RepositoryItemPageProps = {
  repoId: string;
};

const RepositoryItemPage = () => {
  const params = useParams<RepositoryItemPageProps>();

  useEffect(() => {
    if (params && params?.repoId) {
      console.log(params.repoId);
    }
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  console.log(width);

  useLayoutEffect(() => {
    setWidth(ref.current?.offsetWidth || 0);
    setHeight(ref.current?.offsetHeight || 0);
  }, []);

  return (
    <div style={{ display: "flex", flex: 1 }} ref={ref}>
      <PageContainer tab={TabsValues.REPOSITORY}>
        <Grid width={width / 6}>
          {photos.map((item) => (
            <Image src={item} srcSet={item} alt={item} loading="lazy" />
          ))}
        </Grid>
      </PageContainer>
    </div>
  );
};

export default RepositoryItemPage;
