import React from 'react'
import styled from 'styled-components'
import type { Article } from '@/types/article'

interface ArticleCardProps {
    article: Article
    onClick: (article: Article) => void
}

const Card = styled.div`
    display: block;
    cursor: pointer;
`

const Img = styled.div`
    position: relative;
    border-radius: 12px;
    overflow: hidden;
`

const Poster = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    background-color: #f0f0f0;
    display: block;
`

const Duration = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;
    padding: 2px 6px;
    font-size: 12px;
    border-radius: 6px;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
`

const Info = styled.div`
    margin-top: 8px;
`

const Title = styled.a`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-decoration: none;
    color: #000000;
    font-weight: 600;
    line-height: 1.4;
`

const ReleaseDate = styled.div`
    color: #ababab;
    font-size: 12px;
    margin-top: 6px;
`

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
    const handleClick = () => {
        onClick(article)
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
    }

    const duration = undefined as unknown as string | undefined

    return (
        <Card onClick={handleClick}>
        <Img>
            <Poster
            src={
                article.thumbnail_url
                ? `${article.thumbnail_url}`
                : '/placeholder-movie.jpg'
            }
            alt={article.code}
            loading="lazy"
            />
            {duration && <Duration>{duration}</Duration>}
        </Img>
        <Info>
            <Title href="#" onClick={(e) => { e.preventDefault(); handleClick(); }}>{article.code} - {article.title}</Title>
            {article.release_date && (
            <ReleaseDate>{formatDate(article.release_date)}</ReleaseDate>
            )}
        </Info>
        </Card>
    )
}