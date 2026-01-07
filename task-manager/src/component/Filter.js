import React from 'react';
import '../style/Filter.css';

function Filter({
  filterPriority, setFilterPriority,
  filterStatus, setFilterStatus,
  totalTasks, completedTasks, percentage
}) {
  return (
    <div className="filter-panel">
      <h3>Filters</h3>

      <label>Priority</label>
      <select value={filterPriority} onChange={(e)=> setFilterPriority(e.target.value)}>
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <label>Status</label>
      <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option> 
      </select>

      <div className="progress-box">
        <h4>Progress overview</h4>
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed Tasks: {completedTasks}</p>
        <p>Percentage: {percentage}%</p>
      </div>
    </div>
  );
}

export default Filter;
