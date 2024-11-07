

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TacheService } from '../tache.service';
import { Tache } from '../tache';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-userindextache',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './userindextache.component.html',
  styleUrl: './userindextache.component.css'
})
export class UserindextacheComponent {

  taches: Tache[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public tacheService: TacheService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.tacheService.getAll().subscribe((data: Tache[])=>{
      this.taches = data;
      console.log(this.taches);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteTache(id:number){
    this.tacheService.delete(id).subscribe(res => {
         this.taches = this.taches.filter(item => item._id !== id);
         console.log('Tache deleted successfully!');
    })
  }
}
