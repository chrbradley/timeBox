import React from 'react'
import { Dimensions, Text, ListView, View, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
// import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'

// For empty lists
import AlertMessage from '../Components/AlertMessageComponent'

// Styles
import styles from './Styles/MonthListStyle'

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

const gotoDay = () => {
  NavigationActions.dayList()
}

const Week = (props) => {
  let days = props.week.data
  return (
    <TouchableOpacity onPress={() => gotoDay()}>
      <View style={styles.monthRow}>
        {map(days, (day) => { return <Day key={day.key} day={day} /> })}
      </View>
    </TouchableOpacity>
  )
}

class MonthList extends React.Component {

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
      dataSource: ds.cloneWithRows(dataObjects[year])
    })
  }

  _renderRow = (rowData) => {
    let weeks = rowData.data
    const { height } = Dimensions.get('window')
    const rowHeight = height * 0.1 * (weeks.length + 1)

    return (
      <ScrollView style={[styles.listRow, {height: rowHeight}]}>
        <Text style={styles.monthLabel}>{rowData.month}</Text>
        {map(weeks, (week) => <Week key={week.key} week={week} />)}
      </ScrollView>
    )
  }

  _noRowData () {
    return this.state.dataSource ? this.state.dataSource.getRowCount() === 0 : !this.state.dataSource
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this._noRowData()} />
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthList)
