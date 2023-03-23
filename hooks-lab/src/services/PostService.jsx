import { http } from "./BaseService"

export const getPosts = () => {
  return http.get('/posts')
}

export const getDetail = (id) => {
  return http.get(`/posts/${id}?_embed=comments`)
}