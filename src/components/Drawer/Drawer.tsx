import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { WebRoutes } from "../../App";

const drawerWidth = 192;
const minDrawerWidth = 56;

export enum TabsValues {
  SCHEDULE = "schedule",
  RESUME = "resume",
  ACTIVITY = "activity",
  CULTURE = "culture",
  REPOSITORY = "repository",
}

const ImageContainer = styled("div")(() => ({
  position: "absolute",
  display: "flex",
  width: "100%",
  top: 24,
  right: 0,
  left: 0,
  justifyContent: "center",
}));

interface ImageInterface {
  open: boolean;
}

const Image = styled("img")(({ open }: ImageInterface) => ({
  width: open ? drawerWidth / 1.5 : minDrawerWidth / 1.5,
  height: "100px",
  objectFit: "cover",
}));

interface ListItemInterface {
  name: string;
  value: TabsValues;
  isSelected: boolean;
}

const tabs = [
  {
    name: "Agenda",
    value: TabsValues.SCHEDULE,
    isSelected: false,
  },
  {
    name: "Resumos",
    value: TabsValues.RESUME,
    isSelected: false,
  },
  {
    name: "Atividades",
    value: TabsValues.ACTIVITY,
    isSelected: false,
  },
  {
    name: "Cartaz Cultural",
    value: TabsValues.CULTURE,
    isSelected: false,
  },
  {
    name: "Portefólios",
    value: TabsValues.REPOSITORY,
    isSelected: false,
  },
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  alignSelf: "center",
  justifyContent: "center",
  borderRadius: " 0 0 0 0",
  margin: "0px !important",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  background: theme.colors.primary.white,
  alignSelf: "center",
  justifyContent: "center",
  borderRadius: " 0 0 0 0",
  width: "56px",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  margin: "0px !important",
}));

const Menu = styled(List)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

interface MiniDrawerProps {
  selectedTab: TabsValues;
}

const MiniDrawer = ({ selectedTab }: MiniDrawerProps) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const listItemRedirect = useCallback((type: TabsValues) => {
    switch (type) {
      case TabsValues.ACTIVITY:
        navigate(WebRoutes.ACTIVITY);
        break;
      case TabsValues.CULTURE:
        navigate(WebRoutes.CULTURE);
        break;
      case TabsValues.REPOSITORY:
        navigate(WebRoutes.REPOSITORY);
        break;
      case TabsValues.RESUME:
        navigate(WebRoutes.RESUME);
        break;
      case TabsValues.SCHEDULE:
        navigate(WebRoutes.SCHEDULE);
        break;
      default:
        break;
    }
  }, []);

  return (
    <Box sx={{ display: "flex", position: "absolute" }}>
      <Drawer
        variant="permanent"
        open={open}
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
        style={{ margin: "0px !important " }}
      >
        <ImageContainer>
          <Image open={open} src={require("../../assets/logo.png")} />
        </ImageContainer>

        <Menu>
          {tabs.map((item, index) => (
            <MenuListItem
              key={index.toString()}
              item={item}
              index={index}
              open={open}
              listItemRedirect={listItemRedirect}
              selectedTab={selectedTab}
            />
          ))}
        </Menu>
      </Drawer>
    </Box>
  );
};

export default React.memo(MiniDrawer);

interface MenuListItemProps {
  item: ListItemInterface;
  listItemRedirect: (type: TabsValues) => void;
  selectedTab: TabsValues;
  open: boolean;
  index: number;
}

const MenuListItem = ({
  item,
  listItemRedirect,
  selectedTab,
  index,
  open,
}: MenuListItemProps) => {
  const [hover, setHover] = React.useState(false);

  const handleDrawerOpen = () => {
    setHover(true);
  };

  const handleDrawerClose = () => {
    setHover(false);
  };

  return (
    <ListItem
      key={item.name}
      disablePadding
      sx={{ display: "block" }}
      onClick={() => listItemRedirect(item.value)}
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <ListItemButton
        sx={{
          margin: "4px 0px",
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
          background: selectedTab === item.value ? "" : "transparent",
          boxShadow: hover
            ? "0px 4px 4px rgba(0, 0, 0, 0.5), 0px -1px 1px rgba(0, 0, 0, 0.5)"
            : selectedTab === item.value
            ? "0px 1px 1px rgba(0, 0, 0, 0.5), 0px -1px 1px rgba(255, 255, 255, 0.5)"
            : "",
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
            stroke: selectedTab === item.value ? "black" : "grey",
          }}
        >
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText
          primary={item.name}
          sx={{
            opacity: open ? 1 : 0,
            color: selectedTab === item.value || hover ? "black" : "grey",
            fontWeight: selectedTab === item.value ? "bold" : "normal",
            fontSize: selectedTab === item.value ? 48 : 16,
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};
