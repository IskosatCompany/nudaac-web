import { makeStyles } from "@mui/styles";
import { MiniDrawer } from "../../components/Drawer";
import { TabsValues } from "../../components/Drawer/Drawer";
import { RepositoryItem } from "../../components/RepositoryItem";
import { RepositoryItemProps } from "../../components/RepositoryItem/RepositoryItem";

const movies: RepositoryItemProps[] = [
  {
    name: "José",
    description: "Spain",

    userImage:
      "https://images.unsplash.com/photo-1593601243018-eb18fc87042f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    firstImage:
      "https://images.unsplash.com/photo-1677174262675-3b3118c1eb14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    secondImage:
      "https://images.unsplash.com/photo-1676995601133-cf2d69195af1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },

  {
    name: "Zinchenko",
    description: "Ukraine",

    userImage:
      "https://images.unsplash.com/photo-1641555203179-afb3549b2fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHVrcmFpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    firstImage:
      "https://images.unsplash.com/photo-1485286162995-aa63d31c06cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dWtyYWluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    secondImage:
      "https://plus.unsplash.com/premium_photo-1668447247252-86fb6c96523b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dWtyYWluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Laura",
    description: "Portugal",

    userImage:
      "https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    firstImage:
      "https://images.unsplash.com/photo-1677131001999-aa1291476c37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    secondImage:
      "https://images.unsplash.com/photo-1677210908027-702cb824c97a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const useStyles = makeStyles({
  cardList: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  pageContent: {
    display: "flex",
    marginInline: "10%",
    marginBlock: "64px 64px",
    flexDirection: "column",
  },
  wrapper: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
});

const RepositoryPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageContent}>
      <div className={classes.wrapper}>
        <div className={classes.cardList}>
          {movies.map((item, index) => (
            <RepositoryItem key={index.toString()} {...item} />
          ))}
        </div>
      </div>
      <MiniDrawer selectedTab={TabsValues.REPOSITORY} />
    </div>
  );
};

export default RepositoryPage;
