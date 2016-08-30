import React, {PropTypes} from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

import Actions from '../Actions/Creators'
import { Metrics } from '../Themes'

// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/SplashStyle'

// I18n
import I18n from '../I18n/I18n.js'

// Components
import RoundedButton from '../Components/RoundedButton'

class Splash extends React.Component {

  static propTypes = {
    presentationScreen: PropTypes.func,
  }

  componentDidMount() {
    setTimeout(() => { this.props.year() }, 200);
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>Splash Container</Text>
        </KeyboardAvoidingView>
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
    year: NavigationActions.year,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
