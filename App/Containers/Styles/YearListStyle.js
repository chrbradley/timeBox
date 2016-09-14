import { Dimensions, StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

const { width } = Dimensions.get('window')
const monthWidth = ((width - (Metrics.smallMargin * 2)) * 0.333) - (Metrics.smallMargin * 0.5)
const monthHeight = monthWidth * 1.05
const dateWidth = monthWidth / 7
const dateHeight = dateWidth

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: Metrics.navBarHeight,
    marginHorizontal: Metrics.smallMargin,
    backgroundColor: Colors.background
  },
  yearContainer: {
  },
  yearLabelContainer: {
    borderBottomWidth: 1,
    borderColor: Colors.steel
  },
  yearLabel: {
    fontSize: 24,
    fontWeight: '200'
  },
  monthsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: Metrics.smallMargin
  },
  monthContainer: {
    width: monthWidth,
    height: monthHeight,
    backgroundColor: Colors.background
  },
  monthLabel: {
    fontSize: 12,
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
    fontSize: 8,
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
