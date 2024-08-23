import { Api } from './api'

type ServiceResponse = { status: 200 | 400 }

export class FormClient extends Api {
  async submit(data: FormData): Promise<ServiceResponse> {
    return this.post('/service.php', data)
  }
}
