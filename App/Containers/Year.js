import React from 'react'
import { ScrollView, Text, ListView, View } from 'react-native'
import { connect } from 'react-redux'

import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'

// For empty lists
import AlertMessage from '../Components/AlertMessageComponent'

// Styles
import styles from './Styles/YearStyle'

// utilities
import moment from 'moment';
import { map } from 'lodash';
import { buildCalendar } from '../Lib/CalendarHelpers';

// detect changes
const rowHasChanged = (r1, r2) => r1 !== r2;
// DataSource configured
const ds = new ListView.DataSource({rowHasChanged});

class Year extends React.Component {

  constructor (props) {
    super(props)


    this.state = {
      building: true,
      year: null,
      dataSource: null,
    }
  }

  componentWillMount () {
    let year = moment().get('year');
    console.log('year: ', year);

    let dataObjects = buildCalendar(year);
    console.log('dataObjects: ', dataObjects);


    this.setState({
      building: false,
      year,
      dataSource: ds.cloneWithRows(dataObjects[year]),
    });
  }

  // componentDidMount() {
  //   let calendar = buildCalendar()
  //   this.setState({
  //     building: false,
  //     calendar: calendar,
  //   })
  // }
  //
  // renderDay(day, key) {
  //   // console.log('day: ', key);
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.label}>{key}</Text>
  //     </View>
  //   )
  // }
  //
  // renderWeek(week, key) {
  //   // console.log('week: ', key);
  //   return (
  //     <View style={styles.container}>
  //       {map(week, (day, key) => this.renderDay(day, key))}
  //     </View>
  //   )
  // }
  //
  // renderMonth(month, i) {
  //   // console.log('month: ', i);
  //   let displayMonth = moment().month(i).format('MMM');
  //   return (
  //     <View key={`${displayMonth}i`} style={styles.monthContainer}>
  //       <Text style={styles.boldLabel}>{displayMonth}</Text>
  //       {map(month, (week, key) => this.renderWeek(week, key))}
  //     </View>
  //   )
  // }

  _renderRow (rowData) {
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{rowData.month}</Text>
        <Text style={styles.label}>Row Description</Text>
      </View>
    )
  }

  _noRowData () {
    console.log('rowCount(): ', this.state.dataSource.getRowCount());
    return this.state.dataSource.getRowCount() === 0;
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this._noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
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

export default connect(mapStateToProps, mapDispatchToProps)(Year)
