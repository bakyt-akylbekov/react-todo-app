import React from 'react'

const SearchPanel = ({setStatus, setSearchInputText}) => {

    const all = document.getElementById('all');
    const active = document.getElementById('active');
    const done = document.getElementById('done');

    const statusHandler = (e) => {
        const addActiveClass = (mainEl, el2, el3) => {
            mainEl.addEventListener('click', () => {
                if (!mainEl.className.includes('active')) {
                    mainEl.classList.add('active');
                    el2.classList.remove('active');
                    el3.classList.remove('active');
                }
            })
        };
        addActiveClass(all, active, done);
        addActiveClass(active, all, done);
        addActiveClass(done, active, all);
        setStatus(e.target.value)
    };

    const searchInputHandler = (e) => {
        setSearchInputText(e.target.value)
    };

    return (
        <div className='search-panel mb-3'>
            <input type="text" placeholder="search todo" className='search-input'
                   onChange={searchInputHandler}/>
            <div className='btn-group'>
                <button type='button' id='all' className='btn btn-outline-info statusBtn' value='all'
                        onClick={statusHandler}>All
                </button>
                <button type='button' id='active' className='btn btn-outline-info statusBtn' value='active'
                        onClick={statusHandler}>Active
                </button>
                <button type='button' id='done' className='btn btn-outline-info statusBtn' value='done'
                        onClick={statusHandler}>Done
                </button>
            </div>
        </div>
    )
};

export default SearchPanel