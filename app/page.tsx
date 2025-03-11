import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          <span className="text-blue-400">Apparatus</span>AI Documentation
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300">
          AI-powered business forecasting and analytics platform to help businesses analyze trends, 
          forecast financial outcomes, and make data-driven decisions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/docs" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Explore Docs
          </Link>
          <Link href="https://apparatusai.space" className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors">
            Visit Website
          </Link>
        </div>
      </div>
    </main>
  );
}
