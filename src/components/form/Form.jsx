import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Swal from 'sweetalert2'
import { addTodo } from '../../redux/modules/todos';

// let number = 3;
function Form() {
    const dispatch = useDispatch()

    const initialstate = {
        title: "",
        body: "",
        like: 0,
        isDone: false,

    }
    const [todo, setTodo] = useState(initialstate);
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value })


    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (todo.body === "" || todo.title === "") { //바디나 타이틀에 빈칸이 있을때
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '모두 입력해주세요!😥',
            })
        }
        if (todo.title.trim() === "" || todo.body.trim() === "") return;
        // dispatch(onSubmitTodo({ ...todo, id: Date.now() }))
        dispatch(addTodo({ ...todo, id: Date.now() }))
        setTodo(initialstate);
    }





    return (
        <AddForm >
            <InputGroup>
                <FormLaber>Title</FormLaber>
                <AddInput type="text" name='title' value={todo.title} onChange={onChangeHandler} />
                <FormLaber>Comment</FormLaber>
                <AddInput type="text" name='body' value={todo.body} onChange={onChangeHandler} />
            </InputGroup>
            <AddButton onClick={onSubmit}>Write</AddButton>
        </AddForm>

    )
}

export default Form

const AddForm = styled.form`
    background-color: #cdc8e2;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;

`

const FormLaber = styled.label`
    font-size: 1.5vw;
    font-weight: 700;
`

const InputGroup = styled.div`
    color: #463f6b;
    font-weight: bold;
    font-size: 17px;
    display: flex;
    align-items: center;
    gap: 20px;
`
const AddInput = styled.input`
    height: 40px;
    width: 100%;
    min-width: 100px;
    border: none;
    border-radius: 12px;
    padding: 0 12px;
`

const AddButton = styled.button`
    &:hover {
        background-color: #79719a;
    }
    border: none;
    height: 40px;
    border-radius: 10px;
    background-color: #66608c;
    width: 140px;
    color: #fff;
    font-weight: 700;
`









