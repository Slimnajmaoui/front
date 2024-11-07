

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AvtacheService } from '../avtache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avtache } from '../avtache';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AffprojetService } from '../../affprojet/affprojet.service';
  

@Component({
  selector: 'app-admineditavtache',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admineditavtache.component.html',
  styleUrl: './admineditavtache.component.css'
})
export class AdmineditavtacheComponent {


  
  id!: number;
  avtache!: Avtache;
  form!: FormGroup;
  aff:any ;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public avtacheService: AvtacheService,
    private route: ActivatedRoute,
    private router: Router,public affprojetService: AffprojetService
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.avtacheService.find(this.id).subscribe((data: Avtache)=>{
      this.avtache = data;
      console.log(this.avtache)
    }); 
        
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    datedebut: new FormControl('', [Validators.required]),
    datefin: new FormControl('', [Validators.required]),
    idprojet: new FormControl('', [Validators.required]),
    etat: new FormControl('', [Validators.required]),
    avancement: new FormControl('', [Validators.required]),
    datecreation: new FormControl('', [Validators.required]),
    datemodification: new FormControl('', [Validators.required])});
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
           this.avtacheService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Avtache updated successfully!');
         this.router.navigateByUrl('adminavtache/index');
    })
  }
  
}
