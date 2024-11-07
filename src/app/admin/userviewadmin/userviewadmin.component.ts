import { Component } from '@angular/core';

@Component({
  selector: 'app-userviewadmin',
  standalone: true,
  imports: [],
  templateUrl: './userviewadmin.component.html',
  styleUrl: './userviewadmin.component.css'
})
export class UserviewadminComponent {

}




import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';

import { Component } from '@angular/core';
  
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
  
@Component({
  selector: 'app-adminviewadmin',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminviewadmin.component.html',
  styleUrl: './adminviewadmin.component.css'
})
export class AdminviewadminComponent {
  
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
