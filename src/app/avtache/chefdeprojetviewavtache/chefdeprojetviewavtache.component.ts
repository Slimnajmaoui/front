

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { AvtacheService } from '../avtache.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Avtache } from '../avtache';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
  

@Component({
  selector: 'app-chefdeprojetviewavtache',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojetviewavtache.component.html',
  styleUrl: './chefdeprojetviewavtache.component.css'
})
export class ChefdeprojetviewavtacheComponent {


  
  id!: number;
  avtache!: Avtache;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public avtacheService: AvtacheService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['avtacheId'];
          
    this.avtacheService.find(this.id).subscribe((data: Avtache)=>{
      this.avtache = data;
    });
  }
  
}
