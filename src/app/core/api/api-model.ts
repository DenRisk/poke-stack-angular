export type ApiStatus = 'idle' | 'loading' | 'success' | 'error';

export interface Result<T> {
  status: ApiStatus;
  data: T | null;
  error: string | null;
}

export const idle = <T>(): Result<T> => ({
  status: 'idle',
  data: null,
  error: null,
});

export const loading = <T>(): Result<T> => ({
  status: 'loading',
  data: null,
  error: null,
});

export const success = <T>(data: T): Result<T> => ({
  status: 'success',
  data,
  error: null,
});

export const failure = <T>(error: string): Result<T> => ({
  status: 'error',
  data: null,
  error,
});
