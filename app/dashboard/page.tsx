'use client' // Mark this component as a Client Component
import { signOut } from 'next-auth/react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Dashboard</h1>
      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Add cards for teachers, classes, students, and attendance */}
      </div>
    </div>
  )
}
