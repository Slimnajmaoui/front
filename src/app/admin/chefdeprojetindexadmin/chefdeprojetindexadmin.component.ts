



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';
import { ReactiveFormsModule } from '@angular/forms';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';

@Component({
  selector: 'app-chefdeprojetindexadmin',
  standalone: true,
  imports: [RouterModule,CommonModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojetindexadmin.component.html',
  styleUrl: './chefdeprojetindexadmin.component.css'
})
export class ChefdeprojetindexadminComponent {



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
