export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-pink-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">💖 Welcome to AI Girlfriend</h1>
        <p className="text-lg text-gray-700 mb-6">Create your perfect companion today</p>
        <a
          href="/chat"
          className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition"
        >
          Go to Chat
        </a>
      </div>
    </div>
  );
}
