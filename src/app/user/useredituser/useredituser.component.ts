


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
  selector: 'app-useredituser',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './useredituser.component.html',
  styleUrl: './useredituser.component.css'
})
export class UseredituserComponent {
  
  id!: number;
  user!: User;
  form!: FormGroup;
      
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
    this.userService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('User updated successfully!');
         this.router.navigateByUrl('user/index');
    })
  }
  
}
