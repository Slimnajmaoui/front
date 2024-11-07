

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ChefdeprojetService } from '../chefdeprojet.service';
import { Chefdeprojet } from '../chefdeprojet';


import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-userindexchefdeprojet',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './userindexchefdeprojet.component.html',
  styleUrl: './userindexchefdeprojet.component.css'
})
export class UserindexchefdeprojetComponent {

  chefdeprojets: Chefdeprojet[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public chefdeprojetService: ChefdeprojetService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.chefdeprojetService.getAll().subscribe((data: Chefdeprojet[])=>{
      this.chefdeprojets = data;
      console.log(this.chefdeprojets);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteChefdeprojet(id:number){
    this.chefdeprojetService.delete(id).subscribe(res => {
         this.chefdeprojets = this.chefdeprojets.filter(item => item._id !== id);
         console.log('Chefdeprojet deleted successfully!');
    })
  }
}
