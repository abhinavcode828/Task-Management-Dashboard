import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterSortControls from "./FilterSortControls";

describe("FilterSortControls Component", () => {
  const mockOnFilter = jest.fn();
  const mockOnSort = jest.fn();

  beforeEach(() => {
    mockOnFilter.mockClear();
    mockOnSort.mockClear();
  });

  test("renders the filter and sort dropdowns", () => {
    render(<FilterSortControls onFilter={mockOnFilter} onSort={mockOnSort} />);

    expect(screen.getByLabelText("Filter by Status")).toBeInTheDocument();
    expect(screen.getByLabelText("Sort by Due Date")).toBeInTheDocument();
  });

  test("calls onFilter when a filter option is selected", () => {
    render(<FilterSortControls onFilter={mockOnFilter} onSort={mockOnSort} />);

    fireEvent.change(screen.getByLabelText("Filter by Status"), {
      target: { value: "Pending" },
    });

    expect(mockOnFilter).toHaveBeenCalledWith("Pending");
  });

  test("calls onSort when a sort option is selected", () => {
    render(<FilterSortControls onFilter={mockOnFilter} onSort={mockOnSort} />);

    fireEvent.change(screen.getByLabelText("Sort by Due Date"), {
      target: { value: "asc" },
    });

    expect(mockOnSort).toHaveBeenCalledWith("asc");
  });
});
