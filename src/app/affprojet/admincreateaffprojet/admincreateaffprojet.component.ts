





import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AffprojetService } from '../affprojet.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { ProjetService } from '../../projet/projet.service';
  
@Component({
  selector: 'app-admincreateaffprojet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admincreateaffprojet.component.html',
  styleUrl: './admincreateaffprojet.component.css'
})
export class AdmincreateaffprojetComponent {
  
  form!: FormGroup;
  alluser:any ;    
pro:any ;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public affprojetService: AffprojetService,public userservice:UserService,
    private router: Router,public projetService: ProjetService
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
    etat: new FormControl('', [Validators.required]),
    iduser: new FormControl('', [Validators.required]),
    datecreation: new FormControl('', [Validators.required]),
    datemodification: new FormControl('', [Validators.required]),
    idprojet: new FormControl('', [Validators.required]),
    });
    this.userservice.getAll().subscribe((res)=>{
      this.alluser=res ; 
    })
    this.projetService.getAll().subscribe((data: any)=>{
      this.pro = data;
    })  
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
    let affe ={
  
      nom:this.form.value.nom,
      description:this.form.value.description,
      etat:this.form.value.etat,
      datecreation:this.form.value.datecreation,
      datemodification:this.form.value.datemodification
       }
        this.affprojetService.create2(affe,this.form.value.iduser,this.form.value.idprojet).subscribe((res:any) => {
         console.log('Affprojet created successfully!');
         this.router.navigateByUrl('adminaffprojet/index');
    })
  }
  
}
