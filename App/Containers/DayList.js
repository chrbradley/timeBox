import React from 'react'
import { ScrollView, Text } from 'react-native'
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
    buildDay()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>DayList Container</Text>
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
