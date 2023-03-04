import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useCallback, useState } from "react";
import { theme } from "../../theme";

const CardContainer = styled("div")(() => ({
  padding: "24px",
  display: "flex",
  margin: "1rem",
  width: "25%",
  height: "fit-content",
  flexDirection: "column",
  position: "relative",
  borderRadius: "20px",

  cursor: "pointer",
  overflow: "hidden",
  background: "white",
  boxShadow: "0 5px 15px rgba(0,0,0,0.6)",
  gap: 0,
  "&:hover": {
    border: "0px",
    transform: "scale(1.1)",
    transformOrigin: "center",
    zIndex: 99,
    transition: "0.5s",
  },
}));

const useStyles = makeStyles({
  titleContainer: {
    margin: "24px 0 0 0",
    alignItems: "center",
    position: "relative",
    display: "flex",

    flexDirection: "column",
  },
  image: {
    objectFit: "cover",
    width: "45%",
    height: "138px",
    borderRadius: "20px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  userImageContainer: {
    textAlign: "center",
    position: "absolute",
    top: "80px",
    left: 0,
    right: 0,
    margin: "auto",
  },
  userImage: {
    objectFit: "cover",
    width: "100px",
    height: "100px",
    borderRadius: "50px",
    border: "2px solid white",
  },
});

export interface RepositoryItemProps {
  id: number;
  name: string;
  description: string;
  userImage: string;
  firstImage: string;
  secondImage: string;
  onClick: (id: string) => void;
}

const RepositoryItem = ({
  id,
  firstImage,
  name,
  description,
  secondImage,
  userImage,
  onClick,
}: RepositoryItemProps) => {
  const classes = useStyles();

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleOnHover = useCallback((value: boolean) => {
    setIsHovered(value);
  }, []);

  const handleOnClick = useCallback(() => {
    onClick(id.toString());
  }, [id]);

  return (
    <CardContainer
      onMouseEnter={() => handleOnHover(true)}
      onMouseLeave={() => handleOnHover(false)}
      onClick={handleOnClick}
    >
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          src={firstImage}
          srcSet={firstImage}
          alt={name}
          loading="lazy"
        />

        <img
          className={classes.image}
          src={secondImage}
          srcSet={secondImage}
          alt={name}
          loading="lazy"
        />

        <div className={classes.userImageContainer}>
          <img
            className={classes.userImage}
            src={secondImage}
            srcSet={userImage}
            alt={name}
            loading="lazy"
          />
        </div>
      </div>

      <div className={classes.titleContainer}>
        <Typography variant="h1" color={theme.colors.primary.coral}>
          {name}
        </Typography>
        <Typography variant="body1" color={theme.colors.neutrals.grey400}>
          {description}
        </Typography>
      </div>
    </CardContainer>
  );
};

export default React.memo(RepositoryItem);
