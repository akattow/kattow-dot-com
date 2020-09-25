import { graphql, useStaticQuery } from "gatsby"

const useSpeaking = () => {
  const { allSpeakingYaml } = useStaticQuery(graphql`
    query {
      allSpeakingYaml {
        nodes {
          eventName
          eventSite
          startDate
          endDate
          cancelled
          location
          type
          title
          slides
        }
      }
    }
  `)

  return allSpeakingYaml.nodes
}

export default useSpeaking
