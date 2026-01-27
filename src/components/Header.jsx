import { Search } from 'lucide-react';

export default function Header({ search, setSearch }) {
  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6">
        <h1 className="text-2xl font-bold tracking-tight">
          News<span className="text-blue-600">Daily</span>
        </h1>

        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search latest headlines..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>
    </header>
  );
}
