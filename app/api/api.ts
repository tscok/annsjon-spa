export class Api {
  private async makeRequest(
    path: string,
    method: 'GET' | 'POST',
    body?: unknown
  ) {
    try {
      const options = { method, body: JSON.stringify(body) }
      const response = await fetch(path, options)
      const data = await response.json()
      return data
    } catch (error) {
      throw new Error(`${method} request to ${path} failed`)
    }
  }

  post(path: string, payload: Record<string, unknown>) {
    return this.makeRequest(path, 'POST', payload)
  }
}
