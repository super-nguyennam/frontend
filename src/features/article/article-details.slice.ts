import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { articleService } from '@/services/articles.service'
import type { ArticleDetails } from '@/types/article'

export type DetailsLoadStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface ArticleDetailsState {
  article: ArticleDetails | null
  status: DetailsLoadStatus
  error: string | null
}

const initialState: ArticleDetailsState = {
  article: null,
  status: 'idle',
  error: null,
}

export const fetchArticleDetails = createAsyncThunk<ArticleDetails, number>(
  'articleDetails/fetch',
  async (id: number) => {
    const response = await articleService.getArticleDetails(id)
    return response
  }
)

const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
    clearArticleDetails(state) {
      state.article = null
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetails.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchArticleDetails.fulfilled, (state, action: PayloadAction<ArticleDetails>) => {
        state.status = 'succeeded'
        state.article = action.payload
      })
      .addCase(fetchArticleDetails.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Failed to fetch article details'
      })
  },
})

export const { clearArticleDetails } = articleDetailsSlice.actions

const articleDetailsReducer = articleDetailsSlice.reducer
export default articleDetailsReducer


