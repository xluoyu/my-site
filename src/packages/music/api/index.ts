import { Get, Post } from '@/api/request'

export function Search(params) {
  return Get({
    url: '/music/search',
    params,
  })
}

export function GetSearchSuggest(params) {
  return Get({
    url: '/music/searchSuggest',
    params,
  })
}

export function GetPlayList() {
  return Get({
    url: '/music/getPlaylist',
  })
}
