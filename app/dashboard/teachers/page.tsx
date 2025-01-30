'use client' // Mark this component as a Client Component
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    // Fetch teachers from the API
    fetch('/api/teachers')
      .then((res) => res.json())
      .then((data) => setTeachers(data))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Teachers</h1>
      <Link
        href="/dashboard/teachers/add"
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mb-4"
      >
        Add Teacher
      </Link>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Teacher List</h2>
        <ul>
          {teachers.map((teacher: any) => (
            <li key={teacher.id} className="mb-2">
              {teacher.name} - {teacher.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
