export interface Event {
  eventName: string
  eventSite: string
  startDate: string
  endDate: string
  cancelled: boolean
  location: string
  type: string
  title: string
  slides: string
  withNotes: string
}

export interface BlogPost {
  title: string
  slug: string
  publishDate: string
  draft: boolean
  timeToRead: number
  image?: string
  imageAlt?: string
}
