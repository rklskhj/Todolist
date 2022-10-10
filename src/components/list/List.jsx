import React from 'react'
import Todo from '../todo/Todo'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function List() {
    const todos = useSelector(state => state.todos)
    console.log("todos", todos)

    return (
        <ListContainer>

            <h1>🏃‍♂️ Working 🏃‍♀️</h1>
            <ListAll>
                <ListWrapper>
                    {todos.filter(todo => !todo.isDone).map(todo => <Todo key={todo.id} todo={todo} />)}
                </ListWrapper>
            </ListAll>
            <ListLine />
            <h2>💃 Done 🕺</h2>
            <ListAll>
                <ListWrapper>
                    {todos.filter(todo => todo.isDone).map(todo => <Todo key={todo.id} todo={todo} />)}
                </ListWrapper>
            </ListAll>



        </ListContainer>
    )
}

export default List

const ListContainer = styled.div`
    
    h1{
        font-size: 32px;
        margin: 21px auto;
        font-weight: 700;
        height: 47px
    }
    h2{
        font-size: 32px;
        margin: 30px 0 25px 0;
        font-weight: 700;
        height: 47px
    }
    color: #463f6b;
    padding: 20px 24px 50px 24px;

`
const ListLine = styled.div`
    margin: 45px auto;
    border-bottom: 2px solid #463f6b;

`

const ListAll = styled.div`
    margin: auto;
    width: 100%;
`

const ListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

`















