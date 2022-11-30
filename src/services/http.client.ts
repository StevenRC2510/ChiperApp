import axios, {AxiosInstance} from 'axios';

export interface HttpClientConfigInterface {
  baseUrl: string;
  headers?: any;
}

export const REQUEST_MS_TIMEOUT = 20000;

export default abstract class HttpClient {
  private instance: AxiosInstance;

  protected get: Function;

  protected post: Function;

  protected delete: Function;

  protected patch: Function;

  protected put: Function;

  constructor(config: HttpClientConfigInterface) {
    this.instance = axios.create({
      baseURL: config.baseUrl,
      timeout: REQUEST_MS_TIMEOUT,
      headers: {...config?.headers, 'Content-type': 'application/json'},
    });
    this.get = this.instance.get.bind(this.instance);
    this.post = this.instance.post.bind(this.instance);
    this.delete = this.instance.delete.bind(this.instance);
    this.patch = this.instance.patch.bind(this.instance);
    this.put = this.instance.put.bind(this.instance);
  }
}
