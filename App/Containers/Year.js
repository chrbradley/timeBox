import React from 'react'
import { ScrollView, Text, ListView, View } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/YearStyle'

// utilities
import moment from 'moment';
import { map } from 'lodash';
import { buildCalendar } from '../Lib/CalendarHelpers';

class Year extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      building: true,
      calendar: null,
    }
  }

  // componentWillMount () {
  //   buildCalendar();
  // }

  componentDidMount() {
    let calendar = buildCalendar()
    this.setState({
      building: false,
      calendar: calendar,
    })
  }
  renderDay(day, key) {
    console.log('day: ', key);
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{key}</Text>
      </View>
    )
  }

  renderWeek(week, key) {
    console.log('week: ', key);
    return (
      <View style={styles.container}>
        {map(week, (day, key) => this.renderDay(day, key))}
      </View>
    )
  }

  renderMonth(month, i) {
    console.log('month: ', i);
    let displayMonth = moment().month(i).format('MMM');
    return (
      <View key={`${displayMonth}i`} style={styles.monthContainer}>
        <Text style={styles.boldLabel}>{displayMonth}</Text>
        {map(month, (week, key) => this.renderWeek(week, key))}
      </View>
    )
  }

  render () {
    let { calendar } = this.state;
    let result = null;
    let year = new moment().get('year');
    if (calendar) {
      console.log('calendar: ', calendar);
      result = (
        <View style={styles.container}>
          {/* <Text style={styles.boldLabel}>{year}</Text> */}
          {map(calendar[year], (month, i) => this.renderMonth(month, i))}
        </View>);
    }
    return result;
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Year)
