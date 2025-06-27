// pages/index.js

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Girlfriend | Home</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-pink-100 p-8">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
            💖 Welcome to Your AI Girlfriend
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Create your perfect AI companion – loving, supportive, always there for you.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/chat">
              <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition">
                💬 Chat Now
              </button>
            </Link>
            <Link href="/subscribe">
              <button className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-full shadow-md hover:bg-purple-600 transition">
                💎 Subscribe
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
