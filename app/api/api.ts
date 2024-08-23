export class Api {
  private async makeRequest(
    path: string,
    method: 'GET' | 'POST',
    body?: FormData
  ) {
    try {
      const response = await fetch(path, { method, body })
      const data = await response.json()
      return data
    } catch (error) {
      throw new Error(`${method} request to ${path} failed`)
    }
  }

  post(path: string, body: FormData) {
    return this.makeRequest(path, 'POST', body)
  }
}
