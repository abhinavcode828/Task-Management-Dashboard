import React, { useState } from "react";
import {
  Card,
  Input,
  Select,
  Actions,
  Content,
} from "../TaskCard/TaskCardStyles";

function TaskCard({ task, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    onEdit(editedTask);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setEditedTask(task);
    setIsEditing(false);
  };

  return (
    <Card>
      {isEditing ? (
        <>
          <label htmlFor="title" style={{ display: "none" }}></label>
          <Input
            id="title"
            aria-label="Task Title"
            value={editedTask.title}
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
          />

          <label htmlFor="description" style={{ display: "none" }}></label>
          <textarea
            id="description"
            aria-label="Task Description"
            value={editedTask.description}
            onChange={(e) =>
              setEditedTask({ ...editedTask, description: e.target.value })
            }
            rows="3"
            style={{ marginBottom: "0.5rem" }}
          />

          <label htmlFor="dueDate" style={{ display: "none" }}></label>
          <Input
            id="dueDate"
            type="date"
            aria-label="Task Due Date"
            value={editedTask.dueDate}
            onChange={(e) =>
              setEditedTask({ ...editedTask, dueDate: e.target.value })
            }
          />

          <label htmlFor="status" style={{ display: "none" }}></label>
          <Select
            id="status"
            value={editedTask.status}
            onChange={(e) =>
              setEditedTask({ ...editedTask, status: e.target.value })
            }
            aria-label="Task Status"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </Select>

          <Actions>
            <button
              className="save"
              onClick={handleSave}
              aria-label="Save Task"
            >
              Save
            </button>
            <button
              className="cancel"
              onClick={handleCancel}
              aria-label="Cancel Task Edit"
            >
              Cancel
            </button>
          </Actions>
        </>
      ) : (
        <>
          <Content>
            <h3>{task.title}</h3>
            <p>
              <strong>Description:</strong>{" "}
              {task.description.length > 50
                ? task.description.substring(0, 50) + "..."
                : task.description}
            </p>
            <p>
              <strong>Due Date:</strong>{" "}
              {new Date(task.dueDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Status:</strong> {task.status}
            </p>
          </Content>

          <Actions>
            <button
              className="edit"
              onClick={handleEdit}
              aria-label="Edit Task"
            >
              Edit
            </button>
            <button
              className="delete"
              onClick={() => onDelete(task.id)}
              aria-label="Delete Task"
            >
              Delete
            </button>
          </Actions>
        </>
      )}
    </Card>
  );
}

export default TaskCard;
