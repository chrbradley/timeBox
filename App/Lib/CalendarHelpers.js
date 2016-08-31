import Calendar from 'moment-calendar'
import moment from 'moment'

export const buildCalendar = () => {
  let year = moment().get('year')
  let calendar = new Calendar()

  let data = {}
  data[year] = []

  calendar.setStart(new Date(year, 0, 1))
  calendar.setEnd(new Date(year, 11, 31))

  let months = calendar.months(year)

  months.forEach((month) => {
    let monthAbrv = month.start.format('MMM')
    let key = `${year}_${monthAbrv}`

    let monthObj = {
      key,
      month: monthAbrv,
      data: []
    }

    let weeks = month.weeks()

    weeks.forEach((week) => {
      let weekNum = week.start.get('week')
      let key = `${year}_${monthAbrv}_${weekNum}`

      let weekObj = {
        key,
        week: weekNum,
        data: []
      }

      let days = week.days()

      days.forEach((day) => {
        let date = day.start.get('date')
        let dayOfYear = day.start.get('dayOfYear')
        let key = `${year}_${monthAbrv}_${weekNum}_${dayOfYear}`

        let dayObj = {
          key,
          date,
          day: dayOfYear
        }

        weekObj.data.push(dayObj)
      })
      monthObj.data.push(weekObj)
    })
    data[year].push(monthObj)
  })

  return data
}
