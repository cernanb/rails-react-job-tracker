import React, { Component } from 'react'

class TaskList extends Component {
  render() {
    const tasks = this.props.tasks.map((task, taskIndex) => (
      <li key={task.id} className='checklist-task'>
        <input type='checkbox'
               name='task'
               className='strikethrough'
               checked={task.done}
               onChange={this.props.toggle.bind(null, this.props.cardId, task.id, taskIndex)}
           />
         <label htmlFor='task'>{task.name}</label>
        <a href='#' className='checklist-task-remove' />
      </li>
    ))
    return (
      <div className='checklist'>
        <ul>{tasks}</ul>
        <input type='text'
               className='checklist-add-task'
               placeholder='Enter tasks here...' />
      </div>
    )
  }
}

export default TaskList
