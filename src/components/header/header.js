import React from 'react'

const Header = ({todos}) => {

    const active = todos.filter((todo) => {
        return todo.isActive === true
    }).length;

    const done = todos.filter((todo) => {
        return todo.isActive === false
    }).length;

    return (
        <div className='header'>
            <h1>Todo List</h1>
            <h6>{active} more to do,{done} done</h6>
        </div>
    )
};

export default Header