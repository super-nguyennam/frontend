import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { articleService } from '@/services/articles.service'
import type { Article, ArticlesResponse } from '@/types/article'

export type SearchLoadStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface SearchState {
  query: string
  items: Article[]
  page: number
  limit: number
  totalPages: number
  totalResults: number
  status: SearchLoadStatus
  error: string | null
}

const initialState: SearchState = {
  query: '',
  items: [],
  page: 1,
  limit: 20,
  totalPages: 1,
  totalResults: 0,
  status: 'idle',
  error: null,
}

export const searchArticles = createAsyncThunk<
  ArticlesResponse,
  { query: string; page?: number; limit?: number }
>('search/searchArticles', async ({ query, page = 1, limit = 20 }) => {
  const response = await articleService.searchArticles(query, page, limit)
  return response
})

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload
    },
    setSearchPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setSearchLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload
    },
    clearSearch(state) {
      state.query = ''
      state.items = []
      state.page = 1
      state.limit = 20
      state.totalPages = 1
      state.totalResults = 0
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchArticles.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(searchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload.results
        state.totalPages = action.payload.total_pages
        state.totalResults = action.payload.total_results
        state.page = action.payload.page
        state.limit = action.payload.limit
      })
      .addCase(searchArticles.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Failed to search articles'
      })
  },
})

export const { setQuery, setSearchPage, setSearchLimit, clearSearch } = searchSlice.actions

const searchReducer = searchSlice.reducer
export default searchReducer


