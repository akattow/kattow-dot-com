import React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"

import SkipNavLink from "./skip-nav-link"
import Header from "./header"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import GlobalStyles from "../../utils/global-styles"
import Footer from "./footer"

const Layout: React.FC = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <div>
      <GlobalStyles />
      <SkipNavLink />
      <Header />

      <main
        id="main-content"
        sx={{
          px: [4, 5, 6],
          py: 3,
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
