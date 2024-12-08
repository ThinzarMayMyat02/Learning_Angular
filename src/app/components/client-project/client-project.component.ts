import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel, Employee } from '../../model/interface/role';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientProjectComponent implements OnInit {

 clientService = inject(ClientService);
  employeeList : Employee[] = [];
  clientList : Client[] = [];

  userList$ : Observable<any> = new Observable<any>;

  ngOnInit(): void {
    console.log("before getAllClient");
    this.getAllClient();
    console.log("after getAllClient");
    this.getAllEmployee();

    //for using async pipe
    this.userList$ = this.clientService.getAllUser();
  }
  //clientProjectList: Client[] = [];

  ClientProjectsForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("",[Validators.required,Validators.minLength(5)]),
    startDate : new FormControl(""),
    expectedEndDate : new FormControl(""),
    leadByEmpId : new FormControl(""),
    completedDate : new FormControl(""),
    contactPerson : new FormControl(""),
    contactPersonContactNo : new FormControl(""),
    totalEmpWorking : new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails : new FormControl(""),
    contactPersonEmailId : new FormControl(""),
    clientId : new FormControl("")
  });

  getAllEmployee(){
    this.clientService.getAllEmployee().subscribe((res:ApiResponseModel)=>{
      if (res.result) {
        this.employeeList = res.data;
      }
    });
  }

 getAllClient() {
  this.clientService.getAllClients().subscribe((resp: ApiResponseModel) => {
    console.log("response from client project: ", resp.result);
    this.clientList = resp.data;
    //this.clientList = [...resp.data]; // Immutable assignment
    console.log("the data::", this.clientList);
  });
}

saveClientProject(){
  const clientProjectFormValue = this.ClientProjectsForm.value;
  debugger;
  this.clientService.updateClientProject(clientProjectFormValue).subscribe((resp:ApiResponseModel)=>{
    if(resp.result){
      alert("Client Project create successfuly");
    }else{
      console.log(resp.message);
    }
  });
}

}
