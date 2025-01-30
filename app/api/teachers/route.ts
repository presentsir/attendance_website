import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET all teachers
export async function GET() {
  try {
    const teachers = await prisma.teacher.findMany()
    return NextResponse.json(teachers)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch teachers' },
      { status: 500 }
    )
  }
}

// POST a new teacher
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newTeacher = await prisma.teacher.create({
      data: {
        name: body.name,
        email: body.email,
        mobile: body.mobile,
        schoolId: body.schoolId,
      },
    })
    return NextResponse.json(newTeacher, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create teacher' },
      { status: 500 }
    )
  }
}
