import { NextResponse } from "next/server"
import { z } from "zod"

export async function GET(req: Request) {
  const bodyRawJson = req.json()

  const bodyValidationResult = z.object({
    providerToken: z.string(),
    providerRefreshToken: z.string()
  }).safeParse(bodyRawJson)

  if(!bodyValidationResult.success) {
    return NextResponse.json({}, { status: 400 })
  }
}