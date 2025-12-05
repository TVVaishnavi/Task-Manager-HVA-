import React, {useState} from 'react';
import '../style/Header.css';
import { HiFilter } from "react-icons/hi";

function Header({ openForm, toggleFilter, searchBar, setSearchBar }){
    return(
        <div className='header'>
            <button className='icon' onClick={toggleFilter}><HiFilter  size={28}/></button>
            <h1>Task Manager</h1>

            <input type='text' className='search' placeholder='search task with title' value={searchBar} 
            onChange={(e) => setSearchBar(e.target.value)}/>

            <button className='add-btn' onClick={openForm}>+</button>
        </div>
    )
}

export default Header;