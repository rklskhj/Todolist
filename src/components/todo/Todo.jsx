import React from 'react'
import './style.css';
function Todo({ todo, onDeleteHandler, onEditHandler }) {
    return (
        <div className="todo-container">
            <div>
                <h2 className="todo-title">{todo.title}</h2>
                <div className="todo-body">{todo.body}</div>
            </div>
            <div>
                <button
                    className="todo-delete-button button"
                    onClick={() => onDeleteHandler(todo.id)}
                >Delete
                </button>
                <button
                    className="todo-complete-button button"
                    onClick={() => onEditHandler(todo.id)}
                >{todo.isDone ? 'Cancel' : 'Done'}
                </button>
            </div>
        </div>
    )
}

export default Todo