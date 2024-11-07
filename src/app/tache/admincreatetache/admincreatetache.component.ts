




import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { TacheService } from '../tache.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjetService } from '../../projet/projet.service';
  
@Component({
  selector: 'app-admincreatetache',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admincreatetache.component.html',
  styleUrl: './admincreatetache.component.css'
})
export class AdmincreatetacheComponent {

  
  form!: FormGroup;
  pro:any ;     
 
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public tacheService: TacheService,public projetService: ProjetService,
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
    this.tacheService.create2(tache,this.form.value.idprojet).subscribe((res:any) => {
         console.log('Tache created successfully!');
         this.router.navigateByUrl('admintache/index');
    })
  }
  
}
