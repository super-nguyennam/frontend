import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchArticleDetails, clearArticleDetails } from '@/features/article/article-details.slice'
import { PLACEHOLDER_BACKDROP } from '@/constants'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`

const BackButton = styled.button`
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        background: #0056b3;
    }
`

const ArticleContainer = styled.div`
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const HeroImage = styled.div<{ $backdropUrl: string }>`
    height: 400px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), 
                        url(${props => props.$backdropUrl});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    padding: 30px;
    color: white;
`

const ArticleInfo = styled.div`
    padding: 30px;
`

const Title = styled.h1`
    margin: 0 0 10px;
    color: #333;
`

const Metadata = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    color: #666;
`

const Overview = styled.p`
    line-height: 1.6;
    color: #444;
`

const TagList = styled.div`
    display: flex;
    gap: 10px;
    margin: 20px 0;
    flex-wrap: wrap;
`

const Tag = styled.span`
    background: #f0f0f0;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 14px;
`

const CenteredMessage = styled.div`
    text-align: center;
`

const HeroTitle = styled.h1`
    margin: 0;
    font-size: 2.5rem;
`

const DetailsBlock = styled.div`
    margin-top: 30px;
`

export const ArticleDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { article, status, error } = useAppSelector(s => s.articleDetails)

    useEffect(() => {
        if (id) dispatch(fetchArticleDetails(Number(id)))
        return () => {
            dispatch(clearArticleDetails())
        }
    }, [dispatch, id])

    if (status === 'loading') {
        return <LoadingSpinner />
    }

    if (error || !article) {
        return (
        <Container>
            <BackButton onClick={() => navigate(-1)}>Go Back</BackButton>
            <CenteredMessage>
            <h2>Article not found</h2>
            <p>{error}</p>
            </CenteredMessage>
        </Container>
        )
    }

    const articleDetails = article

    const backdropUrl = articleDetails.thumbnail_url
        ? articleDetails.thumbnail_url
        : PLACEHOLDER_BACKDROP;

    return (
        <Container>

        <ArticleContainer>
            <HeroImage $backdropUrl={backdropUrl}>
            <div>
                <HeroTitle>{articleDetails.code}</HeroTitle>
                <p>{articleDetails.title}</p>
            </div>
            </HeroImage>

            <ArticleInfo>
            <Title>{articleDetails.code}</Title>

            <Metadata>
                <span>⭐ {(articleDetails.Actresses ?? []).map(a => a?.name ?? 'Unknown').join(", ")}</span>
                <span>{articleDetails.Producer?.name ?? 'Unknown'}</span>
                <span>{new Date(articleDetails.release_date).getFullYear()}</span>
            </Metadata>

            {articleDetails.Tags && articleDetails.Tags.length > 0 && (
                <TagList>
                {(articleDetails.Tags ?? []).map((tag: { id: number; name: string }) => (
                    <Tag key={tag.id}>{tag?.name ?? 'Unknown'}</Tag>
                ))}
                </TagList>
            )}

            <Overview>{articleDetails.title}</Overview>

            <DetailsBlock>
                <h3>Details</h3>
                <p><strong>Code:</strong> {articleDetails.code}</p>
                <p><strong>Title:</strong> {articleDetails.title.toUpperCase()}</p>
                <p><strong>Release Date:</strong> {articleDetails.release_date}</p>
                <p><strong>Description:</strong> {articleDetails.description ?? 'N/A'}</p>
            </DetailsBlock>
            </ArticleInfo>
        </ArticleContainer>
        </Container>
    )
}