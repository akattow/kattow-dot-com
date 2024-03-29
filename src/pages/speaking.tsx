/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Event } from "../utils/interfaces"
import useSpeaking from "../hooks/useSpeaking"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import { Section, SecretUl, ExternalLink, ContentDetail } from "../components/utils"
import { getDateRange } from "../utils/dates"

const Speak: React.FC = () => {
  const events: Event[] = useSpeaking()
  const today = new Date()

  const futureEvents = events
    .filter(event => new Date(event.endDate) >= today)
    .sort((a, b) => {
      if (a.startDate > b.startDate) return -1
      if (a.startDate < b.startDate) return 1
      return 0
    })

  const pastEvents = events
    .filter(event => new Date(event.endDate) < today || event.cancelled)
    .sort((a, b) => {
      if (a.startDate > b.startDate) return -1
      if (a.startDate < b.startDate) return 1
      return 0
    })

  return (
    <Layout>
      <SEO pageTitle="Speaking" pathname="/speaking" />
      <Section>
        <h1>speaking</h1>
        <p>
          If you'd like to hear about web accessibility or building good habits
          as a developer, <a href={`mailto:hello@kattow.dev`}>reach out</a>{" "}
          and let me know!
        </p>
        <br />
        {futureEvents.length > 0 && (
          <>
            <h2>upcoming speaking</h2>
            <SecretUl>
              {futureEvents.map((event: Event) => (
                <SpeakingEvent event={event} key={event.startDate} />
              ))}
            </SecretUl>
          </>
        )}
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

const SpeakingEvent: React.FC<{ event: Event }> = ({ event }) => {
  const date = getDateRange(event.startDate, event.endDate)

  return (
    <li
      sx={{
        "> *": {
          marginTop: 0,
        },
        marginBottom: [4],
      }}
    >
      <strong>
        <ExternalLink target={event.eventSite}>{event.eventName}</ExternalLink>
      </strong>
      <p>{event.title}</p>
      {event.cancelled ? (
        <ContentDetail>Cancelled due to COVID-19</ContentDetail>
      ) : (
        <ContentDetail>{date}</ContentDetail>
      )}
      <ContentDetail>{event.location}</ContentDetail>
      {event.slides && (
        <ContentDetail>
          <a href={event.slides}>Slides</a>
        </ContentDetail>
      )}
      {event.withNotes && (
        <ContentDetail>
          <a href={event.withNotes}>Slides with speaker notes</a>
        </ContentDetail>
      )}
    </li>
  )
}


