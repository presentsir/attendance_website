import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET all students
export async function GET() {
  try {
    const students = await prisma.student.findMany()
    return NextResponse.json(students)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch students' },
      { status: 500 }
    )
  }
}

// POST a new student
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newStudent = await prisma.student.create({
      data: {
        rollNumber: body.rollNumber,
        name: body.name,
        mobile: body.mobile,
        classId: body.classId,
      },
    })
    return NextResponse.json(newStudent, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create student' },
      { status: 500 }
    )
  }
}
