import React from 'react'
import { useAppContext } from '../context/AppContext'

export default function SearchBar() {
  const { state, dispatch } = useAppContext()

  return (
    <div className="my-4">
      <input
        value={state.query}
        onChange={(e) => dispatch({ type: 'SET_QUERY', payload: e.target.value })}
        className="w-full sm:w-1/2 px-4 py-2 rounded-md border focus:outline-none focus:ring"
        placeholder="Search users by name..."
      />
    </div>
  )
}