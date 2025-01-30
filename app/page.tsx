'use client' // Add this line at the top to mark the component as a Client Component
import { signIn } from 'next-auth/react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Attendance Website
      </h1>
      <button
        onClick={() => signIn('google')}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Login with Google
      </button>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
        Register as School
      </button>
    </div>
  )
}
