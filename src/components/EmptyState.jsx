import { FileSearch } from 'lucide-react';

export default function EmptyState({
  title = 'No articles found',
  description = 'Try changing your search or filters to find relevant news.',
}) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="bg-blue-50 p-5 rounded-full mb-6">
        <FileSearch className="h-10 w-10 text-blue-600" />
      </div>

      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 max-w-md">{description}</p>
    </div>
  );
}
