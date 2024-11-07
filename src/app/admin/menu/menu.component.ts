import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  profil:any ;
  constructor(private route:Router){}
  ngOnInit(){
    this.profil=localStorage.getItem("Role")
  }
  deconnexion(){
    localStorage.removeItem("User");
    localStorage.removeItem("Token")
    localStorage.removeItem("Email");
    localStorage.removeItem("Role");
    localStorage.removeItem("Id");
    setTimeout(() => {
      window.location.reload();
  }, 1000);  
    this.route.navigateByUrl("")
   
    
  }}
