import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { connexionService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indexapplication',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './indexapplication.component.html',
  styleUrl: './indexapplication.component.css'
})
export class IndexapplicationComponent {
loginform!:FormGroup ;

constructor(private service:connexionService,private route:Router){}
ngOnInit(){
  this.loginform = new FormGroup({
    email: new FormControl("", [Validators.required ]),
    password: new FormControl("", [Validators.required ]),
  

  })
}
connexion(){
  this.service.login(this.loginform.value).subscribe((res)=>{

    setTimeout(() => {
      window.location.reload(); 
    }, 700); 
    window.alert("connexion avec succées")
this.route.navigate(["adminuser/index"]);
  })

 
}}
