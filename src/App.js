import React, { useState, useEffect } from "react";
import {
  Heading,
  AppContainer,
  ControlsContainer,
  SearchBar,
} from "./AppStyles";
import TaskForm from "./Components/TaskForm/TaskForm";
import FilterSortControls from "./Components/FilterSortControls/FilterSortControls";
import TaskList from "./Components/TaskList/TaskList";
import ConfirmationModal from "./Components/ConfirmationModal/ConfirmationModal";
import { defaultTasks } from "./defaultTasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
  });

  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    applyFilterAndSearch(currentFilter, searchQuery);
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const confirmDeleteTask = (id) => {
    setTaskToDelete(id);
    setShowModal(true);
  };

  const deleteTask = () => {
    setTasks((prev) => prev.filter((task) => task.id !== taskToDelete));
    setShowModal(false);
    setTaskToDelete(null);
  };

  const applyFilterAndSearch = (filter, query) => {
    let filtered =
      filter === "All" ? tasks : tasks.filter((task) => task.status === filter);
    if (query) {
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(query) ||
          task.description.toLowerCase().includes(query)
      );
    }
    setFilteredTasks(filtered);
  };

  const filterTasks = (filter) => {
    setCurrentFilter(filter);
    applyFilterAndSearch(filter, searchQuery);
  };

  const sortTasks = (order) => {
    const sorted = [...filteredTasks].sort((a, b) =>
      order === "asc"
        ? new Date(a.dueDate) - new Date(b.dueDate)
        : new Date(b.dueDate) - new Date(a.dueDate)
    );
    setFilteredTasks(sorted);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    applyFilterAndSearch(currentFilter, query);
  };

  return (
    <AppContainer>
      <Heading>Task Management Dashboard</Heading>
      <TaskForm onSubmit={addTask} />
      <ControlsContainer>
        <SearchBar
          type="text"
          placeholder="Search tasks by title or description..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <FilterSortControls onFilter={filterTasks} onSort={sortTasks} />
      </ControlsContainer>
      <TaskList
        tasks={filteredTasks}
        onEditTask={updateTask}
        confirmDeleteTask={confirmDeleteTask}
        setTasks={setTasks}
      />
      {showModal && (
        <ConfirmationModal
          message="Are you sure you want to delete this task?"
          onConfirm={deleteTask}
          onCancel={() => setShowModal(false)}
        />
      )}
    </AppContainer>
  );
}

export default App;
