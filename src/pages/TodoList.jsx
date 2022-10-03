import React, { useState } from 'react'
import Form from '../components/form/Form'
import Header from '../components/header/Header'
import Layout from '../components/layout/Layout'
import List from '../components/list/List'


const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "리액트 공부하기",
            body: "리액트 TodoList를 만들자",
            isDone: false
        },
        {
            id: 2,
            title: "항해99 시작하기",
            body: "항해99를 시작해보자",
            isDone: true
        }
    ])
    return (

        <Layout>
            <Header />
            <Form setTodos={setTodos} todos={todos} />
            <List setTodos={setTodos} todos={todos} />

        </Layout>



    )
}

export default TodoList