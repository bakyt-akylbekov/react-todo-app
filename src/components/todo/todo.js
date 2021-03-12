import React from 'react'

const Todo = ({name, todoItem, todos, setTodos, idx}) => {

    const activeHandler = () => {
        setTodos(todos.map((todo) => {
            return todo.id === todoItem.id ?
                {...todo, isActive: !todoItem.isActive} : todo
        }));
        Array.from(document.getElementsByClassName('todo-name')).map((name, nameIdx) => {
            if (nameIdx === idx) {
                name.classList.toggle('done')
            }
        });
        Array.from(document.getElementsByClassName('doneBtn')).map((btn, btnIdx) => {
            if (btnIdx === idx) {
                btn.classList.toggle('active')
            }
        })

    };

    const importantHandler = () => {
        setTodos(todos.map((todo) => {
            return todo.id === todoItem.id ?
                {...todo, isImportant: !todoItem.isImportant} : todo
        }));
        Array.from(document.getElementsByClassName('todo-name')).map((name, nameIdx) => {
            if (nameIdx === idx) {
                name.classList.toggle('star')
            }
        });
        Array.from(document.getElementsByClassName('starBtn')).map((btn, btnIdx) => {
            if (btnIdx === idx) {
                btn.classList.toggle('active')
            }
        })

    };

    const deleteHandler = () => {
        setTodos(todos.filter((todo) => {
            return todo.id !== todoItem.id
        }))

    };

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <span
                className={`todo-name ${!todoItem.isActive ? 'done' : ''} ${todoItem.isImportant ? 'star' : ''}`}>{name}</span>
            <div>
                <button type='button' onClick={activeHandler}
                        className={`btn btn-outline-success doneBtn ${!todoItem.isActive ? 'active' : ''}`}>
                    <i className="fas fa-check"> </i></button>
                <button type='button' onClick={importantHandler}
                        className={`btn btn-outline-warning starBtn ${todoItem.isImportant ? 'active' : ''}`}>
                    <i className="fas fa-star"> </i></button>
                <button type='button' onClick={deleteHandler}
                        className={`btn btn-outline-danger`}>
                    <i className="fas fa-trash-alt"> </i></button>
            </div>
        </li>
    )
};

export default Todo