import { Dimensions, StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

const { width, height } = Dimensions.get('window')
const rowWidth = width * 0.95
const rowHeight = height * 0.8
const dateWidth = rowWidth / 7
const dateHeight = height / 10

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  title: {
    margin: Metrics.smallMargin
  },
  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  listRow: {
    width: rowWidth,
    height: rowHeight,
    margin: Metrics.smallMargin,
    backgroundColor: Colors.background
    // borderWidth: 1,
    // borderColor: Colors.fire
  },
  monthLabel: {
    fontSize: 40,
    marginBottom: Metrics.smallMargin,
    color: Colors.coal
  },
  monthRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: Colors.steel,
    borderTopWidth: 1
  },
  dateContainer: {
    justifyContent: 'center',
    backgroundColor: Colors.white,
    width: dateWidth,
    height: dateHeight
  },
  dateText: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.coal
  },
  dateTextInactive: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.steel
  },
  label: {
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center'
  }
})
