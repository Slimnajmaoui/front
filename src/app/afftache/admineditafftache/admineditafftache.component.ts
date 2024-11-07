


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AfftacheService } from '../afftache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Afftache } from '../afftache';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TacheService } from '../../tache/tache.service';
import { UserService } from '../../user/user.service';
import { AffprojetService } from '../../affprojet/affprojet.service';
  
@Component({
  selector: 'app-admineditafftache',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admineditafftache.component.html',
  styleUrl: './admineditafftache.component.css'
})
export class AdmineditafftacheComponent {


  
  id!: number;
  afftache!: Afftache;
  form!: FormGroup;
  alluser:any ;
  t:any ;    
  aff:any ; 
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public afftacheService: AfftacheService,
    private route: ActivatedRoute,
    private router: Router,public userservice:UserService,public affprojetService: AffprojetService,
   public tacheService: TacheService
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.afftacheService.find(this.id).subscribe((data: any)=>{
      this.aff = data;
    }); 
        
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
    console.log(this.form.value);
    this.afftacheService.update2(this.id,tache,this.form.value.idtache,this.form.value.iduser).subscribe((res:any) => {
         console.log('Afftache updated successfully!');
         this.router.navigateByUrl('adminafftache/index');
    })
  }
  
}
