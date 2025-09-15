import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchArticles, setPage as setArticlesPage } from '@/features/articles/articles.slice'
import { setSearchPage, searchArticles } from '@/features/search/search.slice'
import { ArticleGrid } from '@/components/ArticleGrid'
import { Pagination } from '@/components/Pagination'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import type { Article } from '@/types/article'
import { SEARCH_DEBOUNCE_MS } from '@/constants'
import styled from 'styled-components'

const ErrorContainer = styled.div`
    text-align: center;
    padding: 40px 20px;
`

export const HomePage: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const articlesState = useAppSelector(s => s.articles)
    const searchState = useAppSelector(s => s.search)

    const isSearching = searchState.query.trim().length > 0

    const { page: articlePage, limit: articleLimit } = articlesState
    const { query, page: searchPage, limit: searchLimit } = searchState

    useEffect(() => {
        if (isSearching) {
            const id = setTimeout(() => {
                dispatch(searchArticles({ query, page: searchPage, limit: searchLimit }))
            }, SEARCH_DEBOUNCE_MS)
            return () => clearTimeout(id)
        } else {
            dispatch(fetchArticles({ page: articlePage, limit: articleLimit }))
        }
    }, [dispatch, isSearching, query, searchPage, searchLimit, articlePage, articleLimit])

    // Search is now handled from the header SearchBar

    const handleArticleClick = (article: Article) => {
        navigate(`/article/${article.id}`)
    }

    const handlePageChange = (page: number) => {
        if (isSearching) dispatch(setSearchPage(page))
        else dispatch(setArticlesPage(page))
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const articles = isSearching ? searchState.items : articlesState.items
    const loading = isSearching ? searchState.status === 'loading' : articlesState.status === 'loading'
    const error = isSearching ? searchState.error : articlesState.error
    const totalPages = isSearching ? searchState.totalPages : articlesState.totalPages
    const currentPage = isSearching ? searchState.page : articlesState.page

    if (error) {
        return (
        <ErrorContainer>
            <h2>Something went wrong</h2>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>
            Try Again
            </button>
        </ErrorContainer>
        )
    }

    return (
        <div>
        {loading ? (
            <LoadingSpinner />
        ) : (
            <>
            <ArticleGrid articles={articles} onArticleClick={handleArticleClick} />
            {articles.length > 0 && (
                <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                />
            )}
            </>
        )}
        </div>
    )
}