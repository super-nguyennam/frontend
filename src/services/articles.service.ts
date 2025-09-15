import axios from 'axios'
import type { ArticlesResponse, ArticleDetails } from '@/types/article'
import { BASE_URL, DEFAULT_TIMEOUT_MS } from '@/constants'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT_MS,
})

export const articleService = {
    getArticles: async (page: number = 1, limit: number = 20): Promise<ArticlesResponse> => {
        try {
            const response = await axiosInstance.get('articles', {
                params: { page, limit },
            })
            return response.data
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw new Error('Failed to fetch articles');
        }
    },

    getArticleDetails: async (id: number): Promise<ArticleDetails> => {
        try {
            const response = await axiosInstance.get(`/article/${id}?include=producer,actresses,tags`)
            console.log(response.data)
            return response.data
        } catch (error) {
            console.error('Error fetching article details:', error);
            throw new Error('Failed to fetch article details')
        }
    },

    searchArticles: async (query: string, page: number = 1, limit: number = 20): Promise<ArticlesResponse> => {
        try {
            const response = await axiosInstance.get('/articles/search', {
                params: { query, page, limit },
            })
            return response.data
        } catch (error) {
            console.error('Error searching articles:', error);
            throw new Error('Failed to search articles')
        }
    },
}