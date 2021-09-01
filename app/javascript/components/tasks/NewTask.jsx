import React, { useState } from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'

const NewTask = ({ task }) => {
  const [newTask, setTask] = useState({})

  const handleSubmit = () => {
    axios
      .post(`/tasks`, { task: newTask })
      .then((res) => {
        res.data.created && alert("Task has been successfully created")
      })
  }

  return <TaskForm setTask={setTask} handleSubmit={handleSubmit} task={newTask} />
}

export default NewTask
