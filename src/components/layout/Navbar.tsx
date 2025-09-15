import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { SearchBar } from '@/components/SearchBar'

const Bar = styled.nav`
    display: grid;
    grid-template-columns: 160px 1fr 480px 120px;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 8px 20px;
    gap: 16px;
`

const Brand = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.25rem;
`

// Reserved for future menu links

const Menu = styled.nav`
    display: flex;
    gap: 20px;
    align-items: center;
    color: #bdbdbd;
    a { color: #bdbdbd; text-decoration: none; }
`

const MenuLink = styled(NavLink)`
    padding: 6px 0;
    &.active { color: #ffffff }
`

const Right = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Navbar: React.FC = () => {
    return (
        <Bar>
            <Brand to="/">JAVXX</Brand>
            <Menu>
                <MenuLink to="/" end>New</MenuLink>
                <MenuLink to="/hot">Hot</MenuLink>
                <MenuLink to="/recent">Recent</MenuLink>
                <MenuLink to="/trending">Trending</MenuLink>
                <MenuLink to="/types">Types</MenuLink>
                <MenuLink to="/collections">Collections</MenuLink>
                <MenuLink to="/amateur">Amateur</MenuLink>
                <MenuLink to="/uncensored">Uncensored</MenuLink>
            </Menu>
            <SearchBar onSearch={() => {}} placeholder="Search any JAV.." compact />
            <Right>
                {/* Placeholder for locale/avatar */}
            </Right>
        </Bar>
    )
}