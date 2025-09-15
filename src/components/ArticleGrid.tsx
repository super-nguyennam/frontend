import React from 'react'
import styled from 'styled-components'
import type { Article } from '@/types/article'
import { ArticleCard } from '@/components/ArticleCard'

interface ArticleGridProps {
    articles: Article[]
    onArticleClick: (article: Article) => void
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 24px;
    padding: 24px 0;
`

const EmptyState = styled.div`
    text-align: center;
    padding: 60px 20px;
    color: #666;

    h3 {
        margin-bottom: 12px;
        color: #333;
    }
`

export const ArticleGrid: React.FC<ArticleGridProps> = ({ articles, onArticleClick }) => {
    if (articles.length === 0) {
        return (
        <EmptyState>
            <h3>No articles found</h3>
            <p>Try adjusting your search or explore popular articles.</p>
        </EmptyState>
        )
    }

    return (
        <Grid>
        {articles.map((article) => (
            <ArticleCard
            key={article.id}
            article={article}
            onClick={onArticleClick}
            />
        ))}
        </Grid>
    )
}