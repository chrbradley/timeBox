import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  calendar: null
})

// build calendar
const build = (state, action) =>
  state.merge({
    calendar: action.calendar
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.CALENDAR_BUILD]: build
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
