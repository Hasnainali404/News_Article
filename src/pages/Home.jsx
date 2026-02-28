import { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import ArticleGrid from '../components/ArticleGrid';
import Footer from '../components/Footer';
import useDebounce from '../hooks/useDebounce';
import { fetchTopHeadlines } from '../services/newsApi';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // store actual error

  const debouncedSearch = useDebounce(search, 500);

  const loadNews = useCallback(() => {
    setLoading(true);
    setError(null);

    const params = {};
    if (debouncedSearch) params.q = debouncedSearch;
    if (category) params.category = category;

    fetchTopHeadlines(params)
      .then((res) => {
        setArticles(res.articles || []);
      })
      .catch((err) => {
        if (err.message === 'RATE_LIMITED') {
          setError('You have reached the API request limit. Please wait.');
        } else if (err.message === 'UPGRADE_REQUIRED') {
          setError('NewsAPI requires a paid plan for browser-side requests. Please check your account.');
        } else {
          setError('Failed to fetch news. Please try again.');
        }
        setArticles([]);
      })
      .finally(() => setLoading(false));
  }, [debouncedSearch, category]);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <Filters setCategory={setCategory} />

        <ArticleGrid
          articles={articles}
          loading={loading}
          error={error}
          onRetry={loadNews}
        />
      </main>
      <Footer />
    </>
  );
}
