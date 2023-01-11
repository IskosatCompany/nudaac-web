import { createTheme } from "@mui/material/styles";
// import { useCurrentSize } from './hooks/useCurrentSize';

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      primary: {
        teal: string;
        black: string;
        coral: string;
        white: string;
      };
      secondary: {
        teal300: string;
        teal600: string;
        aqua200: string;
      };
      tertiary: {
        error: string;
        info: string;
        success: string;
        warning: string;
      };
      neutrals: {
        grey100: string;
        grey200: string;
        grey300: string;
        grey400: string;
      };
      gradient: {
        tealGradient: string;
      };
    };
  }
  interface ThemeOptions {
    colors?: {
      primary?: {
        teal?: string;
        tealGradient?: string;
        black?: string;
        coral?: string;
        white?: string;
      };
      secondary?: {
        teal300?: string;
        teal600?: string;
        aqua200?: string;
      };
      tertiary?: {
        error?: string;
        info?: string;
        success?: string;
        warning?: string;
      };
      neutrals?: {
        grey100?: string;
        grey200?: string;
        grey300?: string;
        grey400?: string;
      };
      gradient?: {
        tealGradient?: string;
      };
    };
  }
}

export let theme = createTheme({
  palette: {
    primary: {
      main: "#00708D",
      dark: "#2C353B",
      light: "#F74850",
    },
    secondary: {
      main: "#389FB5",
      dark: "#01647D",
      light: "#BAEFED",
    },
    error: {
      main: "#EB4820",
    },
    info: { main: "#499DC7" },
    success: { main: "#05874C" },
    warning: { main: "#FCC419" },
    grey: {
      "100": "#F7F9F9",
      "200": "#E3E9EB",
      "300": "#A8B7BA",
      "400": "#626F71",
    },
  },
  colors: {
    primary: {
      teal: "#00708D",
      black: "#2C353B",
      coral: "#F74850",
      white: "#FFFFFF",
    },
    secondary: {
      teal300: "#389FB5",
      teal600: "#01647D",
      aqua200: "#BAEFED",
    },
    tertiary: {
      error: "#EB4820",
      info: "#499DC7",
      success: "#05874C",
      warning: "#FCC419",
    },
    neutrals: {
      grey100: "#F7F9F9",
      grey200: "#E3E9EB",
      grey300: "#A8B7BA",
      grey400: "#626F71",
    },
    gradient: {
      tealGradient: "linear-gradient(269.86deg, #389FB5 0%, #00708D 100%)",
    },
  },
  typography: {
    fontFamily: "Toyota Type",
  },
});

theme = createTheme(theme, {
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h0" },
          style: {
            fontSize: "64px",
            letterSpacing: "-0.015em",
            marginLeft: "-5px",
            lineHeight: "100%",
            fontFamily: "Toyota Type",
            fontWeight: 300,
          },
        },
        {
          props: { variant: "h1" },
          style: {
            fontSize: "48px",
            letterSpacing: "-0.02em",
            marginLeft: "-4px",
            padding: 0,
            lineHeight: "115%",
            fontFamily: "Toyota Type",
            fontWeight: 300,
          },
        },
        {
          props: { variant: "h2" },
          style: {
            fontSize: "40px",
            marginLeft: "-3px",
            lineHeight: "40px",
            fontFamily: "Toyota Type",
            fontWeight: 300,
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontSize: "32px",
            marginLeft: "-2px",
            lineHeight: "120%",
            fontFamily: "Toyota Type",
            fontWeight: 300,
          },
        },
        {
          props: { variant: "h4" },
          style: {
            fontSize: "24px",
            marginLeft: "-1px",
            lineHeight: "150%",
            fontFamily: "Toyota Type",
            fontWeight: 300,
          },
        },
        {
          props: { variant: "h5" },
          style: {
            fontSize: "16px",
            marginLeft: "0px",
            lineHeight: "150%",
            fontFamily: "Toyota Type",
            fontWeight: 600,
          },
        },
        {
          props: { variant: "p1" },
          style: {
            fontSize: "16px",
            marginLeft: "0px",
            lineHeight: "150%",
            fontFamily: "Toyota Type",
            fontWeight: 400,
          },
        },
        {
          props: { variant: "p2" },
          style: {
            fontSize: "14px",
            marginLeft: "0px",
            lineHeight: "150%",
            fontFamily: "Toyota Type",
            fontWeight: 400,
          },
        },
        {
          props: { variant: "p3" },
          style: {
            fontSize: "12px",
            marginLeft: "0px",
            lineHeight: "150%",
            fontFamily: "Toyota Type",
            fontWeight: 400,
          },
        },
        {
          props: { variant: "d1" },
          style: {
            fontSize: "14px",
            marginLeft: "0px",
            lineHeight: "150%",
            fontFamily: "Toyota Type",
            fontWeight: 600,
          },
        },
        {
          props: { variant: "d2" },
          style: {
            fontSize: "12px",
            marginLeft: "0px",
            lineHeight: "150%",
            fontFamily: "Toyota Type",
            fontWeight: 400,
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: theme.colors.primary.teal,
            "&:hover": {
              backgroundColor: theme.colors.secondary.teal600,
            },
            "&.Mui-disabled": {
              color: theme.colors.neutrals.grey300,
              border: 0,
              background: theme.colors.neutrals.grey200,
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            color: theme.colors.primary.teal,
            borderColor: theme.colors.primary.teal,
            background: "none",
            backgroundColor: theme.colors.primary.white,
            "&.Mui-disabled": {
              color: theme.colors.neutrals.grey300,
              borderColor: theme.colors.neutrals.grey200,
              background: theme.colors.neutrals.grey200,
            },
            "&:hover": {
              backgroundColor: theme.colors.secondary.teal600,
              color: theme.colors.primary.white,
            },
          },
        },
        {
          props: { variant: "dashed" },
          style: {
            color: theme.colors.primary.teal,
            border: `1px dashed  ${theme.colors.primary.teal}`,
            backgroundColor: theme.colors.primary.white,
            "&.Mui-disabled": {
              color: theme.colors.neutrals.grey300,
              border: `1px dashed  ${theme.colors.neutrals.grey200}`,
              background: theme.colors.primary.white,
            },
            "&:hover": {
              backgroundColor: theme.colors.neutrals.grey100,
            },
          },
        },
        {
          props: { size: "xs" },
          style: {
            padding: "10px 8px ",
            height: "24px",
            fontSize: "14px",
          },
        },
        {
          props: { size: "sm" },
          style: {
            padding: "10px 12px",
            height: "32px",
            fontSize: "14px",
          },
        },
        {
          props: { size: "md" },
          style: {
            padding: "10px 16px",
            height: "40px",
            fontSize: "14px",
          },
        },
        {
          props: { size: "lg" },
          style: {
            padding: "10px 24px",
            height: "48px",
            fontSize: "16px",
          },
        },
      ],
    },
    MuiChip: {
      variants: [
        {
          props: { size: "xs" },
          style: {
            height: "18px",
            minWidth: "94px",
          },
        },
        {
          props: { size: "sm" },
          style: {
            height: "24px",
            minWidth: "94px",
          },
        },
        {
          props: { size: "md" },
          style: {
            height: "40px",
            minWidth: "94px",
          },
        },
        {
          props: { size: "default" },
          style: {
            height: "32px",
            minWidth: "94px",
          },
        },
      ],
    },
  },
});

export const mobileMaxWidth = 768;
export const mobileBreakpoint = `@media (max-width: ${mobileMaxWidth}px)`;

// export const useIsMobile = () => {
//   const { width } = useCurrentSize();

//   return width <= mobileMaxWidth;
// };
