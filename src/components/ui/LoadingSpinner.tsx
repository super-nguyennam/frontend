import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
    border: 4px solid #f3f3f3;
    border-top: 4px solid #007bff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
    margin: 40px auto;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 20px;
`

export const LoadingSpinner: React.FC = () => {
    return (
        <Container>
        <Spinner />
        </Container>
    )
}