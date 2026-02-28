export default async function handler(req, res) {
  const { country = 'us', category, q } = req.query;
  const API_KEY = process.env.VITE_NEWS_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const BASE_URL = 'https://newsapi.org/v2/top-headlines';
  const queryParams = new URLSearchParams();
  
  if (country) queryParams.append('country', country);
  if (category) queryParams.append('category', category);
  if (q) queryParams.append('q', q);
  queryParams.append('apiKey', API_KEY);

  const url = `${BASE_URL}?${queryParams.toString()}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
