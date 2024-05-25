// theme.js
import { extendTheme } from "@chakra-ui/react";

const MainTheme = extendTheme({
  styles: {
    global: {
      // Добавляем глобальные стили, чтобы применить шрифты ко всему тексту
      body: {
        fontFamily: "YourCustomFont, system-ui, sans-serif",
      },
      heading: {
        fontFamily: "YourCustomFont, system-ui, sans-serif",
      },
      mono: {
        fontFamily: "YourMonoFont, Menlo, monospace",
      },
    },
  },
  fonts: {
    body: "YourCustomFont, system-ui, sans-serif",
    heading: "YourCustomFont, system-ui, sans-serif",
    mono: "YourMonoFont, Menlo, monospace",
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
        // fontSize: 'lg',
      },
    },
  },
});

export default MainTheme;
