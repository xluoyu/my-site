import { Get, Post } from '@/api/request'

export function Search(params) {
  return Get({
    url: '/music/search',
    params,
  })
}
