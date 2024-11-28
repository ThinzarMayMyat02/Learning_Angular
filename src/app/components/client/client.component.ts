import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  
  client: Client = new Client();
  clientList: Client[] = [];

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.getAllClient();
  }

 getAllClient(){
    this.clientService.getAllClients().subscribe((resp:ApiResponseModel)=>{
      console.log("response"+resp.result);
      this.clientList = resp.data;
    });
 }

 updateClient(){
  debugger;
  this.clientService.updateClient(this.client).subscribe((resp:ApiResponseModel)=>{
    if (resp.result ) {
      alert("Client is successfully created.");
      this.getAllClient();
    }else{
      alert(resp.message);
    }
  })
 }

 deleteClient(){

 }
}
