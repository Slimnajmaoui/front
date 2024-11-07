


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AvprojetService } from '../avprojet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avprojet } from '../avprojet';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AffprojetService } from '../../affprojet/affprojet.service';
  

@Component({
  selector: 'app-admineditavprojet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admineditavprojet.component.html',
  styleUrl: './admineditavprojet.component.css'
})
export class AdmineditavprojetComponent {
  
  id!: number;
  avprojet!: Avprojet;
  form!: FormGroup;
  aff:any ;    
  av:any ;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public avprojetService: AvprojetService,
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
    this.avprojetService.find(this.id).subscribe((data: any)=>{
      this.av = data;
      console.log(this.av)
    }); 
    this.affprojetService.getAll().subscribe((data: any)=>{
      this.aff = data;
      console.log(this.aff)
    })  
        
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
    this.avprojetService.update2(this.id, avance,this.form.value.idprojet).subscribe((res:any) => {
         console.log('Avprojet updated successfully!');
         this.router.navigateByUrl('adminavprojet/index');
    })
  }
  
}
