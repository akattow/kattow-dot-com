/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { Section } from "../components/layout/shared"

const ImportantDetails: React.FC = () => {
  return (
    <Section>
      <h2>important details</h2>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: ["1f", "1fr", "1fr", "1fr 1fr"],
          "> *": {
            mt: 0,
          },
          gridGap: 4,
        }}
      >
        <div>
          <h3>favorite shows</h3>
          <ul>
            <li>Steven Universe</li>
            <li>She-Ra and the Princesses of Power</li>
            <li>The Good Place</li>
          </ul>
        </div>

        <div>
          <h3>favorite board games</h3>
          <ul>
            <li>Root</li>
            <li>Bargain Quest</li>
            <li>Wingspan</li>
          </ul>
        </div>

        <div>
          <h3>favorite foods</h3>
          <ul>
            <li>Pizza</li>
            <li>Dirty chai</li>
            <li>Cream cheese rangoons</li>
          </ul>
        </div>

        <div>
          <h3>ask me about</h3>
          <ul>
            <li>My pug, Mochi</li>
            <li>Living in Japan</li>
            <li>Being an all-state mime</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default ImportantDetails
