


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { ChefdeprojetService } from '../chefdeprojet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chefdeprojet } from '../chefdeprojet';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-admineditchefdeprojet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admineditchefdeprojet.component.html',
  styleUrl: './admineditchefdeprojet.component.css'
})
export class AdmineditchefdeprojetComponent {



  
  id!: number;
  chefdeprojet!: Chefdeprojet;
  form!: FormGroup;
  chef:any ;    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public chefdeprojetService: ChefdeprojetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.chefdeprojetService.find(this.id).subscribe((data: any)=>{
      this.chef = data;
    }); 
        
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
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
    this.chefdeprojetService.update2(this.id, this.form.value.email).subscribe((res:any) => {
         console.log('Chefdeprojet updated successfully!');
         this.router.navigateByUrl('adminchefdeprojet/index');
    })
  }
  
}
