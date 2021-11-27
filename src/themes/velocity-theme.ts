import { deepMerge } from "grommet/utils";
import { grommet, ThemeType } from "grommet/themes";

export const velocityTheme: ThemeType = deepMerge(grommet, {
  global: {
    focus: { outline: { color: "#FF8300" } },
    font: {
      family: "'Lato', Arial, sans-serif",
      face: `@font-face {
              font-family:"Lato";
              src: url("/public/Lato/Lato-Regular.ttf") format('truetype')
              }
            @font-face {
              font-family:"Lato";
              src: url("/public/Lato/Lato-Italic.ttf") format('truetype');
              font-style : "italic"
            }
            @font-face {
              font-family:"Lato";
              src: url("/public/Lato/Lato-Bold.ttf") format('truetype');
              font-weight : 700;
            }
            @font-face {
              font-family:"Lato";
              src: url("/public/Lato/Lato-BoldItalic.ttf") format('truetype');
              font-weight : 700;
              font-style : "italic"
            }

              @font-face {
                font-family:"Lato";
                src: url("/public/Lato/Lato-Black.ttf") format('truetype');
                font-weight : 900
              }
              @font-face {
                font-family:"Lato";
                src: url("/public/Lato/Lato-BlackItalic.ttf") format('truetype');
                font-weight : 900;
                font-style : "italic"
              }
              `,
    },
  },
});
