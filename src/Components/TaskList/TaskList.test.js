import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "./TaskList";

jest.mock("../TaskCard/TaskCard", () => ({ task, onEdit, onDelete }) => (
  <div>
    <h3>{task.title}</h3>
    <button onClick={() => onEdit(task)}>Edit</button>
    <button onClick={() => onDelete(task.id)}>Delete</button>
  </div>
));

describe("TaskList Component", () => {
  const mockOnEditTask = jest.fn();
  const mockConfirmDeleteTask = jest.fn();
  const mockSetTasks = jest.fn();

  const tasks = [
    { id: 1, title: "Task 1", description: "Description 1" },
    { id: 2, title: "Task 2", description: "Description 2" },
  ];

  beforeEach(() => {
    mockOnEditTask.mockClear();
    mockConfirmDeleteTask.mockClear();
    mockSetTasks.mockClear();
  });

  test("renders the tasks list", () => {
    render(
      <TaskList
        tasks={tasks}
        onEditTask={mockOnEditTask}
        confirmDeleteTask={mockConfirmDeleteTask}
        setTasks={mockSetTasks}
      />
    );

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });

  test("shows NoTasksMessage when no tasks are provided", () => {
    render(
      <TaskList
        tasks={[]}
        onEditTask={mockOnEditTask}
        confirmDeleteTask={mockConfirmDeleteTask}
        setTasks={mockSetTasks}
      />
    );

    expect(
      screen.getByText(
        "No matching tasks found ☹. Try a different filter or add tasks."
      )
    ).toBeInTheDocument();
  });

  test("calls onEditTask when Edit button is clicked", () => {
    render(
      <TaskList
        tasks={tasks}
        onEditTask={mockOnEditTask}
        confirmDeleteTask={mockConfirmDeleteTask}
        setTasks={mockSetTasks}
      />
    );

    fireEvent.click(screen.getAllByText("Edit")[0]);
    expect(mockOnEditTask).toHaveBeenCalledWith(tasks[0]);
  });

  test("calls confirmDeleteTask when Delete button is clicked", () => {
    render(
      <TaskList
        tasks={tasks}
        onEditTask={mockOnEditTask}
        confirmDeleteTask={mockConfirmDeleteTask}
        setTasks={mockSetTasks}
      />
    );

    fireEvent.click(screen.getAllByText("Delete")[0]);
    expect(mockConfirmDeleteTask).toHaveBeenCalledWith(1);
  });
});
