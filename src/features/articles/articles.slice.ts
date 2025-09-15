import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { articleService } from '@/services/articles.service'
import type { Article, ArticlesResponse } from '@/types/article'

export type ArticlesLoadStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface ArticlesState {
  items: Article[]
  page: number
  limit: number
  totalPages: number
  totalResults: number
  status: ArticlesLoadStatus
  error: string | null
}

const initialState: ArticlesState = {
  items: [],
  page: 1,
  limit: 20,
  totalPages: 1,
  totalResults: 0,
  status: 'idle',
  error: null,
}

export const fetchArticles = createAsyncThunk<
  ArticlesResponse,
  { page?: number; limit?: number }
>(
  'articles/fetchArticles',
  async ({ page = 1, limit = 20 }) => {
    const response = await articleService.getArticles(page, limit)
    return response
  }
)


const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    resetArticles(state) {
      state.items = []
      state.page = 1
      state.totalPages = 1
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload.results
        state.totalPages = action.payload.total_pages
        state.page = action.payload.page
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Failed to fetch articles'
      })
  },
})

export const { setPage, resetArticles } = articlesSlice.actions

const articlesReducer = articlesSlice.reducer
export default articlesReducer


