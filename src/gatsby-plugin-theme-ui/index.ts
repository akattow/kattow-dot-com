export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ["0", "40em", "52em", "64em"],
  fonts: {
    body: "Nunito, system-ui, sans-serif",
    heading: "Montserrat",
    monospace: '"Fira Code", Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  colors: {
    text: "#524D5D",
    background: "#fff",
    primary: "#007A75",
    secondary: "#1B0458",
    highlight: "#89BD00",
    muted: "#f6f6ff",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0fc",
        secondary: "#0cf",
        highlight: "#f0c",
        muted: "#011",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
  },
}
