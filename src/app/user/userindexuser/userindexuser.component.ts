

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { UserService } from '../user.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User } from '../user';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserfooterComponent } from '../userfooter/userfooter.component';
import { UserheaderComponent } from '../userheader/userheader.component';
import { UsermenuComponent } from '../usermenu/usermenu.component';
@Component({
  selector: 'app-userindexuser',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './userindexuser.component.html',
  styleUrl: './userindexuser.component.css'
})
export class UserindexuserComponent {


  users: User[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public userService: UserService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.userService.getAll().subscribe((data: User[])=>{
      this.users = data;
      console.log(this.users);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteUser(id:number){
    this.userService.delete(id).subscribe(res => {
         this.users = this.users.filter(item => item._id !== id);
         console.log('User deleted successfully!');
    })
  }


}
