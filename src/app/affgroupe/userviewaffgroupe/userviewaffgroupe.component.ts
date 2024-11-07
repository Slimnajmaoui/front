



import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { AffgroupeService } from '../affgroupe.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Affgroupe } from '../affgroupe';
  

import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-userviewaffgroupe',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './userviewaffgroupe.component.html',
  styleUrl: './userviewaffgroupe.component.css'
})
export class UserviewaffgroupeComponent {
  
  id!: number;
  affgroupe!: Affgroupe;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public affgroupeService: AffgroupeService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['affgroupeId'];
          
    this.affgroupeService.find(this.id).subscribe((data: Affgroupe)=>{
      this.affgroupe = data;
    });
  }
  
}
