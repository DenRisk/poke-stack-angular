import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ApiResult, success, failure } from './api-model';

@Injectable({
  providedIn: 'root',
})
export class ApiClient {
  private http = inject(HttpClient);

  async get<T>(url: string): Promise<ApiResult<T>> {
    try {
      const data = await firstValueFrom(this.http.get<T>(url));
      return success(data);
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        return failure({
          message: error.message,
          status: error.status,
          url,
          original: error,
        });
      }

      return failure({
        message: 'Unexpected error',
        url,
        original: error,
      });
    }
  }
}
