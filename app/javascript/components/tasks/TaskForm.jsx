import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TaskForm = props => {
  const { setTask, handleSubmit, task } = props

  return(
    <center>
      <Form style={{"marginTop": "6rem", "width": "max-content"}} className="border px-4 py-4">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter task name" value={task.name} onChange={(e) => setTask({...task, name: e.target.value})} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" value={task.description} onChange={(e) => setTask({...task, description: e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Deadline</Form.Label>
          <Form.Control type="datetime-local" placeholder="Deadline" value={task.deadline} onChange={(e) => setTask({...task, deadline: e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="status" onChange={(e) => setTask({...task, status: e.target.value})}>
          <Form.Label>Task Status</Form.Label>
          <Form.Check type="radio" label="backlog" value="backlog" name="status" checked={task.status === 'backlog'}/>
          <Form.Check type="radio" label="inprogress" value="inprogress" name="status" checked={task.status === 'inprogress'}/>
          <Form.Check type="radio" label="done" value="done" name="status" checked={task.status === 'done'} />
        </Form.Group>
        <Button variant="dark" type="button" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Form>
    </center>
  )
}

export default TaskForm
