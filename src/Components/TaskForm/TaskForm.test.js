import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "./TaskForm";

describe("TaskForm", () => {
  let mockOnSubmit;

  beforeEach(() => {
    mockOnSubmit = jest.fn();
    render(<TaskForm onSubmit={mockOnSubmit} />);
  });

  test("renders the form correctly", () => {
    expect(
      screen.getByLabelText(/Task Title \(Required\)/i)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Task Description \(Optional\)/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Due Date \(Required\)/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Add Task/i })
    ).toBeInTheDocument();
  });

  test("shows an alert when required fields are missing", () => {
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    fireEvent.click(screen.getByRole("button", { name: /Add Task/i }));
    expect(alertSpy).toHaveBeenCalledWith("Title and Due Date are required.");
    alertSpy.mockRestore();
  });

  test("calls onSubmit with correct data when form is filled correctly", () => {
    fireEvent.change(screen.getByLabelText(/Task Title \(Required\)/i), {
      target: { value: "Test Task" },
    });
    fireEvent.change(screen.getByLabelText(/Task Description \(Optional\)/i), {
      target: { value: "This is a test task" },
    });
    fireEvent.change(screen.getByLabelText(/Due Date \(Required\)/i), {
      target: { value: "2024-12-31" },
    });
    fireEvent.change(screen.getByLabelText(/Status/i), {
      target: { value: "In Progress" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Add Task/i }));

    expect(mockOnSubmit).toHaveBeenCalledWith({
      id: expect.any(Number),
      title: "Test Task",
      description: "This is a test task",
      dueDate: "2024-12-31",
      status: "In Progress",
    });
  });

  test("resets the form fields after submitting", () => {
    fireEvent.change(screen.getByLabelText(/Task Title \(Required\)/i), {
      target: { value: "Test Task" },
    });
    fireEvent.change(screen.getByLabelText(/Task Description \(Optional\)/i), {
      target: { value: "This is a test task" },
    });
    fireEvent.change(screen.getByLabelText(/Due Date \(Required\)/i), {
      target: { value: "2024-12-31" },
    });
    fireEvent.change(screen.getByLabelText(/Status/i), {
      target: { value: "In Progress" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Add Task/i }));

    expect(screen.getByLabelText(/Task Title \(Required\)/i).value).toBe("");
    expect(screen.getByLabelText(/Task Description \(Optional\)/i).value).toBe(
      ""
    );
    expect(screen.getByLabelText(/Due Date \(Required\)/i).value).toBe("");
    expect(screen.getByLabelText(/Status/i).value).toBe("Pending");
  });
});
