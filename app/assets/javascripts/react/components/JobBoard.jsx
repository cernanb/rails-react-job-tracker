import React from 'react'
import JobCard from './JobCard'
import JobList from './JobList'

const JobBoard = props => {
  return (
    <div>
      <JobList id='applied' title="Applied" toggle={props.toggle} jobs={props.jobs.filter((job) => job.status === 'applied')} />

      <JobList id='applied' title="Phone Screen" toggle={props.toggle} jobs={props.jobs.filter((job) => job.status === 'phone-screen')} />

      <JobList id='applied' title="Tech Interview" toggle={props.toggle} jobs={props.jobs.filter((job) => job.status === 'tech-interview')} />

      <JobList id='offer' title="Offer" toggle={props.toggle} jobs={props.jobs.filter((job) => job.status === 'offer')} />
      </div>
  )
}

export default JobBoard
