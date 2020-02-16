/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { parse, format, compareAsc } from "date-fns"
import { Event } from "../utils/interfaces"
import useSpeaking from "../hooks/useSpeaking"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import { Section } from "../components/layout/shared"
import { SecretUl, ExternalLink } from "../components/utils"

const Speak: React.FC = () => {
  const events: Event[] = useSpeaking()
    // sort oldest to future-est
    .sort((a: Event, b: Event) =>
      compareAsc(
        parse(a.startDate, "MM-dd-yyyy", new Date()),
        parse(b.startDate, "MM-dd-yyyy", new Date())
      )
    )

  const futureEvents = events.filter(
    (event: Event) =>
      compareAsc(parse(event.startDate, "MM-dd-yyyy", new Date()), Date.now()) >
      0
  )

  const pastEvents = events.filter(
    (event: Event) =>
      compareAsc(parse(event.startDate, "MM-dd-yyyy", new Date()), Date.now()) <
      0
  )

  return (
    <Layout>
      <SEO pageTitle="Speaking" />
      <Section>
        <h1>speaking</h1>
        <p>
          I'm still looking for additional speaking opportunities in 2020! If
          you'd like to hear about web accessibility or building good habits as
          a developer, <a href={`mailto:kattow88@gmail.com`}>reach out</a> and
          let me know!
        </p>
        <br />
        <h2>upcoming speaking</h2>
        <SecretUl>
          {futureEvents.map((event: Event) => (
            <SpeakingEvent event={event} key={event.startDate} />
          ))}
        </SecretUl>
        <h2>past speaking</h2>
        <SecretUl>
          {pastEvents.map((event: Event) => (
            <SpeakingEvent event={event} key={event.startDate} />
          ))}
        </SecretUl>
      </Section>
    </Layout>
  )
}

export default Speak

const SpeakingEvent: React.FC<{ event: Event }> = ({ event }) => (
  <li
    sx={{
      "> *": {
        marginTop: 0,
      },
      marginBottom: [4],
    }}
  >
    <ExternalLink target={event.eventSite}>{event.eventName}</ExternalLink>
    <p>{event.title}</p>
    <span>
      {format(parse(event.startDate, "MM-dd-yyyy", new Date()), "MMMM d, yyyy")}
    </span>
  </li>
)
