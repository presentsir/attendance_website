'use client' // Mark this component as a Client Component
import { useState, useEffect } from 'react'

export default function AttendancePage() {
  const [attendance, setAttendance] = useState([])

  useEffect(() => {
    // Fetch attendance from the API
    fetch('/api/attendance')
      .then((res) => res.json())
      .then((data) => setAttendance(data))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Attendance</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-600 mb-4">
          Attendance List
        </h2>
        <ul>
          {attendance.map((record: any) => (
            <li key={record.id} className="mb-2">
              Date: {new Date(record.date).toLocaleDateString()} - Student ID:{' '}
              {record.studentId} - Status: {record.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
