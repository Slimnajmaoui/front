


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

  
import { AvprojetService } from '../../avprojet/avprojet.service';
import { Avprojet } from '../../avprojet/avprojet';

import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chefdeprojetviewaffprojet',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojetviewaffprojet.component.html',
  styleUrl: './chefdeprojetviewaffprojet.component.css'
})
export class ChefdeprojetviewaffprojetComponent {
  
  id!: number;
  avprojet!: Avprojet;
affprojet: any;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public avprojetService: AvprojetService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['avprojetId'];
          
    this.avprojetService.find(this.id).subscribe((data: Avprojet)=>{
      this.avprojet = data;
    });
  }
  
}
