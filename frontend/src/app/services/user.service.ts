import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(`${environment.apiUrl}/users`);
  }

  getById(id: number) {
    return this.http.get<any>(`${environment.apiUrl}/users/${id}`).pipe(map(res =>{ return res.response }));
  }

  store(store: any){
    return this.http.post<any>(`${environment.apiUrl}/users`, store);
  }

  update(update: any){
    return this.http.put<any>(`${environment.apiUrl}/users/${update._id}`, update);
  }

  delete(id: number){
    return this.http.delete<any>(`${environment.apiUrl}/users/${id}`);
  }
}
