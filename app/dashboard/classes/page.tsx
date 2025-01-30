'use client' // Mark this component as a Client Component
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ClassesPage() {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    // Fetch classes from the API
    fetch('/api/classes')
      .then((res) => res.json())
      .then((data) => setClasses(data))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Classes</h1>
      <Link
        href="/dashboard/classes/add"
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mb-4"
      >
        Add Class
      </Link>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Class List</h2>
        <ul>
          {classes.map((cls: any) => (
            <li key={cls.id} className="mb-2">
              {cls.name} - Teacher ID: {cls.teacherId}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
