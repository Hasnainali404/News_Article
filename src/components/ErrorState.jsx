import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorState({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="bg-red-50 p-5 rounded-full mb-6">
        <AlertTriangle className="h-10 w-10 text-red-600" />
      </div>

      <h2 className="text-xl font-semibold mb-2">Oops!</h2>
      <p className="text-gray-500 max-w-md mb-6">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
        >
          <RefreshCw size={16} />
          Retry
        </button>
      )}
    </div>
  );
}
