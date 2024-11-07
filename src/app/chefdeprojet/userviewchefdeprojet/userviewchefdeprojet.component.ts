

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { ChefdeprojetService } from '../chefdeprojet.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Chefdeprojet } from '../chefdeprojet';
  

import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-userviewchefdeprojet',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './userviewchefdeprojet.component.html',
  styleUrl: './userviewchefdeprojet.component.css'
})
export class UserviewchefdeprojetComponent {


  
  id!: number;
  chefdeprojet!: Chefdeprojet;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public chefdeprojetService: ChefdeprojetService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['chefdeprojetId'];
          
    this.chefdeprojetService.find(this.id).subscribe((data: Chefdeprojet)=>{
      this.chefdeprojet = data;
    });
  }
  
}
