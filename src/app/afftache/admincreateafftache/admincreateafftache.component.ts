



import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AfftacheService } from '../afftache.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { AffprojetService } from '../../affprojet/affprojet.service';
import { TacheService } from '../../tache/tache.service';
  
@Component({
  selector: 'app-admincreateafftache',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admincreateafftache.component.html',
  styleUrl: './admincreateafftache.component.css'
})
export class AdmincreateafftacheComponent {
  
  form!: FormGroup;
  alluser:any ;    
  aff:any ;    
  t:any ; 
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public afftacheService: AfftacheService,public userservice:UserService,public affprojetService: AffprojetService,
    private router: Router,public tacheService: TacheService
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
    idtache: new FormControl('', [Validators.required]),
    etat: new FormControl('', [Validators.required]),
    iduser: new FormControl('', [Validators.required]),
    avancement: new FormControl('', [Validators.required]),
    datecreation: new FormControl('', [Validators.required]),
    datemodification: new FormControl('', [Validators.required])
    });
    this.userservice.getAll().subscribe((res)=>{
      this.alluser=res ; 
    })
    this.tacheService.getAll().subscribe((data: any)=>{
      this.t = data;
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
    let tache = {

      nom:this.form.value.nom,
      description:this.form.value.description,
      etat:this.form.value.etat,
      datecreation:this.form.value.datecreation,
      datemodification:this.form.value.datemodification,
      datedebut:this.form.value.datedebut,
      datefin:this.form.value.datefin,
       }
       console.log(tache)
   this.afftacheService.create2(tache,this.form.value.idtache,this.form.value.iduser).subscribe((res:any) => {
         console.log('Afftache created successfully!');
         this.router.navigateByUrl('adminafftache/index');
    })
 
    }
  
}
