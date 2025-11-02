import React from 'react'

export default function UserCard({ user }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-xs text-gray-500">{user.company?.name}</p>
    </div>
  )
}