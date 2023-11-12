import { env } from '@/env'

export function api(path: string, init?: any) {
  const baseUrl = env.NEXT_PUBLIC_API_BASEURL
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), baseUrl)

  return fetch(url, init)
}
