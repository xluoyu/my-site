import Request from './request'

export const GetTodoList = () => {
  return Request({
    url: '/todo',
    method: 'GET',
  })
}

export const GetTodoOne = (data: { id: number }) => {
  return Request({
    url: `/todo/${data.id}`,
    method: 'GET',
  })
}

export const CreateTodo = (data: {
  title: string
  content?: string
}) => {
  return Request({
    url: '/todo',
    method: 'POST',
    data,
  })
}

export const PatchTodo = (data: {
  id: number | null
  title: string
  content?: string
}) => {
  return Request({
    url: `/todo/${data.id}`,
    method: 'patch',
    data,
  })
}

export const DeleteTodo = (data: { id: number }) => {
  return Request({
    url: `/todo/${data.id}`,
    method: 'delete',
  })
}
