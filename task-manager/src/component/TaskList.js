import React from 'react';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import '../style/TaskList.css';

function TaskList({ tasks, totalTasks, tasksPerPage, currentPage, setCurrentPage, editTask, deleteTask }) {

    const totalPages = Math.ceil(totalTasks / tasksPerPage);

    const goToNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="tasklist">

            <h3 className="title">Your Tasks</h3>

            {tasks.length === 0 ? (
                <p className="empty-text">No tasks added yet.</p>
            ) : (
                <>
                    <div className="task-grid">
                        {tasks.map((task) => (
                            <div key={task.id} className="task-card">
                                <h4 className="task-title">{task.title}</h4>

                                <p><strong>Description:</strong> {task.description || "No description"}</p>

                                <p>
                                    <strong>Priority:</strong>{" "}
                                    <span className={`badge ${task.priority.toLowerCase()}`}>
                                        {task.priority}
                                    </span>
                                </p>

                                <p>
                                    <strong>Status:</strong>{" "}
                                    <span className={`status ${task.status.toLowerCase().replace(" ", "-")}`}>
                                        {task.status}
                                    </span>
                                </p>

                                <div className="task-buttons">
                                    <button className="edit-btn" onClick={() => editTask(task)}>
                                        <CiEdit size={15} />
                                    </button>

                                    <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                                        <MdOutlineDeleteOutline size={15} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pagination">
                        <button onClick={goToPrev} disabled={currentPage === 1}>
                            Prev
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                className={currentPage === i + 1 ? "active-page" : ""}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button onClick={goToNext} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </>
            )}

        </div>
    );
}

export default TaskList;
