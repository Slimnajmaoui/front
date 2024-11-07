

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-adminindexuser',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminindexuser.component.html',
  styleUrl: './adminindexuser.component.css'
})
export class AdminindexuserComponent {
  users: User[] = [];
    us:any 
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
    
    this.userService.Userbyprofil().subscribe((res:any)=>{
      this.us=res ; 
      console.log(this.us)
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
