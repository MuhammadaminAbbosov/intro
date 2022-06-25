import React from 'react'
import styled from 'styled-components'
import Header from './Components/Header'
import Main from './Components/Main'

const Home = () => {
    return (
        <Wrapper>
            <Header />
            <Main />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    background-color: #FAFAFA;
    overflow-x: hidden;
`

export default Home