/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Event } from "../utils/interfaces"
import useSpeaking from "../hooks/useSpeaking"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import { Section } from "../components/layout/shared"
import { SecretUl, ExternalLink } from "../components/utils"

const Speak: React.FC = () => {
  const events: Event[] = useSpeaking()
  const today = new Date()

  const futureEvents = events.filter(event => new Date(event.endDate) >= today)
  const pastEvents = events.filter(event => new Date(event.endDate) < today)

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

interface DateOptions {
  year?: string
  month?: string
  day?: string
}

const getFormattedDate = (
  date: Date,
  options: DateOptions = { month: "long", day: "numeric" },
  locale = "en-US"
) => date.toLocaleDateString(locale, options)

const getDateRange = (startString: string, endString: string) => {
  const startDate = new Date(startString)
  const endDate = new Date(endString)

  startDate.setUTCHours(startDate.getTimezoneOffset() / 60)
  endDate.setUTCHours(endDate.getTimezoneOffset() / 60)

  // is multi-day?
  const oneDayEvent = startString === endString

  // span months?
  const sameMonth = startDate.getMonth() === endDate.getMonth()

  const start = getFormattedDate(startDate)
  if (oneDayEvent)
    return `${start}, ${getFormattedDate(startDate, { year: "numeric" })}`

  if (sameMonth && !oneDayEvent)
    return `${start}-${getFormattedDate(endDate, {
      day: "numeric",
    })}, ${getFormattedDate(endDate, { year: "numeric" })}`

  return `${start} - ${getFormattedDate(endDate)}, ${getFormattedDate(endDate, {
    year: "numeric",
  })}`
}

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
      <ExternalLink target={event.eventSite}>{event.eventName}</ExternalLink>
      <p>{event.title}</p>
      <span>{date}</span>
    </li>
  )
}
