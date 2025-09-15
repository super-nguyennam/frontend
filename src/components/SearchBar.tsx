import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { setQuery, setSearchPage } from '@/features/search/search.slice'
import styled from 'styled-components'

interface SearchBarProps {
    onSearch: (query: string) => void
    placeholder?: string
    compact?: boolean
}

const Container = styled.div<{ $compact?: boolean }>`
    position: relative;
    max-width: ${props => props.$compact ? '100%' : '500px'};
    margin: ${props => props.$compact ? '0' : '0 auto 32px'};
    height: ${props => props.$compact ? '36px' : '44px'};
`

const Input = styled.input<{ $compact?: boolean }>`
    width: 100%;
    height: ${props => props.$compact ? '36px' : '44px'};
    padding: 0 12px 0 44px;
    border: 1px solid #2a2a2a;
    background: #161616;
    color: #eaeaea;
    border-radius: ${props => props.$compact ? '10px' : '16px'};
    font-size: 14px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, width 0.25s ease, opacity 0.2s ease, padding 0.25s ease;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);

    &::placeholder {
        color: #8a8a8a;
    }

    &:focus {
        outline: none;
        border-color: #6a41ff;
        box-shadow: 0 0 0 3px rgba(106,65,255,0.2);
    }
`

const SearchIcon = styled.button<{ $compact?: boolean }>`
    position: absolute;
    left: 6px;
    top: 50%;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.$compact ? '28px' : '32px'};
    height: ${props => props.$compact ? '28px' : '32px'};
    border-radius: 8px;
    background: #1f1f1f;
    border: 1px solid #2a2a2a;
    color: #9c9c9c;
    cursor: pointer;
    padding: 0;

    &:hover {
        color: #ffffff;
        border-color: #3a3a3a;
    }
`

// Collapse behavior (header style): when not focused/hovered, hide the input text field
const Collapsible = styled(Container)`
    &:not(:focus-within):not(:hover) ${Input} {
        width: 0;
        padding-left: 0;
        padding-right: 0;
        opacity: 0;
        border-color: transparent;
        box-shadow: none;
    }
`

export const SearchBar: React.FC<SearchBarProps> = ({
    onSearch,
    placeholder = "Search for articles...",
    compact = false,
    }) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const dispatch = useAppDispatch()
    const query = useAppSelector(s => s.search.query)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSearch(query)
        dispatch(setSearchPage(1))
        dispatch(setQuery(query))
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        onSearch(value)
        dispatch(setSearchPage(1))
        dispatch(setQuery(value))
    }

    return (
        compact ? (
        <Collapsible $compact={compact}>
        <form onSubmit={handleSubmit}>
            <Input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder={placeholder}
            $compact={compact}
            ref={inputRef}
            />
            <SearchIcon
            type="button"
            aria-label="Search"
            $compact={compact}
            onClick={() => inputRef.current?.focus()}
            >
            🔍
            </SearchIcon>
        </form>
        </Collapsible>
        ) : (
        <Container $compact={compact}>
        <form onSubmit={handleSubmit}>
            <Input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder={placeholder}
            $compact={compact}
            />
            <SearchIcon type="submit" aria-label="Search" $compact={compact}>
            🔍
            </SearchIcon>
        </form>
        </Container>
        )
    )
}