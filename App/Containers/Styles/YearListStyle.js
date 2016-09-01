import { Dimensions, StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

const { width } = Dimensions.get('window')
const rowWidth = width * 0.3
const rowHeight = rowWidth
const dateWidth = rowWidth / 7
const dateHeight = dateWidth

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: Colors.steel
  },
  title: {
    margin: Metrics.smallMargin,
    fontSize: 24,
    fontWeight: '200'
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
  },
  monthLabel: {
    fontSize: 14,
    marginBottom: Metrics.smallMargin,
    color: Colors.fire
  },
  monthRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  dateContainer: {
    justifyContent: 'center',
    width: dateWidth,
    height: dateHeight
  },
  dateText: {
    textAlign: 'center',
    fontSize: 10,
    color: Colors.coal
  },
  dateTextInactive: {
    textAlign: 'center',
    fontSize: 6,
    color: Colors.background
  },
  label: {
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center'
  }
})
