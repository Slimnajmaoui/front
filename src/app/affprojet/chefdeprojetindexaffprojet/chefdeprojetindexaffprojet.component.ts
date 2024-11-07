

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AffprojetService } from '../affprojet.service';
import { Affprojet } from '../affprojet';
import { ReactiveFormsModule } from '@angular/forms';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';

@Component({
  selector: 'app-chefdeprojetindexaffprojet',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojetindexaffprojet.component.html',
  styleUrl: './chefdeprojetindexaffprojet.component.css'
})
export class ChefdeprojetindexaffprojetComponent {



  affprojets: Affprojet[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public affprojetService: AffprojetService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.affprojetService.getAll().subscribe((data: Affprojet[])=>{
      this.affprojets = data;
      console.log(this.affprojets);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAffprojet(id:number){
    this.affprojetService.delete(id).subscribe(res => {
         this.affprojets = this.affprojets.filter(item => item._id !== id);
         console.log('Affprojet deleted successfully!');
    })
  }
}
