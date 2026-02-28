# News Article Hub

A modern, responsive news application built with React and Vite, featuring real-time news articles from NewsAPI. This project is optimized for deployment on Vercel with a built-in serverless function proxy to bypass NewsAPI's free-plan browser restrictions.

## 🚀 Features

-   **Real-time News**: Fetches the latest top headlines.
-   **Search**: Filter articles by keywords with debounced search.
-   **Categories**: Browse news by category (General, Business, Tech, etc.).
-   **Responsive Design**: Premium UI built with Tailwind CSS, fully responsive across all devices.
-   **Serverless Proxy**: Integrated Vercel serverless functions to handle API requests securely and bypass CORS/426 errors.

## 🛠️ Tech Stack

-   **Frontend**: React 19, Vite, Tailwind CSS, Lucide React.
-   **Routing**: React Router 7.
-   **Backend**: Vercel Serverless Functions (Node.js).
-   **API**: [NewsAPI.org](https://newsapi.org/).

## 📦 Setup & Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd news-article
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory and add your NewsAPI key:

```env
VITE_NEWS_API_KEY=your_news_api_key_here
```

### 4. Run locally

Using Vite dev server:
```bash
npm run dev
```

Alternatively, to test serverless functions locally, use the Vercel CLI:
```bash
vercel dev
```

## 🌐 Deployment on Vercel

When deploying to Vercel, make sure to add the `VITE_NEWS_API_KEY` to your **Environment Variables** in the Vercel Dashboard.

The project is configured via `vercel.json` to handle API routing through the `/api/news` proxy, ensuring you don't encounter `426 Upgrade Required` errors in production.
