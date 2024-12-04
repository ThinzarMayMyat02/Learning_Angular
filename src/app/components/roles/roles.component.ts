import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html'
})
export class RolesComponent implements OnInit{
  isLoading: boolean = true;
  http = inject(HttpClient);
  allRoles: IRole [] = [];

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
   this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles')
                    .subscribe((resp:any)=>{this.allRoles = resp.data;this.isLoading=false});
  }

  // name : string = "Angular Application";
  // version : number = 18;
  // isActive : boolean = false;
  // currentDate : Date = new Date();

  // inputType: string = "radio";

  // selectedState: string = '';

  // showWelcomeMsg(){
  //   alert('Welcome angular tutorial.')
  // }

  // showAlertMessage(message: string){
  //   alert(message);
  // }
}
