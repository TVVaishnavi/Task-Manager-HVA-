import React, { useEffect, useState } from 'react';
import TaskForm from '../component/TaskForm';
import TaskList from '../component/TaskList';
import Header from '../component/Header';
import Filter from '../component/Filter';
import { toast } from "react-toastify";
import '../style/Home.css';

function Home() {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [filterPriority, setFilterPriority] = useState("All");
    const [filterStatus, setFilterStatus] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 5;
    const [searchBar, setSearchBar] = useState("");
    const [editData, setEditData] = useState(null);

    const filteredTasks = tasks.filter(task => {
        const pMatch = filterPriority === "All" || task.priority === filterPriority;
        const sMatch = filterStatus === "All" || task.status === filterStatus;
        const searchMatch = task.title.toLowerCase().includes(searchBar.toLowerCase());
        return pMatch && sMatch && searchMatch;
    });

    const addTask = (task) => {
        setTasks([{ ...task, id: Date.now() }, ...tasks]);
        toast.success("Task added!");
        setShowForm(false);
    };

    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            const parsed = JSON.parse(savedTasks);
            setTasks(parsed.sort((a, b) => b.id - a.id));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.status === 'Completed').length;
    const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

    useEffect(() => {
        setCurrentPage(1);
    }, [filterPriority, filterStatus]);

    const deleteTask = (id) => {
        const updated = tasks.filter(task => task.id !== id);
        toast.error("Task deleted!");
        setTasks(updated);
    };

    const handleEdit = (task) => {
        setEditData(task);
        setShowForm(true);
    };

    const updateTask = (updatedTask) => {
        const updatedList = tasks.map(t =>
            t.id === updatedTask.id ? updatedTask : t
        );
        toast.info("Task updated!");
        setTasks(updatedList);
        setEditData(null);
        setShowForm(false);
    };


    return (
        <div>

            <Header
                openForm={() => setShowForm(true)}
                toggleFilter={() => setShowFilter(true)}
                search={searchBar}
                setSearchBar={setSearchBar}
            />

            <Filter
                showFilter={showFilter}
                closeFilter={() => setShowFilter(false)}
                filterPriority={filterPriority}
                setFilterPriority={setFilterPriority}
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
                totalTasks={totalTasks}
                completedTasks={completedTasks}
                percentage={percentage}
            />
            {showForm && (
                <TaskForm
                    addTask={addTask}
                    closeForm={() => {
                        setShowForm(false);
                        setEditData(null);
                    }}
                    editData={editData}
                    updateTask={updateTask}
                />
            )}

            <TaskList
                tasks={currentTasks}
                totalTasks={filteredTasks.length}
                tasksPerPage={tasksPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                editTask={handleEdit}
                deleteTask={deleteTask}
            />

            {showFilter && <div className="overlay" onClick={() => setShowFilter(false)} />}

        </div>
    );
}

export default Home;
