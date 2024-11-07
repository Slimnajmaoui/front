




import { Component } from '@angular/core';
  
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
  
@Component({
  selector: 'app-chefdeprojetviewadmin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojetviewadmin.component.html',
  styleUrl: './chefdeprojetviewadmin.component.css'
})
export class ChefdeprojetviewadminComponent {
  
  id!: number;
  admin!: Admin;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['adminId'];
          
    this.adminService.find(this.id).subscribe((data: Admin)=>{
      this.admin = data;
    });
  }
  
}
