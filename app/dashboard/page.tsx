'use client' // Mark this component as a Client Component
import { signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Dashboard</h1>
      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mb-8"
      >
        Logout
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Teachers Card */}
        <Link href="/dashboard/teachers">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Teachers</h2>
            <p>Manage teachers here.</p>
          </div>
        </Link>

        {/* Classes Card */}
        <Link href="/dashboard/classes">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Classes</h2>
            <p>Manage classes here.</p>
          </div>
        </Link>

        {/* Students Card */}
        <Link href="/dashboard/students">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Students</h2>
            <p>Manage students here.</p>
          </div>
        </Link>

        {/* Attendance Card */}
        <Link href="/dashboard/attendance">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Attendance</h2>
            <p>Manage attendance here.</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
