import React from 'react'
import styled from 'styled-components'
// import { Navbar } from '@/components/layout/Navbar'
import { Header } from '@/components/layout/Header'

interface LayoutProps {
    children: React.ReactNode
}

const Container = styled.div`
    min-height: 100vh;
    background-color: #f5f5f5;
`

// const Header = styled.header`
//     background: #000c;
//     color: white;
//     height: 56px;
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     z-index: 1000;
//     display: flex;
//     align-items: center;
//     margin-bottom: 24px;
//     backdrop-filter: blur(10px);
// `

const Main = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 72px 20px 0; /* offset for fixed header */
`

const Footer = styled.footer`
    text-align: center;
    padding: 40px 20px;
    color: #666;
    margin-top: 60px;
`

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Container>
        {/* <Header>
            <Navbar />
        </Header> */}
        <Header />
        <Main>
            {children}
        </Main>
        <Footer>
            <p>© 2023 Article Explorer. Built with React & Vite.</p>
        </Footer>
        </Container>
    )
}