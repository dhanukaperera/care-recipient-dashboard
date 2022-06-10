export interface RequestOptions {
  path: string
  query?: { [x: string]: string }
  isAuthRequired?: boolean
  formData?: boolean
}

export interface RequestOptionsWithBody extends RequestOptions {
  body?: any
}
