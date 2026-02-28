const BASE_URL = '/api';

// Simple in-memory cache
const cache = new Map();
const TTL = 1000 * 60 * 5; // 5 minutes

export async function fetchTopHeadlines(params = {}) {

  // Only include params if defined
  const queryObj = { country: 'us', ...params };
  Object.keys(queryObj).forEach(
    (key) => queryObj[key] === undefined && delete queryObj[key]
  );

  const url = `${BASE_URL}/news?${new URLSearchParams(queryObj)}`;

  // Check cache first
  if (cache.has(url)) {
    const { data, time } = cache.get(url);
    if (Date.now() - time < TTL) return data;
  }

  const res = await fetch(url);

  if (res.status === 429) {
    throw new Error('RATE_LIMITED');
  }

  if (res.status === 426) {
    throw new Error('UPGRADE_REQUIRED');
  }

  if (!res.ok) {
    throw new Error('API_ERROR');
  }

  const data = await res.json();
  cache.set(url, { data, time: Date.now() });

  return data;
}
