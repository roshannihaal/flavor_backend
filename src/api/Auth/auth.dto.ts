import { z } from 'zod'

export const SignupDTO = z.object({
  email: z.string().trim().email(),
  name: z.string().trim(),
  password: z.string(),
  confirmPassword: z.string(),
  roleId: z.string().trim().optional(),
})
export type SignupDTO = z.input<typeof SignupDTO>

export const CreateUser = z.object({
  email: z.string().trim().email(),
  name: z.string().trim(),
  password: z.string(),
  role: z
    .object({
      connect: z.object({
        id: z.string().trim(),
      }),
    })
    .optional(),
})
export type CreateUser = z.input<typeof CreateUser>
