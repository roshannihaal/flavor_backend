import { z } from 'zod'

export const GenerateJwtResponse = z.object({
  sessionId: z.string(),
  token: z.string(),
})
export type GenerateJwtResponse = z.input<typeof GenerateJwtResponse>
