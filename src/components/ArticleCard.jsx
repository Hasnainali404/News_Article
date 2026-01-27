import { Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArticleCard({ article, index }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <Link to={`/article/${index}`} state={article}>
        <div className="overflow-hidden">
          <img
            src={article.urlToImage || '/placeholder.jpg'}
            alt={article.title}
            loading="lazy"
            className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-5 space-y-3">
          <span className="text-xs font-medium text-blue-600">
            {article.source?.name}
          </span>

          <h2 className="font-semibold text-lg leading-snug line-clamp-2">
            {article.title}
          </h2>

          <p className="text-sm text-gray-600 line-clamp-3">
            {article.description}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(article.publishedAt).toDateString()}
            </span>

            <ExternalLink size={14} />
          </div>
        </div>
      </Link>
    </article>
  );
}
