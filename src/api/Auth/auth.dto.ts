import { z } from 'zod'

export const SignupDTO = z.object({
  email: z.string().trim().email(),
  name: z.string().trim(),
  password: z.string(),
  confirmPassword: z.string(),
  roleId: z.string().trim(),
})
export type SignupDTO = z.input<typeof SignupDTO>
