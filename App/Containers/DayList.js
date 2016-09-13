import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
// import Actions from '../Actions/Creators'
// import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/DayListStyle'

// utilities
// import moment from 'moment'
// import { map } from 'lodash'
import { buildDay } from '../Lib/CalendarHelpers'

class DayList extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  renderHours = () => {
    let hours = buildDay()
    return hours.map((hour, i) => {
      return (
        <View key={`${hour}_${i}`} style={styles.hourRow}>
          <Text style={styles.hourLabel}>{hour}</Text>
          <View style={styles.boxContainer}>
            <View style={styles.box}><Text>15 min</Text></View>
            <View style={styles.box}><Text>15 min</Text></View>
            <View style={styles.box}><Text>15 min</Text></View>
            <View style={styles.box}><Text>15 min</Text></View>
          </View>
        </View>
      )
    })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        {this.renderHours()}
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(DayList)
