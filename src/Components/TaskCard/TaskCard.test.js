import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskCard from "./TaskCard";

describe("TaskCard Component", () => {
  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();
  const task = {
    id: 1,
    title: "Test Task",
    description: "Test task description",
    dueDate: "2024-12-01",
    status: "Pending",
  };

  beforeEach(() => {
    mockOnEdit.mockClear();
    mockOnDelete.mockClear();
  });

  test("renders task details", () => {
    render(
      <TaskCard task={task} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );

    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("Test task description")).toBeInTheDocument();
    expect(screen.getByText("1/12/2024")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();
  });

  test("enters edit mode when Edit button is clicked", () => {
    render(
      <TaskCard task={task} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );

    fireEvent.click(screen.getByLabelText("Edit Task"));

    expect(screen.getByLabelText("Task Title")).toBeInTheDocument();
    expect(screen.getByLabelText("Task Description")).toBeInTheDocument();
    expect(screen.getByLabelText("Task Due Date")).toBeInTheDocument();
    expect(screen.getByLabelText("Task Status")).toBeInTheDocument();
  });

  test("saves edited task and calls onEdit callback", () => {
    render(
      <TaskCard task={task} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );

    fireEvent.click(screen.getByLabelText("Edit Task"));

    fireEvent.change(screen.getByLabelText("Task Title"), {
      target: { value: "Updated Task Title" },
    });
    fireEvent.change(screen.getByLabelText("Task Status"), {
      target: { value: "In Progress" },
    });

    fireEvent.click(screen.getByLabelText("Save Task"));

    expect(mockOnEdit).toHaveBeenCalledWith({
      id: 1,
      title: "Updated Task Title",
      description: "Test task description",
      dueDate: "2024-12-01",
      status: "In Progress",
    });
  });

  test("cancels editing and reverts to original task", () => {
    render(
      <TaskCard task={task} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );

    fireEvent.click(screen.getByLabelText("Edit Task"));

    fireEvent.change(screen.getByLabelText("Task Title"), {
      target: { value: "Updated Task Title" },
    });
    fireEvent.change(screen.getByLabelText("Task Status"), {
      target: { value: "In Progress" },
    });

    fireEvent.click(screen.getByLabelText("Cancel Task Edit"));

    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("Test task description")).toBeInTheDocument();
    expect(screen.getByText("1/12/2024")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();
  });

  test("deletes the task and calls onDelete callback", () => {
    render(
      <TaskCard task={task} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );

    fireEvent.click(screen.getByLabelText("Delete Task"));

    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });
});
