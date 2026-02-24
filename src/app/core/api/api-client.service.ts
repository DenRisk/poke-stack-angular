import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {failure, Result, success} from './api-model';
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ApiClient {
  private http = inject(HttpClient);

  async get<T>(url: string): Promise<Result<T>> {
    try {
      const data = await firstValueFrom(this.http.get<T>(url));
      return success(data);
    } catch (err: any) {
      return failure(
        err?.error?.message ?? 'Unexpected server error'
      );
    }
  }
}
