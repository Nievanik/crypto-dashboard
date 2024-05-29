import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme(
  {
    colors: {
      purple: {
        500: "#5F00D9",
      },
      p: {
        purple: "#5F00D9",
        black: "#171717",
      },
      black: {
        5: "#F3F3F7",
        10: "#EEEEF4",
        20: "#D8DDE2",
        40: "#BABAC4",
        60: "#797E82",
        80: "#535D66",
      },
    },

    fonts: {
      heading: "Ubuntu",
      body: "Ubuntu",
    },

    textStyles: {
      h1: {
        fontSize: {
          base: "30px",
          md: "32px",
        },
        color: "p.black",
        lineHeight: {
          base: "34px",
          md: "36px",
        },
      },
      h2: {
        fontSize: {
          base: "24px",
          md: "28px",
        },
        color: "p.black",
        lineHeight: {
          base: "28px",
          md: "32px",
        },
      },
      h4: {
        fontSize: {
          base: "20px",
          md: "22px",
        },
        color: "p.black",
        lineHeight: {
          base: "24px",
          md: "26px",
        },
      },
      h3: {
        fontSize: {
          base: "22px",
          md: "24px",
          xl: "32px",
        },
        color: "p.black",
        lineHeight: {
          base: "26px",
          md: "28px",
          xl: "36px",
        },
      },
      h5: {
        fontSize: {
          base: "18px",
          md: "20px",
        },
        color: "p.black",
        lineHeight: {
          base: "22px",
          md: "24px",
        },
      },
      h6: {
        fontSize: {
          base: "16px",
          md: "18px",
        },
        color: "p.black",
        lineHeight: {
          base: "20px",
          md: "22px",
        },
      },
    },

    fontSizes: {
      xs: ".75rem",
      sm: ".875rem",
      base: { base: "1rem", md: "1.125rem" },
      lg: { base: "1.125rem", md: "1.25rem" },
      xl: { base: "1.25rem", md: "1.375rem" },
      "2xl": { base: "1.375rem", md: "1.5rem" },
      "3xl": { base: "1.5rem", md: "1.75rem" },
      "4xl": { base: "1.875rem", md: "2rem" },
    },
    styles: {
      global: {
        body: {
          bg: "#F3F3F7",
        },
      },
    },
    components: {
      Button: {
        baseStyle: {
          fontWeight: "bold",
          borderRadius: "10px",
        },
      },
      FormLabel: {
        baseStyle: {
          fontSize: "sm",
        },
      },
      Input: {
        variants: {
          outline: {
            field: {
              fontSize: "sm",
              h: "38px",
              borderRadius: "8px",
              _focus: {
                boxShadow: "0 0 0 1px #5F00D9",
              },
            },
          },
        },
      },

      Textarea: {
        variants: {
          outline: {
            fontSize: "sm",
            h: "38px",
            borderRadius: "8px",
            _focus: {
              boxShadow: "0 0 0 1px #5F00D9",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "purple" })
);
