import React, { Component } from 'react'

import Sidebar from './containers/Sidebar'
import MessageList from './containers/MessageList'
import NewMessage from './containers/NewMessage'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessageList />
          <NewMessage />
        </section>
      </div>
    )
  }
}
