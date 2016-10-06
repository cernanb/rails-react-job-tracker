import React, { Component } from 'react'
import { render } from 'react-dom'
import Navigation from './components/Navigation'
import 'whatwg-fetch'
import 'babel-polyfill'
import update from 'react-addons-update'

import JobBoard from './components/JobBoard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobList: [],
    }
  }

  componentWillMount(){
    fetch('http://localhost:3000/api/jobs')
      .then(res => res.json())
      .then(data => {
        this.setState({jobList: data.jobs})
      })
  }

  toggle(jobId, taskId, taskIndex) {
    let prevState = this.state

    let jobIndex = this.state.jobList.findIndex((job) => job.id === jobId)

    let updatedDone;

    let newState = update(
      this.state.jobList, {
        [jobIndex]: {
          tasks: {
            [taskIndex]: {
              done: { $apply: (done) => {
                updatedDone = !done
                return updatedDone
              }
            }
          }
        }
      }
    })

    this.setState({jobList: newState})

    fetch(`http://localhost:3000/api/jobs/${jobId}/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({done: updatedDone})
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Cannot connect to server')
      }
    })
    .catch((err) => {
      console.error('Error: ', error)
      this.setState(prevState)
    })
  }

  render () {
    // console.log(this.state)
    return (
      <div className='container'>
        <Navigation />
        <JobBoard jobs={this.state.jobList} toggle={this.toggle.bind(this)}/>
      </div>
    )
  }
}
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    render(<App />, document.getElementById('app'))
  }
}
