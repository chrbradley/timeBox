import React, { Component, PropTypes } from 'react'
import { Text, ListView, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'

// For empty lists
import AlertMessage from '../Components/AlertMessageComponent'

// Styles
import styles from './Styles/YearListStyle'

// utilities
import moment from 'moment'
import { map } from 'lodash'
import { buildCalendar } from '../Lib/CalendarHelpers'

// detect changes
const rowHasChanged = (r1, r2) => r1 !== r2
// DataSource configured
const ds = new ListView.DataSource({rowHasChanged})

const Day = (props) => {
  let { day } = props
  return (
    <View style={styles.dateContainer}>
      <Text style={day.notInMonth ? styles.dateTextInactive : styles.dateText}>{day.date}</Text>
    </View>
  )
}

const Week = (props) => {
  let days = props.week.data
  return (
    <View style={styles.monthRow}>
      {map(days, (day) => { return <Day key={day.key} day={day} /> })}
    </View>
  )
}

class YearList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      building: true,
      year: null,
      dataSource: null
    }
  }

  componentWillMount () {
    let year = moment().get('year')

    let dataObjects = buildCalendar()

    this.setState({
      building: false,
      year,
      dataSource: ds.cloneWithRows(dataObjects[year])
    })
  }

  _renderRow = (rowData) => {
    let weeks = rowData.data
    return (
      <View style={styles.listRow}>
        <TouchableOpacity onPress={this.props.monthList}>
          <Text style={styles.monthLabel}>{rowData.month}</Text>
          {map(weeks, (week) => <Week key={week.key} week={week} />)}
        </TouchableOpacity>
      </View>
    )
  }

  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  static propTypes = {
    monthList: PropTypes.func
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this._noRowData()} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.state.year}</Text>
        </View>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          initialListSize={12}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    calendar: state.calendar.calendar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeCalendar: (calendar) => dispatch(Actions.buildCalendar(calendar)),
    monthList: NavigationActions.monthList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YearList)
