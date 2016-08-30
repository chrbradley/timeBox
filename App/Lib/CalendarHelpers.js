import Calendar from 'moment-calendar';
import moment from 'moment';

import shortid from 'shortid';

export const buildCalendar = (year) => {
  let calendar = new Calendar();

  let data = {};
  data[year] = [];

  calendar.setStart(new Date(year, 0, 1));
  calendar.setEnd(new Date(year, 11, 31));
  // let start = new moment('2016-01-01');
  // let end = start.add(1, 'hours');

  // console.log('event: ', event);

  // let counter = 365;
  //
  // while (counter) {
  //   let event = {
  //     start,
  //     end,
  //     id: shortid.generate(),
  //   };
  //
  //   calendar.push(event);
  //   start = start.add(1, 'days');
  //   end = start.add(1, 'hours');
  //   counter--;
  // }


  let months = calendar.months(year);
  // console.log('calendar.months(year): ', months);

  months.forEach((month) => {
    let monthAbrv = month.start.format('MMM');
    let key = `${year}_${monthAbrv}`;

    let monthObj = {
      key,
      month: monthAbrv,
      data: [],
    };

    // if(!data[year][monthAbrv]) {
    //   data[year][monthAbrv] = {};
    // }

    let weeks = month.weeks();
    // console.log('weeks: ', weeks);

    weeks.forEach((week) => {
      let weekNum = week.start.get('week');
      let key = `${year}_${monthAbrv}_${weekNum}`;

      let weekObj = {
        key,
        week: weekNum,
        data:[],
      };
      // console.log('weekNum: ', weekNum);

      // if(!data[year][monthAbrv][weekNum]) {
      //   data[year][monthAbrv][weekNum] = {};
      // }

      let days = week.days();
      // console.log('days: ', days);

      days.forEach((day) => {
        let date = day.start.get('date');
        let dayOfYear = day.start.get('dayOfYear');
        let key = `${year}_${monthAbrv}_${weekNum}_${dayOfYear}`;

        let dayObj = {
          key,
          date,
          day: dayOfYear,
        };

        // console.log('date: ', date);

        // if(!data[year][monthAbrv][weekNum][date]) {
        //   data[year][monthAbrv][weekNum][date] = {};
        // }

        // console.log('day: ', day);
        // let hours = day.hours();
        //
        // hours.forEach((hour) => {
        //   let hourNum = hour.start.get('hour');
        //   console.log('hourNum: ', hourNum);
        // });
        weekObj.data.push(dayObj);
      });
      monthObj.data.push(weekObj);
    });
    data[year].push(monthObj);
  });

  console.log('data: ', data);
  return data;
};
