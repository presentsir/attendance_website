'use client' // Mark this component as a Client Component
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddClassPage() {
  const [name, setName] = useState('')
  const [teacherId, setTeacherId] = useState('')
  const router = useRouter()
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/classes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, teacherId: Number(teacherId) }),
    })
    if (response.ok) {
      router.push('/dashboard/classes')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Add Class</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Class Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Teacher ID</label>
          <input
            type="number"
            value={teacherId}
            onChange={(e) => setTeacherId(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Class
        </button>
      </form>
    </div>
  )
}
