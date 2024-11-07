

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';

import { Component } from '@angular/core';
  
import { UserService } from '../user.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserfooterComponent } from '../userfooter/userfooter.component';
import { UserheaderComponent } from '../userheader/userheader.component';
import { UsermenuComponent } from '../usermenu/usermenu.component';
  

  
@Component({
  selector: 'app-chefdeprojetviewuser',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojetviewuser.component.html',
  styleUrl: './chefdeprojetviewuser.component.css'
})
export class ChefdeprojetviewuserComponent {



  id!: number;
  user!: User;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
          
    this.userService.find(this.id).subscribe((data: User)=>{
      this.user = data;
    });
  }
  
}
