import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  localStorage.clear();
});

describe("App Component", () => {
  test("renders the task manager header", () => {
    render(<App />);
    expect(screen.getByText("Task Management Dashboard")).toBeInTheDocument();
  });

  test("renders task form and controls", () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText("Search tasks by title or description...")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Filter by Status")).toBeInTheDocument();
    expect(screen.getByLabelText("Sort by Due Date")).toBeInTheDocument();
  });

  test("adds a new task", () => {
    render(<App />);

    const taskTitle = "New Task";
    const taskDescription = "This is a new task.";
    const taskDueDate = "2024-12-15";

    fireEvent.change(screen.getByPlaceholderText("Enter Task Title"), {
      target: { value: taskTitle },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter Task Description"), {
      target: { value: taskDescription },
    });
    fireEvent.change(screen.getByLabelText("Due Date (Required)"), {
      target: { value: taskDueDate },
    });
    fireEvent.click(screen.getByText("Add Task"));
    expect(screen.getByText(taskTitle)).toBeInTheDocument();
    expect(screen.getByText(taskDescription)).toBeInTheDocument();
  });

  test("searches tasks by title and description", () => {
    render(<App />);
    const searchQuery = "Client";

    fireEvent.change(
      screen.getByPlaceholderText("Search tasks by title or description..."),
      {
        target: { value: searchQuery },
      }
    );

    expect(screen.getByText("Meeting with Client")).toBeInTheDocument();
    expect(
      screen.queryByText("Complete Project Report")
    ).not.toBeInTheDocument();
  });

  test("filters tasks based on status", () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText("Filter by Status"), {
      target: { value: "Pending" },
    });

    expect(screen.getByText("Complete Project Report")).toBeInTheDocument();
    expect(screen.getByText("Meeting with Client")).toBeInTheDocument();
    expect(screen.queryByText("Update Website")).not.toBeInTheDocument();
  });

  test("opens confirmation modal on task delete", () => {
    render(<App />);
    fireEvent.click(screen.getAllByText("Delete")[0]);

    expect(
      screen.getByText("Are you sure you want to delete this task?")
    ).toBeInTheDocument();
  });

  test("deletes task on confirm", () => {
    render(<App />);

    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);
    fireEvent.click(screen.getByText("Yes"));

    expect(
      screen.queryByText("Complete Project Report")
    ).not.toBeInTheDocument();
  });

  test("closes the modal on cancel", () => {
    render(<App />);
    fireEvent.click(screen.getAllByText("Delete")[0]);

    fireEvent.click(screen.getByText("No"));
    expect(
      screen.queryByText("Are you sure you want to delete this task?")
    ).not.toBeInTheDocument();
  });
});
