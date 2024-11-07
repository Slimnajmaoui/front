


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProjetService } from '../projet.service';
import { Projet } from '../projet';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-userindexprojet',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './userindexprojet.component.html',
  styleUrl: './userindexprojet.component.css'
})
export class UserindexprojetComponent {


  projets: Projet[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public projetService: ProjetService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.projetService.getAll().subscribe((data: Projet[])=>{
      this.projets = data;
      console.log(this.projets);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteProjet(id:number){
    this.projetService.delete(id).subscribe(res => {
         this.projets = this.projets.filter(item => item._id !== id);
         console.log('Projet deleted successfully!');
    })
  }
}
