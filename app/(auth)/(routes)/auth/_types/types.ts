export interface ILoginResponse {
  statusCode: undefined | number;
  token?: string | undefined;
  error?: string | undefined;
}

export interface IRegisterResponse {
  statusCode: undefined | number;
  error?: string | undefined;
}
