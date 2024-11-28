import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';
import { ApiResponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  isLoading: boolean = true;
  allDesignations:IDesignation [] = [];
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((resp:ApiResponseModel)=> {
                this.allDesignations = resp.data;  
                this.isLoading = false;     
    },
    error=>{
      this.isLoading = false;
      alert('Api error/ Network error occured.');
    }
  )
  }
}
