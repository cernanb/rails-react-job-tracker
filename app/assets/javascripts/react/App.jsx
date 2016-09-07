import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render () {
    return (
      <h1>Hello from react</h1>
    )
  }
}
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    render(<App />, document.getElementById('app'))
  }
}
