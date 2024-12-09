import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { ApiResponseModel } from '../model/interface/role';
import { ClientProject } from '../model/class/ClientProject';
import { Constant } from '../constant/Constant';

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
    return this.http.delete<ApiResponseModel>(environment.API_URL + '/DeleteClientByClientId?clientId=' + id);
  }

  getAllEmployee():Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + '/GetAllEmployee');
  }

 updateClientProject(clientProject: ClientProject):Observable<ApiResponseModel>{
  return this.http.post<ApiResponseModel>(environment.API_URL+'/AddUpdateClientProject',clientProject);
 }

 getAllUser(){
  return this.http.get("https://jsonplaceholder.typicode.com/users");
 }

 getAllClientProject():Observable<ApiResponseModel>{
  return this.http.get<ApiResponseModel>(environment.API_URL+"/"+Constant.API_METHOD.GET_ALL_CLIENTPROJECT);
 }
}
