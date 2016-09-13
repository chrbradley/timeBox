import { Dimensions, StyleSheet } from 'react-native'

import {
  Colors,
  Metrics
  // ApplicationStyles
} from '../../Themes/'

const { width } = Dimensions.get('window')
const labelWidth = width * 0.12
const boxWidth = width - labelWidth

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    marginHorizontal: 5,
    backgroundColor: Colors.background
  },
  hourRow: {
    // flex: 1,
    flexDirection: 'row'
    // marginTop: Metrics.navBarHeight,
    // backgroundColor: Colors.background
  },
  hourLabel: {
    // textAlign: 'center',
    width: labelWidth,
    height: 12,
    fontSize: 12,
    color: Colors.steel
    // backgroundColor: Colors.bg1
  },
  boxContainer: {
    width: boxWidth,
    // backgroundColor: Colors.bg3,
    borderColor: Colors.steel,
    borderTopWidth: 1
  },
  box: {
    // backgroundColor: Colors.bg5
  }
})
