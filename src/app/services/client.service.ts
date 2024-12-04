import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { ApiResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients():Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + '/GetAllClients');
  }

  updateClient(client:Client):Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.API_URL + '/AddUpdateClient',client);
  }

  deleteClientById(id:number):Observable<ApiResponseModel>{
    return this.http.delete<ApiResponseModel>(environment.API_URL + '/DeleteClientByClientId?clientId=' + id)
  }

  getAllEmployee():Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + '/GetAllEmployee');
  }
}
