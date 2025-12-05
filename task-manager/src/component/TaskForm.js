import React, { useEffect, useState } from 'react';
import '../style/TaskForm.css';

function TaskForm({ addTask, closeForm, editData, updateTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Low");
    const [status, setStatus] = useState("Pending");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        if (editData) {
            const updated = {
                ...editData,
                title,
                description,
                priority,
                status
            };

            updateTask(updated);
        } else {
            addTask({ title, description, priority, status });
            setTitle("");
            setDescription("");
            setPriority("Low");
            setStatus("Pending");
        }

    }

    useEffect(() => {
        if (editData) {
            setTitle(editData.title);
            setDescription(editData.description);
            setPriority(editData.priority);
            setStatus(editData.status);
        }
    }, [editData]);


    return (
        <div className='overlay'>
            <div className='task-form-card'>
                <h3>Add Task</h3>

                <form onSubmit={handleSubmit}>
                    <label>Title: </label>
                    <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <br></br>

                    <label>Description: </label>
                    <textarea placeholder='Description(Optional)' value={description} onChange={(e) => setDescription(e.target.value)} />
                    <br></br>

                    <label>Priority: </label>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select> <br></br>

                    <label>Status: </label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option>Pending</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                    </select> <br></br>

                    <div className='btn-group'>
                        <button type='submit' className='save-btn'>Save</button>
                        <button onClick={closeForm} type='button' className='cancel-btn'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>

    )


}

export default TaskForm;