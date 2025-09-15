import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import '@/styles/global.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticleDetailsPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App