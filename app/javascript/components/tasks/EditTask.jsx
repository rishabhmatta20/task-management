import React, { useState } from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'

const EditTask = ({ task }) => {
  const [editTask, setTask] = useState(task)

  const handleSubmit = () => {
    axios
      .put(`/tasks/${editTask.id}`, { task: editTask })
      .then((res) => {
        res.data.updated && alert("Task has been updated successfully")
      })
  }

  return <TaskForm setTask={setTask} handleSubmit={handleSubmit} task={editTask} />
}

export default EditTask
