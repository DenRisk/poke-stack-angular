export interface ApiError {
  message: string;
  status?: number;
  url?: string;
  original?: unknown;
}

export type ApiResult<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; error: ApiError };

export const success = <T>(data: T): ApiResult<T> => ({ status: 'success', data });
export const failure = <T>(error: ApiError | string): ApiResult<T> =>
  typeof error === 'string'
    ? { status: 'error', error: { message: error } }
    : { status: 'error', error };
