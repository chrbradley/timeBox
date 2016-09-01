import React, {PropTypes} from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

// external libs
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/SplashStyle'

class Splash extends React.Component {

  static propTypes = {
    presentationScreen: PropTypes.func
  }

  componentDidMount () {
    setTimeout(() => { this.props.year() }, 200)
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
    year: NavigationActions.year
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
