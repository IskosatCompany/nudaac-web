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

const drawerWidth = 240;

export enum TabsValues {
  SCHEDULE = "schedule",
  RESUME = "resume",
  ACTIVITY = "activity",
  CULTURE = "culture",
  REPOSITORY = "repository",
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
  background: theme.colors.gradient.tealGradient,
  alignSelf: "center",
  justifyContent: "center",
  borderRadius: " 0 100px 100px 0",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  background: theme.colors.gradient.tealGradient,
  alignSelf: "center",
  justifyContent: "center",
  borderRadius: " 0 100px 100px 0",
  width: `calc(${theme.spacing(8)} + 16px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 16px)`,
  },
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
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={open}
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
      >
        <Menu>
          {tabs.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => listItemRedirect(item.value)}
            >
              <ListItemButton
                sx={{
                  margin: "8px 16px",
                  minHeight: selectedTab === item.value ? 60 : 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  background: selectedTab === item.value ? "" : "transparent",
                  border: selectedTab === item.value ? "2px solid white" : "",
                  borderRadius: "18px",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    stroke: selectedTab === item.value ? "white" : "",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: selectedTab === item.value ? "white" : "",
                    fontWeight: selectedTab === item.value ? "bold" : "normal",
                    fontSize: selectedTab === item.value ? 48 : 16,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </Menu>
      </Drawer>
    </Box>
  );
};

export default React.memo(MiniDrawer);
