import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(
    private http: HttpClient
  ) { }

  getMovies(): Observable<any> {
    let urlEndPoint = `${environment.apiUrl}movies`;
    return this.http.get(urlEndPoint, {
      headers: this.httpHeaders
    });
  }

  searchMovies(content: string): Observable<any> {
    let urlEndPoint = `${environment.apiUrl}search`;
    return this.http.post(urlEndPoint, {
      search: content
    }, {
      headers: this.httpHeaders
    });
  }

  getMovie(id: any): Observable<any> {
    let urlEndPoint = `${environment.apiUrl}movie/${id}`;
    return this.http.get(urlEndPoint, {
      headers: this.httpHeaders
    });
  }
}
