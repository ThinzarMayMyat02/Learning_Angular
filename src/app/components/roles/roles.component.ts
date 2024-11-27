import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  name : String = "Angular Application";
  version : number = 18;
  isActive : boolean = false;
  currentDate : Date = new Date();

  inputType: string = "radio";
}
