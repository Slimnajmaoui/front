

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { ProjetService } from '../projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../projet';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-admineditprojet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admineditprojet.component.html',
  styleUrl: './admineditprojet.component.css'
})
export class AdmineditprojetComponent {
  
  id!: number;
  projet!: Projet;
  form!: FormGroup;
  p:any ;    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public projetService: ProjetService,
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
    this.projetService.find(this.id).subscribe((data: any)=>{
      this.p = data;
    }); 
        
    this.form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    datedebut: new FormControl('', [Validators.required]),
    datefin: new FormControl('', [Validators.required]),
    etat: new FormControl('', [Validators.required]),
    datecreation: new FormControl('', [Validators.required]),
    datemodification:new FormControl('', [Validators.required])
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
    this.projetService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Projet updated successfully!');
         this.router.navigateByUrl('adminprojet/index');
    })
  }
  
}
