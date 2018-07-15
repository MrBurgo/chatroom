import { connect } from 'react-redux'

import NewMessageComponent from '../components/NewMessage'
import { newMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(newMessage(message, author))
  }
})

export const NewMessage = connect(() => ({}), mapDispatchToProps)(NewMessageComponent)
