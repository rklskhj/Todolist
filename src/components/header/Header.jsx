import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Container>
            <h1>- My Todo List -</h1>
        </Container>

    )
}

export default Header
const Container = styled.div`
    color: #463f6b;
    align-items: center;
    border: 1px solid #ddd;
    display: flex;
    height: 50px;
    justify-content: center;
    padding: 20px 20px;
    h1 {font-size: 30px;}

`
