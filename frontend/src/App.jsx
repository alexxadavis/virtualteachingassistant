import { useState, useEffect } from 'react'
import logo from './assets/virtualteachingassistantlogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = "Virtual Teaching Assistant"
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBD4]">

      {/* HEADER (Logo Banner) */}
      <header className="w-full py-4">
        <img
          src={logo}
          alt="Virtual Teaching Assistant Logo"
          className="w-full max-h-32 object-contain mx-auto"
        />
      </header>

      {/* HERO SECTION */}
      <section className="text-center px-6 py-16">
        <div className="max-w-3xl mx-auto">

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

          {/* optional counter */}
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
      <footer className="py-6 text-center text-sm text-gray-400 mt-auto">
        Built for students, educators, and lifelong learners.
      </footer>

    </div>
  )
}

export default App
