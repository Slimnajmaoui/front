import { Component } from '@angular/core';

@Component({
  selector: 'app-userindexadmin',
  standalone: true,
  imports: [],
  templateUrl: './userindexadmin.component.html',
  styleUrl: './userindexadmin.component.css'
})
export class UserindexadminComponent {

}




import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-adminindexadmin',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminindexadmin.component.html',
  styleUrl: './adminindexadmin.component.css'
})
export class AdminindexadminComponent {


  admins: Admin[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public adminService: AdminService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.adminService.getAll().subscribe((data: Admin[])=>{
      this.admins = data;
      console.log(this.admins);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAdmin(id:number){
    this.adminService.delete(id).subscribe(res => {
         this.admins = this.admins.filter(item => item._id !== id);
         console.log('Admin deleted successfully!');
    })
  }
}
