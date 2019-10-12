import React from "react"
import Header from "./header"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import GlobalStyles from "../../utils/global-styles"
import { ThemeProvider } from "emotion-theming"
import { theme, Theme } from "../../utils/theme"
import Footer from "./footer"
import { setPadding } from "./shared"

const Layout: React.FC = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />

      <main css={setPadding}>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
