



import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { TacheService } from '../tache.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  

import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
@Component({
  selector: 'app-usercreatetache',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './usercreatetache.component.html',
  styleUrl: './usercreatetache.component.css'
})
export class UsercreatetacheComponent {

  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public tacheService: TacheService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    datedebut: new FormControl('', [Validators.required]),
    datefin: new FormControl('', [Validators.required]),
    idprojet: new FormControl('', [Validators.required]),
    etat: new FormControl('', [Validators.required]),
    datecreation: new FormControl('', [Validators.required]),
    datemodification: new FormControl('', [Validators.required])
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
    this.tacheService.create(this.form.value).subscribe((res:any) => {
         console.log('Tache created successfully!');
         this.router.navigateByUrl('tache/index');
    })
  }
  
}
