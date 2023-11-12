import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASEURL: z.string().url(),
  APP_URL: z.string().url()
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  // eslint-disable-next-line
  console.error('Invalid environment variables:', parsedEnv.error.flatten().fieldErrors)

  throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data
