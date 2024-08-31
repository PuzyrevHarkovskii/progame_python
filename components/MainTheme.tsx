// theme.js
import { ListItem, extendTheme } from "@chakra-ui/react";

const MainTheme = extendTheme({
  
  styles: {
    global: {
      // Добавляем глобальные стили, чтобы применить шрифты ко всему тексту
     
      
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
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
          py: 3,
          px: 3,
          border: "1px solid",
          borderColor: "gray.200",
          borderRadius: "md",
          borderLeftColor: "blue.300",
          borderLeftWidth: "6px",
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
       

        
        
      },
      darkBaseStyle: {color: 'white'}
    },
    Text: {
      baseStyle: {
        py: 2,
       
        fontSize: "xl",
        // color: "#5d5e7c",
      },
    },
    Code: {
      baseStyle: {
        py: 2,
       
        fontSize: "xl",
        // color: "#5d5e7c",
      },
    },
    ListItem: {
      baseStyle: {
        py: 2,
        
        fontSize: "xl",
      },
    },
  },
});

export default MainTheme;
