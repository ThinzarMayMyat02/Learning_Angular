import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel } from '../../model/interface/role';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { AlertComponentComponent } from "../../reusable-component/alert-component/alert-component.component";
import { ButtonComponent } from "../../reusable-component/button/button.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule, UpperCasePipe, AlertComponentComponent, ButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  client: Client = new Client();
  clientList: Client[] = [];

  currentDate = new Date();

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

 updateClient(data:string){
  debugger;
  this.clientService.updateClient(this.client).subscribe((resp:ApiResponseModel)=>{
    if (resp.result ) {
      alert("Client is successfully created.");
      this.getAllClient();
      this.client = new Client();
    }else{
      alert(resp.message);
    }
  })
 }

 editClient(client:Client){
    this.client = client;
 }

 deleteClient(id:number){
  var isDelete = confirm("Are you sure to delete Client");
  if (isDelete) {
    this.clientService.deleteClientById(id).subscribe((resp:ApiResponseModel)=>{
      if (resp.result) {
        alert("Client deleted successfully."+resp.result);
        this.getAllClient();
      }else{
        alert(resp.message);
      }
    })
  }

 }
}
