// theme.js
import { extendTheme } from "@chakra-ui/react";

const MainTheme = extendTheme({
  styles: {
    global: {
      // Добавляем глобальные стили, чтобы применить шрифты ко всему тексту
      body: {
        fontFamily: "Euclid Circular A",
      },
      heading: {
        fontFamily: "YourCustomFont, system-ui, sans-serif",
      },
      mono: {
        fontFamily: "Euclid Circular A",
      },
    },
  },
  fonts: {
    body: "Euclid Circular A",
    heading: "Euclid Circular A",
    mono: "Euclid Circular A",
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
      variants: {
        exercise: {
          py:3,
          px:3,
          border:"1px solid",
          borderColor:"gray.200",
          borderRadius:"md",
          borderLeftColor:"blue.300",
          borderLeftWidth:"6px",
        },
      },
    },
    Heading: {
      baseStyle: {
        mt: "1em",
        mb: "0.5em",
        textAlign: "left",
        size: "xl",
        fontWeight: "900",
        fontFamily: "Euclid Circular A",
      },
    },
    Text: {
      baseStyle: {
        py: 2,
        fontFamily: "Euclid Circular A",
        
        fontSize: 'xl',
      },
    },
  },
});

export default MainTheme;
