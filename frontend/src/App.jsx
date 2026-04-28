import { useState, useEffect } from 'react'
import logo from './assets/virtualteachingassistant.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = "Virtual Teaching Assistant"
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* LOGO SECTION */}
      <section className="flex-1 flex items-center justify-center text-center px-6 bg-[#FDFBD4]">
        <div className="max-w-3xl">
          <img src={logo} alt="Hero" className="mx-auto w-40 mb-6" />

          <h1 className="text-5xl font-bold text-[#9DC183]">
            Welcome to Virtual Teaching Assistant
          </h1>

          <p className="mt-6 text-lg text-[#7FA96B]">
            Your AI-powered learning companion designed to help you study smarter,
            understand faster, and stay organized.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <button className="px-6 py-3 rounded-xl bg-[#9DC183] text-white font-medium hover:opacity-90 transition">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-xl border border-[#9DC183] text-[#9DC183] hover:bg-[#F0F7E8] transition">
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
