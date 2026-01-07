import React, {useState} from 'react';
import '../style/Header.css';

function Header({ openForm, toggleFilter, searchBar, setSearchBar }){
    return(
        <div className='header'>
            <h1>Task Manager</h1>

            <input type='text' className='search' placeholder='search task with title' value={searchBar} 
            onChange={(e) => setSearchBar(e.target.value)}/>

            <button className='add-btn' onClick={openForm}>+</button>
        </div>
    )
}

export default Header;
