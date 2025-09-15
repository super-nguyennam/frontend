import React from 'react'
import styled from 'styled-components'

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 24px 0;
    margin-top: 24px;
    `

    const Button = styled.button<{ $active?: boolean }>`
    padding: 8px 16px;
    border: 1px solid #ddd;
    background-color: ${props => props.$active ? '#007bff' : 'white'};
    color: ${props => props.$active ? 'white' : '#333'};
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
        background-color: ${props => props.$active ? '#0056b3' : '#f8f9fa'};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`

const PageInfo = styled.span`
    color: #666;
    font-size: 14px;
`

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    }) => {
    const maxPagesToShow = 5
    const halfMaxPages = Math.floor(maxPagesToShow / 2)

    let startPage = Math.max(1, currentPage - halfMaxPages)
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)

    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1)
    }

    const pageNumbers = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
    )

    if (totalPages <= 1) return null

    return (
        <Container>
        <Button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
        >
            Previous
        </Button>

        {startPage > 1 && (
            <>
            <Button onClick={() => onPageChange(1)}>1</Button>
            {startPage > 2 && <span>...</span>}
            </>
        )}

        {pageNumbers.map(page => (
            <Button
            key={page}
            $active={page === currentPage}
            onClick={() => onPageChange(page)}
            >
            {page}
            </Button>
        ))}

        {endPage < totalPages && (
            <>
            {endPage < totalPages - 1 && <span>...</span>}
            <Button onClick={() => onPageChange(totalPages)}>
                {totalPages}
            </Button>
            </>
        )}

        <Button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            Next
        </Button>

        <PageInfo>
            Page {currentPage} of {totalPages}
        </PageInfo>
        </Container>
    )
}