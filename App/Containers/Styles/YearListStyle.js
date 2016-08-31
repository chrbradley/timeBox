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
    backgroundColor: Colors.fire
  },
  monthLabel: {
    fontWeight: 'bold',
    // alignSelf: 'center',
    // textAlign: 'center',
    marginBottom: Metrics.smallMargin,
    color: Colors.snow
  },
  monthRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
    // flexWrap: 'nowrap',
    // alignItems: 'space-around',
  },
  dateContainer: {
    backgroundColor: Colors.coal,
    width: dateWidth,
    height: dateHeight
  },
  dateText: {
    textAlign: 'center',
    fontSize: 10,
    color: Colors.snow
  },
  label: {
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center'
  }
})
