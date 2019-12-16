/** @jsx jsx */
import { jsx } from "theme-ui"

export const Section: React.FC = ({ children }) => (
  <section
    sx={{
      py: 4,
      "&:last-of-type": {
        pb: 0,
      },
    }}
  >
    {children}
  </section>
)
