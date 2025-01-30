export interface School {
  id?: number
  name: string
  email: string
  affNo: string
  state: string
  district: string
  region: string
  address: string
  pincode: string
  createdAt?: Date
  updatedAt?: Date
}

export interface ApiResponse {
  success: boolean
  data?: School | School[]
  error?: string
}
