import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  loginObj:any = {
    email:'',
    password: ''
  }

  router = inject(Router);
  onLogin(){
    if(this.loginObj.email == "admin@gmail.com" && this.loginObj.password == "122333"){
      this.router.navigateByUrl('/client');
      localStorage.setItem('empErpUser',this.loginObj.email);
    }else{
      alert("Wrong Credential.")
    }
  }
}
