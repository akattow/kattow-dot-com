interface DateOptions {
  year?: string
  month?: string
  day?: string
}

export const getFormattedDate = (
  date: Date,
  options: DateOptions = { month: "long", day: "numeric" },
  locale = "en-US"
) => date.toLocaleDateString(locale, options)

export const getDateRange = (startString: string, endString: string) => {
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
