import React, { useState } from "react";
import {
  TaskListContainer,
  DraggableItem,
  NoTasksMessage,
} from "../TaskList/TaskListStyles";
import TaskCard from "../TaskCard/TaskCard";

function TaskList({ tasks, onEditTask, confirmDeleteTask, setTasks }) {
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();

    if (draggedIndex === index) return;

    const reorderedTasks = [...tasks];
    const [draggedTask] = reorderedTasks.splice(draggedIndex, 1);
    reorderedTasks.splice(index, 0, draggedTask);
    setTasks(reorderedTasks);

    setDraggedIndex(index);
  };

  const handleDrop = () => {
    setDraggedIndex(null);
  };

  return (
    <>
      {tasks.length === 0 ? (
        <NoTasksMessage>
          No matching tasks found ☹. Try a different filter or add tasks.
        </NoTasksMessage>
      ) : (
        <TaskListContainer>
          {tasks.map((task, index) => (
            <DraggableItem
              key={task.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={handleDrop}
            >
              <TaskCard
                task={task}
                onEdit={(updatedTask) => onEditTask(updatedTask)}
                onDelete={(id) => confirmDeleteTask(id)}
              />
            </DraggableItem>
          ))}
        </TaskListContainer>
      )}
    </>
  );
}

export default TaskList;
