import ArticleCard from "./ArticleCard";
import ArticleSkeleton from "./ArticleSkeleton";
import EmptyState from "./EmptyState";
import ErrorState from "./ErrorState";

export default function ArticleGrid({ articles, loading, error, onRetry }) {
  if (loading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ArticleSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorState message={error} onRetry={onRetry} />;
  }

  if (!articles.length) {
    return <EmptyState />;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((a, i) => (
        <ArticleCard key={i} article={a} index={i} />
      ))}
    </div>
  );
}
