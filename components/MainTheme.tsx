// theme.js
import { extendTheme } from "@chakra-ui/react";

const MainTheme = extendTheme({
  styles: {},
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  components: {
    Container: {
      baseStyle: {
        maxW: "container.md",
      },
    },
    Box: {
      baseStyle: {
        p: "5",
      },
    },

    Heading: {
      baseStyle: {
        mt: "1em",
        mb: "0.5em",
        textAlign: "left",
        size: "xl",
      },
    },
    Text: {
      baseStyle: {
        py: 2,
      },
    },
  },
});

export default MainTheme;
