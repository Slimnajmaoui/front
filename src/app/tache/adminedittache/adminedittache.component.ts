


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { TacheService } from '../tache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from '../tache';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjetService } from '../../projet/projet.service';
  
@Component({
  selector: 'app-adminedittache',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminedittache.component.html',
  styleUrl: './adminedittache.component.css'
})
export class AdminedittacheComponent {

  
  id!: number;
  tache!: Tache;
  form!: FormGroup;
  t:any ;    
  pro:any ;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public tacheService: TacheService,
    private route: ActivatedRoute,
    private router: Router,public projetService: ProjetService,
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tacheService.find(this.id).subscribe((data: any)=>{
      this.t = data;
      console.log(this.t)
    }); 
        
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
    let tache ={
      nom:this.form.value.nom,
      description:this.form.value.description,
      datedebut:this.form.value.datedebut,
      datefin:this.form.value.datefin,
      datecreation:this.form.value.datecreation,
      etat:this.form.value.etat,
      datemodification:this.form.value.datemodification
    }
    console.log(this.form.value);
    this.tacheService.update2(this.id,tache,this.form.value.idprojet).subscribe((res:any) => {
         console.log('Tache updated successfully!');
         this.router.navigateByUrl('admintache/index');
    })
  }
  
}
