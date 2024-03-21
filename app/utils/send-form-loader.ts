export type LoaderResponse = {
  data: Record<string, string>
  error: boolean
  body?: string
}

export async function sendFormLoader({
  request,
}: {
  request: Request
}): Promise<LoaderResponse> {
  const { searchParams } = new URL(request.url)
  const data = Object.fromEntries(searchParams)
  try {
    const options = { body: searchParams, method: 'POST' }
    const response = await fetch('/service.php', options)
    await response.json() // Not sure if we need this
    return { data, error: false }
  } catch (e) {
    return { data, error: true }
  }
}
