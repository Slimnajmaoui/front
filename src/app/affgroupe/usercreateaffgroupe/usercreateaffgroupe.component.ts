

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AffgroupeService } from '../affgroupe.service';
import { Router } from '@angular/router';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
  
import { ReactiveFormsModule } from '@angular/forms';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
@Component({
  selector: 'app-usercreateaffgroupe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './usercreateaffgroupe.component.html',
  styleUrl: './usercreateaffgroupe.component.css'
})
export class UsercreateaffgroupeComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public affgroupeService: AffgroupeService,
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
    etat: new FormControl('', [Validators.required]),
    iduser: new FormControl('', [Validators.required]),
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
 let affe ={
  
nom:this.form.value.nom,
description:this.form.value.description,
etat:this.form.value.etat,
datecreation:this.form.value.datecreation,
datemodification:this.form.value.datemodification
 }
console.log(affe)
    this.affgroupeService.create(affe,this.form.value.iduser).subscribe((res:any) => {
         console.log('Affgroupe created successfully!');
         this.router.navigateByUrl('affgroupe/index');
    })
  }
  
}
