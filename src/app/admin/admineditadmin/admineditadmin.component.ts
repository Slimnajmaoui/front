


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-admineditadmin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admineditadmin.component.html',
  styleUrl: './admineditadmin.component.css'
})
export class AdmineditadminComponent {

  
  id!: number;
  admin!: Admin;
  form!: FormGroup;
      
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
        
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      motdepasse: new FormControl('', Validators.required)
    });
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.adminService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Admin updated successfully!');
         this.router.navigateByUrl('adminadmin/index');
    })
  }
  
}
