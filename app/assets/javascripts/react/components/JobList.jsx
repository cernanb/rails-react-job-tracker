import React, { Component } from 'react'
import JobCard from './JobCard'

const JobList = props => {
    // console.log(props)
    return (
      <div className='list'>
        <h3>{props.title}</h3>
        {props.jobs.map((job) => (
          <JobCard key={`job-id-${job.id}`} toggle={props.toggle} job={job} />
        ))}
      </div>)
  }

export default JobList
