import React, {useState, useEffect} from 'react'

import Header from "../header";
import SearchPanel from "../search-panel/";
import TodoList from "../todo-list";
import AddTodo from "../add-todo";

import './style.css'

function App() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [searchInputText, setSearchInputText] = useState('');

    useEffect(() => {
        getItems();
    }, []);

    useEffect(() => {
        filterHandler();
        saveItems();
        Array.from(document.getElementsByClassName('statusBtn')).map((btn) => {
            btn.value === status ? btn.classList.add('active') : btn.classList.remove('active');
        })
    }, [status, todos, searchInputText]);

    const saveItems = () => {
        localStorage.setItem('todo', JSON.stringify(todos));  // setItem сохраняет что-то в localStorage, присваивает ключ
        localStorage.setItem('btnStatus', status);  // setItem сохраняет что-то в localStorage, присваивает ключ
    };

    const getItems = () => {
        setTodos(JSON.parse(localStorage.getItem('todo'))); // получает значение из localStorage по какому-то ключу
        setStatus(localStorage.getItem('btnStatus'));

    };

    const filterHandler = () => {
        if (status === 'active') {
            setFilteredTodos(todos.filter((todo) => todo.isActive))
        } else if (status === 'done') {
            setFilteredTodos(todos.filter((todo) => !todo.isActive))
        } else {
            setFilteredTodos(todos)
        }
    };

    return (
        <div className='main'>
            <div className='todo-container'>
                <Header todos={todos}/>
                <SearchPanel
                    setStatus={setStatus}
                    setSearchInputText={setSearchInputText}/>
                {filteredTodos.length === 0 ?
                    <div className='text-center mb-3 border p-2'>Here should be todo</div> :
                    <TodoList
                        todos={todos}
                        setTodos={setTodos}
                        filteredTodos={filteredTodos}
                        searchInputText={searchInputText}/>}
                <AddTodo
                    setTodos={setTodos}
                    todos={todos}
                    setInput={setInput}
                    input={input}/>
            </div>
        </div>
    )
}

export default App