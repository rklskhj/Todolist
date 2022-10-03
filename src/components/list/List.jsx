import React from 'react'
import Todo from '../todo/Todo'
import './style.css';

function List({ setTodos, todos }) {
    const onDeleteHandler = (todoId) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== todoId; //제거

        })
        setTodos(newTodos)
        console.log("1 ", todoId)
        console.log("2 ", todos)

    }
    const onEditHandler = (todoId) => {
        const newTodos = todos.map((todo) => {

            if (todo.id === todoId) {
                return { ...todo, isDone: !todo.isDone };
            } else {
                return { ...todo };
            }
        });
        console.log(newTodos)
        setTodos(newTodos);
        //버튼을 누르면 바꿔주고 아래로 내려보냄 그럼 isDone 바꿔줘ㅏ야힘

    }
    return (
        <div className='list-container'>
            <h1>List 📝</h1>
            <div className='list-wrapper'>
                {todos.map((todo) => {
                    if (!todo.isDone) {
                        return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHandler={onDeleteHandler}
                                onEditHandler={onEditHandler}
                            />
                        )
                    } else {
                        return null;
                    }

                })}
            </div>
            <div className='list-line'></div>
            <h1>Done ✅</h1>
            <div className='list-wrapper'>
                {todos.map((todo) => {
                    if (todo.isDone) {
                        return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHandler={onDeleteHandler}
                                onEditHandler={onEditHandler}
                            />
                        )
                    } else {
                        return null;
                    }

                })}
            </div>
        </div>
    )
}

export default List