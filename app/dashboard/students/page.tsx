'use client' // Mark this component as a Client Component
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function StudentsPage() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    // Fetch students from the API
    fetch('/api/students')
      .then((res) => res.json())
      .then((data) => setStudents(data))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Students</h1>
      <Link
        href="/dashboard/students/add"
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mb-4"
      >
        Add Student
      </Link>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Student List</h2>
        <ul>
          {students.map((student: any) => (
            <li key={student.id} className="mb-2">
              {student.name} - Roll Number: {student.rollNumber}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
