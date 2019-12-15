import React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"

import Header from "./header"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import GlobalStyles from "../../utils/global-styles"
import Footer from "./footer"

const Layout: React.FC = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <div>
      <GlobalStyles />
      <Header />

      <main
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
