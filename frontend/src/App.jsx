import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = "Virtual Teaching Assistant"
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* HERO SECTION */}
      <section className="flex-1 flex items-center justify-center text-center px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-3xl">

          <h1 className="text-5xl font-bold text-gray-800">
            Welcome to Virtual Teaching Assistant
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Your AI-powered learning companion designed to help you study smarter,
            understand faster, and stay organized.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>

          {/* optional counter kept for dev/testing */}
          <div className="mt-10">
            <button
              className="text-sm text-gray-500 underline"
              onClick={() => setCount((c) => c + 1)}
            >
              Dev Counter: {count}
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-400">
        Built for students, educators, and lifelong learners.
      </footer>
    </div>
  )
}

export default App
