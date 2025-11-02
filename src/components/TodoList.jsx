import React, { useMemo } from 'react'
import { useAppContext } from '../context/AppContext'

function TodoItem({ todo }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded shadow-sm">
      <input type="checkbox" defaultChecked={todo.completed} disabled />
      <div>
        <p className="text-sm">{todo.title}</p>
      </div>
    </div>
  )
}

export default function TodoList() {
  const { state } = useAppContext()

  const todos = useMemo(() => state.todos.slice(0, 10), [state.todos])

  return (
    <div className="space-y-3">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </div>
  )
}