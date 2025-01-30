import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { School, ApiResponse } from './types'

const prisma = new PrismaClient()

// GET request handler
export async function GET(): Promise<NextResponse<ApiResponse>> {
  try {
    const schools = await prisma.school.findMany()
    return NextResponse.json({ success: true, data: schools })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch schools' },
      { status: 500 }
    )
  }
}

// POST request handler
export async function POST(
  request: Request
): Promise<NextResponse<ApiResponse>> {
  try {
    const body: School = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.affNo) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const newSchool = await prisma.school.create({
      data: body,
    })
    return NextResponse.json(
      { success: true, data: newSchool },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create school' },
      { status: 500 }
    )
  }
}