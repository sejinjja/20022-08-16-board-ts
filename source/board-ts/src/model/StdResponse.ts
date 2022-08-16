export default class StdResponse {
  code: number;
  message!: string;
  payload!: any;

  constructor(code: number, message: string = '', payload: any = {}) {
    this.code = code;
    this.message = message;
    this.payload = payload;
  }
}
