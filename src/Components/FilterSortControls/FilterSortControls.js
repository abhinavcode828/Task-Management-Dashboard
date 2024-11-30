import React from "react";
import { Controls } from "../FilterSortControls/FilterSortControlsStyles";

function FilterSortControls({ onFilter, onSort }) {
  return (
    <Controls>
      <div>
        <label htmlFor="filter" style={{ display: "none" }}>
          Filter by Status
        </label>
        <select
          id="filter"
          aria-label="Filter by Status"
          onChange={(e) => onFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div>
        <label htmlFor="sort" style={{ display: "none" }}>
          Sort by Due Date
        </label>
        <select
          id="sort"
          aria-label="Sort by Due Date"
          onChange={(e) => onSort(e.target.value)}
        >
          <option value="asc">Sort by Due Date (Asc)</option>
          <option value="desc">Sort by Due Date (Desc)</option>
        </select>
      </div>
    </Controls>
  );
}

export default FilterSortControls;
