import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";


const Detail = () => {
    // const todos = useSelector(state => state.todos)
    // const { id } = useParams();
    // const todo = todos.find(todo => todo.id === +id)
    const navigate = useNavigate()


    const { state: todo } = useLocation() //링크 태그로 들어와야 데이터가 들어옴

    useEffect(() => {
        if (!todo) {
            navigate('/')
        }
    }, [navigate, todo]) //
    console.log(todo)



    // console.log("detail", todos)
    // console.log("id", { id })

    return (
        <Container>
            <DetailBox>
                <BtnBox>
                    <div>ID: {todo?.id}</div>
                    <button className='backBtn' onClick={() => window.history.back()}>이전으로</button>
                </BtnBox>
                <ListLine />
                <TextBox>
                    <h1>{todo?.title}</h1>
                    <h4>{todo?.body}</h4>
                </TextBox>
            </DetailBox>
        </Container>

    )
}

export default Detail

const Container = styled.div`
                width: 100%;
                height: 600px;
                margin: 200px auto;

                `;

const DetailBox = styled.div`
                width: 60%;
                min-width: 520px;
                height: 100%;
                margin: auto;
                border-radius: 20px;
                border: 4px solid #463f6b;
                padding: 30px;
                background-color: white;
                color: #463f6b;
   
                box-shadow: 0 1px 3px rgba(35, 23, 46, 0.12), 0 1px 2px rgba(35, 23, 46, 0.24);
                transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                `;

const BtnBox = styled.div`

                
                display: flex;
                justify-content: space-between;

                .backBtn {
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
                }
                `;

const ListLine = styled.div`
margin: 35px auto;
border-bottom: 2px solid #463f6b;

`

const TextBox = styled.div`
    h1{
        font-size: 60px;
        margin-bottom: 100px;
    }
    h4{
        font-size: 26px
    }
`
