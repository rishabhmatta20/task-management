import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

const Tasks = ({ tasks }) => {
  return(
    <center>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>{task.deadline}</td>
                <td>{task.status}</td>
                <td><a href={`/tasks/${task.id}/edit`}>Edit</a></td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </center>
  )
}

export default Tasks
