export default function Filters({ setCategory }) {
  return (
    <div className="flex gap-3 flex-wrap">
      {['technology', 'business', 'sports', 'health'].map(cat => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className="px-4 py-1.5 rounded-full cursor-pointer border text-sm hover:bg-blue-50"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
