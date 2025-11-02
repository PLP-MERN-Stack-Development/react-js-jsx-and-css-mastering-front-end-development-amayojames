import React from 'react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">React Tailwind Demo</h1>
        <nav className="hidden sm:flex gap-4">
          <a href="#users" className="hover:underline">Users</a>
          <a href="#todos" className="hover:underline">Todos</a>
        </nav>
      </div>
    </header>
  )
}