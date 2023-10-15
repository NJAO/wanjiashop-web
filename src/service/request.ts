import { service } from "./service"
import { api } from "./api"

interface ResponseStruct<T = any> {
  data: T
  errmsg: string
  errno: number
}

const get = <T = any, R = ResponseStruct<T>>(
  url: keyof typeof api,
  params: object = {}
): Promise<R> => {
  return service.request<T, R>({
    method: "get",
    url: api[url],
    params,
  })
}

export { get }
