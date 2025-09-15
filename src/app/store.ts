import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from '@/features/articles/articles.slice'
import searchReducer from '@/features/search/search.slice'
import articleDetailsReducer from '@/features/article/article-details.slice'

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    search: searchReducer,
    articleDetails: articleDetailsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


