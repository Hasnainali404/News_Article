const API_KEY = import.meta.env.NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

// Simple in-memory cache
const cache = new Map();
const TTL = 1000 * 60 * 5; // 5 minutes

export async function fetchTopHeadlines(params = {}) {
  if (!API_KEY) throw new Error('API key is not defined');

  // Only include params if defined
  const queryObj = { country: 'us', ...params };
  Object.keys(queryObj).forEach(
    (key) => queryObj[key] === undefined && delete queryObj[key]
  );

  const url = `${BASE_URL}/top-headlines?${new URLSearchParams(queryObj)}&apiKey=${API_KEY}`;

  // Check cache first
  if (cache.has(url)) {
    const { data, time } = cache.get(url);
    if (Date.now() - time < TTL) return data;
  }

  const res = await fetch(url);

  if (res.status === 429) {
    throw new Error('RATE_LIMITED');
  }

  if (!res.ok) {
    throw new Error('API_ERROR');
  }

  const data = await res.json();
  cache.set(url, { data, time: Date.now() });

  return data;
}
