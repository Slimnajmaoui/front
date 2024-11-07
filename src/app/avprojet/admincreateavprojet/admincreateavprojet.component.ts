

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AvprojetService } from '../avprojet.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AfftacheService } from '../../afftache/afftache.service';
import { AffprojetService } from '../../affprojet/affprojet.service';
  
@Component({
  selector: 'app-admincreateavprojet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admincreateavprojet.component.html',
  styleUrl: './admincreateavprojet.component.css'
})
export class AdmincreateavprojetComponent {
  
  form!: FormGroup;
  aff:any ;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public avprojetService: AvprojetService, public affprojetService: AffprojetService,
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
    etat: new FormControl('', [Validators.required]),
    avancement: new FormControl('', [Validators.required]),
    datecreation: new FormControl('', [Validators.required]),
    datemodification: new FormControl('', [Validators.required]),
    idprojet: new FormControl('', [Validators.required]),

    });
    this.affprojetService.getAll().subscribe((data: any)=>{
      this.aff = data;
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
    let avance = {

      nom:this.form.value.nom,
      description:this.form.value.description,
      etat:this.form.value.etat,
      datecreation:this.form.value.datecreation,
      datemodification:this.form.value.datemodification,
      datedebut:this.form.value.datedebut,
      datefin:this.form.value.datefin,
      avancement:this.form.value.avancement
       }
    this.avprojetService.create2(avance,this.form.value.idprojet).subscribe((res:any) => {
         console.log('Avprojet created successfully!');
         this.router.navigateByUrl('adminavprojet/index');
    })
  }
  
}
