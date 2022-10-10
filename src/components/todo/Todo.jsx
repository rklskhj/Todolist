import React from 'react'
import { useDispatch } from 'react-redux';
import { onDeleteTodo, onEditTodo } from '../../redux/modules/todos';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
function Todo({ todo }) {
    const dispatch = useDispatch();

    const onDeleteHandler = () => {
        dispatch(onDeleteTodo({ id: todo.id }))
    }

    const onEditHandler = () => {
        dispatch(onEditTodo({ id: todo.id }))
    }

    console.log("todo", todo)
    return (
        <TodoContainer>
            <div>
                <Link to={`/detail/${todo.id}`} state={todo}> 상세페이지🔍 </Link>
                <h2 className="todo-title">{todo.title}</h2>
                <TodoBody>{todo.body}</TodoBody>
            </div>
            <ButtonSet>
                <button
                    className="todo-delete-button button"
                    onClick={onDeleteHandler} //넘길 값이 있으면 () => ~(~) 작성
                >Delete
                </button>
                <button
                    className="todo-complete-button button"
                    onClick={onEditHandler}
                >{todo.isDone ? 'Cancel' : 'Done'}
                </button>
            </ButtonSet>
        </TodoContainer>
    )
}

export default Todo

const TodoContainer = styled.div`
    &:hover {   
  box-shadow: 0 14px 28px rgba(35, 23, 46, 0.25),
    0 10px 10px rgba(35, 23, 46, 0.22);
}
    width: 30%; 
    min-width: 200px;
    
    /* height: 150px; */
    border: 4px solid #463f6b;
    border-radius: 12px;
    padding: 24px 18px 24px 18px;
    box-shadow: 0 1px 3px rgba(35, 23, 46, 0.12), 0 1px 2px rgba(35, 23, 46, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    
    h2{
        margin-top: 20px;
        font-size: 30px;
    }
    
    .todo-delete-button{
        border: none;
    width: 50%;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;

    margin-right: 25px;
    border: 3px solid rgba(207, 9, 9, 0.738);
    background-color: #fff;
    &:hover {
        color: white;
    border: 3px solid rgba(207, 9, 9, 0.738);
    background-color: rgba(207, 9, 9, 0.738);
    }
    }


    .todo-complete-button{
        border: none;
    width: 50%;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;

    border: 3px solid rgb(64, 143, 64);
    background-color: #fff;

        &:hover {
            color: white;
    border: 3px solid rgb(64, 143, 64);
    background-color: rgb(99, 181, 99);
        }
    }
        
    
`
const ButtonSet = styled.div`
    display: flex;
  margin-top: 24px;

`

const TodoBody = styled.div`
    font-size: 18px;
    margin: 18px auto;

`






