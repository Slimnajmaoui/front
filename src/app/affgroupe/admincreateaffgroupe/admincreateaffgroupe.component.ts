




import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AffgroupeService } from '../affgroupe.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { GroupeService } from '../../groupe/groupe.service';
  
@Component({
  selector: 'app-admincreateaffgroupe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admincreateaffgroupe.component.html',
  styleUrl: './admincreateaffgroupe.component.css'
})
export class AdmincreateaffgroupeComponent {
  
  form!: FormGroup;
  alluser:any ;    
  gr:any ;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public affgroupeService: AffgroupeService,public userservice:UserService,
    private router: Router, public groupeService: GroupeService
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
    idgroupe: new FormControl('', [Validators.required]),

    datemodification: new FormControl('', [Validators.required])    });
    this.groupeService.getAll().subscribe((data: any)=>{
      this.gr = data;
    })  
  this.userservice.Userdeveloppeur().subscribe((res)=>{
    this.alluser=res ; 

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
    let affe ={
  
      nom:this.form.value.nom,
      description:this.form.value.description,
      etat:this.form.value.etat,
      datecreation:this.form.value.datecreation,
      datemodification:this.form.value.datemodification
       }
      console.log(affe)
   this.affgroupeService.create2(affe,this.form.value.iduser,this.form.value.idgroupe).subscribe((res:any) => {
         console.log('Affgroupe created successfully!');
         this.router.navigateByUrl('adminaffgroupe/index');
    })
  }
  
}
