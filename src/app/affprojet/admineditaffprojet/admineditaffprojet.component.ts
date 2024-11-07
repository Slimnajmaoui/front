


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AffprojetService } from '../affprojet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Affprojet } from '../affprojet';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user/user.service';
  
@Component({
  selector: 'app-admineditaffprojet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admineditaffprojet.component.html',
  styleUrl: './admineditaffprojet.component.css'
})
export class AdmineditaffprojetComponent {
  
  id!: number;
  affprojet!: Affprojet;
  form!: FormGroup;
  aff:any ;  
  alluser :any ;
  pro:any ;
  nom:any;
  description:any ;
  etat:any;
  user:any ;
  projet:any ;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public affprojetService: AffprojetService,
    private route: ActivatedRoute,public userservice:UserService,
    private router: Router,public projetService: AffprojetService
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.affprojetService.find(this.id).subscribe((data: any)=>{
      this.aff = data;
      console.log(this.aff)
    }); 
    this.userservice.Userbyprofil().subscribe((res)=>{
      this.alluser=res ; 
    })
    this.projetService.getAll().subscribe((data: any)=>{
      this.pro = data;
    })      
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      etat: new FormControl('', [Validators.required]),
      iduser: new FormControl('', [Validators.required]),
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
