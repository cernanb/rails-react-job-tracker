import React, { Component } from 'react'
import TaskList from './TaskList'

class JobCard extends Component {
  constructor() {
    super(...arguments)
    this.state ={
      showDetails: false
    }
  }

  showDetails() {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    let { job } = this.props
    let details, bgColor;

    if (this.state.showDetails) {
      details = (
        <div className="card-details">
          <div className="job-card-company">
            {job.company}
            <TaskList tasks={job.tasks} toggle={this.props.toggle} cardId={job.id} />
          </div>
        </div>
      )

      // bgColor = {
      //     background: 'rgba(216, 230, 231, 0.2)'
      // }
    }



    return (
      <div className='job-card' style={bgColor} >
        <div />
        <div className='job-card-title'
             onClick={this.showDetails.bind(this)} >
          {job.title}
        </div>
        {details}
      </div>
    )
  }
}

export default JobCard
