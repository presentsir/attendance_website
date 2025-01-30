import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET all classes
export async function GET() {
  try {
    const classes = await prisma.class.findMany()
    return NextResponse.json(classes)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch classes' },
      { status: 500 }
    )
  }
}

// POST a new class
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newClass = await prisma.class.create({
      data: {
        name: body.name,
        teacherId: body.teacherId,
      },
    })
    return NextResponse.json(newClass, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create class' },
      { status: 500 }
    )
  }
}
