import React, { useState } from 'react'
import './style.css';

let number = 3;
function Form({ setTodos, todos }) {
    const initialstate = {
        id: 0,
        title: "",
        body: "",
        isDone: false
    }
    const [todo, setTodo] = useState(initialstate);
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value })

    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (todo.title.trim() === "" || todo.body.trim() === "") return;
        setTodos([...todos, { ...todo, id: number }]);
        setTodo(initialstate);
        number++;
    }

    return (
        <form className='add-form'>
            <div className='input-group'>
                <label className='form-laber'>Title</label>
                <input className='add-input' type="text" name='title' value={todo.title} onChange={onChangeHandler} />
                <label className='form-laber'>Commnet</label>
                <input id="input-body" className='add-input' type="text" name='body' value={todo.body} onChange={onChangeHandler} />
            </div>
            <button className='add-button' onClick={onSubmit}>Write</button>
        </form>

    )
}

export default Form