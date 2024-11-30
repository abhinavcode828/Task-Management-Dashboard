import React, { useState } from "react";
import {
  Form,
  Label,
  Input,
  DateInputWrapper,
  TextArea,
  Select,
  Button,
} from "../TaskForm/TaskFormStyles";

function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !dueDate) {
      alert("Title and Due Date are required.");
      return;
    }

    onSubmit({
      id: Date.now(),
      title,
      description,
      dueDate,
      status,
    });

    setTitle("");
    setDescription("");
    setDueDate("");
    setStatus("Pending");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="title">Task Title (Required)</Label>
      <Input
        id="title"
        type="text"
        placeholder="Enter Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        aria-required="true"
      />

      <Label htmlFor="description">Task Description (Optional)</Label>
      <TextArea
        id="description"
        placeholder="Enter Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        aria-describedby="description-help"
      />

      <Label htmlFor="dueDate">Due Date (Required)</Label>
      <DateInputWrapper>
        <Input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
          aria-required="true"
        />
      </DateInputWrapper>

      <Label htmlFor="status">Status</Label>
      <Select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        aria-label="Task Status"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </Select>

      <Button type="submit" aria-label="Add Task">
        Add Task
      </Button>
    </Form>
  );
}

export default TaskForm;
