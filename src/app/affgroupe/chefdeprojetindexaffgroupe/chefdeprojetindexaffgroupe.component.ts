


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AffgroupeService } from '../affgroupe.service';
import { Affgroupe } from '../affgroupe';


import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chefdeprojetindexaffgroupe',
  standalone: true,
  imports: [RouterModule,CommonModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojetindexaffgroupe.component.html',
  styleUrl: './chefdeprojetindexaffgroupe.component.css'
})
export class ChefdeprojetindexaffgroupeComponent {


  affgroupes: Affgroupe[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public affgroupeService: AffgroupeService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.affgroupeService.getAll().subscribe((data: Affgroupe[])=>{
      this.affgroupes = data;
      console.log(this.affgroupes);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAffgroupe(id:number){
    this.affgroupeService.delete(id).subscribe(res => {
         this.affgroupes = this.affgroupes.filter(item => item._id !== id);
         console.log('Affgroupe deleted successfully!');
    })
  }
}
