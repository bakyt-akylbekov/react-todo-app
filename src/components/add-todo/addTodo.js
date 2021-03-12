import React from 'react'

const AddTodo = ({setTodos, input, setInput, todos}) => {

    const formHandler = (e) => {
        e.preventDefault();
        setInput('');
        setTodos([...todos, {
            todoName: input,
            isActive: true,
            isImportant: false,
            id: Math.floor(1000 * Math.random())
        }])
    };

    const inputHandler = (e) => {
        setInput(e.target.value)
    };

    return (
        <form className='add-todo' onSubmit={formHandler}>
            <input type="text" placeholder='What needs to be done?'
                   className='add-input'
                   onChange={inputHandler}
                   value={input} required
            />
            <button type='submit' className='btn btn-outline-success'>
                Add Todo
            </button>
        </form>
    )
};

export default AddTodo