import { useLocation, Link } from "react-router-dom";

export default function ArticleDetails() {
  const { state } = useLocation();
  if (!state) return null;

  return (
    <>
    <span className="block max-w-4xl mx-auto px-4 py-6">
      <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
    </span>
      <article className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-3xl font-bold">{state.title}</h1>

        <img src={state.urlToImage} className="rounded-xl w-full" />

        <p className="text-lg text-gray-700 leading-relaxed">
          {state.content || state.description}
        </p>

        <a
          href={state.url}
          target="_blank"
          className="inline-block text-blue-600 font-medium"
        >
          Read full article →
        </a>
      </article>
    </>
  );
}
