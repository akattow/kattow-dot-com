/** @jsx jsx */
import { jsx } from "theme-ui"

export const Section: React.FC = ({ children }) => (
  <section
    sx={{
      py: 4,
    }}
  >
    {children}
  </section>
)
