import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel, Employee } from '../../model/interface/role';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientProjectComponent implements OnInit {

  clientService = Inject(ClientService);
  employeeList : Employee[] = [];
  clientList : Client[] = [];

  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
  }
  //clientProjectList: Client[] = [];

  ProjectsForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl(""),
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

  getAllClient(){
    this.clientService.getAllClients().subscribe((res:ApiResponseModel)=>{
      if (res.result) {
        this.clientList = res.data;
      }
    });
  }
}
