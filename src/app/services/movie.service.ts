/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/ban-types */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env  } from './../../environments/environment';
export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }
  getTopRatedMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${env.baseUrl}/movie/popular?api_key=${env.apiKey}&page=${page}`);
  }
  getMovieDetails(id: string): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${env.baseUrl}/movie/${id}?api_key=${env.apiKey}`
      );
  }
}
