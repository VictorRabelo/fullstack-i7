import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private httpBackend: HttpBackend,
  ) { }

  getAddressAPI(cep: any): Promise<any> {
    cep = cep.replace(/[^0-9]/g, '');
    const http = new HttpClient(this.httpBackend);
    return http.get(`https://viacep.com.br/ws/${cep}/json`).toPromise();
  }
}
