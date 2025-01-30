import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET all attendance records
export async function GET() {
  try {
    const attendance = await prisma.attendance.findMany()
    return NextResponse.json(attendance)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch attendance' },
      { status: 500 }
    )
  }
}

// POST a new attendance record
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newAttendance = await prisma.attendance.create({
      data: {
        date: new Date(body.date),
        status: body.status,
        studentId: body.studentId,
      },
    })
    return NextResponse.json(newAttendance, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create attendance record' },
      { status: 500 }
    )
  }
}
