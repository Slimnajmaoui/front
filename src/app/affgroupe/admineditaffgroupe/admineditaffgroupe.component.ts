


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AffgroupeService } from '../affgroupe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Affgroupe } from '../affgroupe';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { GroupeService } from '../../groupe/groupe.service';
import { UserService } from '../../user/user.service';
  
@Component({
  selector: 'app-admineditaffgroupe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admineditaffgroupe.component.html',
  styleUrl: './admineditaffgroupe.component.css'
})
export class AdmineditaffgroupeComponent {
  
  id!: number;
  affgroupe!: Affgroupe;
  form!: FormGroup;
  aff:any ;
  alluser:any ;   
  gr:any ; 
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public affgroupeService: AffgroupeService,
    private route: ActivatedRoute,public userservice:UserService,
    private router: Router,public groupeService: GroupeService
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.affgroupeService.find(this.id).subscribe((data: any)=>{
      this.aff = data;
      
    }); 
    this.userservice.Userdeveloppeur().subscribe((res)=>{
      this.alluser=res ; 
  
    })
    this.groupeService.getAll().subscribe((data: any)=>{
      this.gr = data;
    })  

        
    this.form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    etat: new FormControl('', [Validators.required]),
    iduser: new FormControl('', [Validators.required]),
    datecreation: new FormControl('', [Validators.required]),
    idgroupe: new FormControl('', [Validators.required]),

    datemodification: new FormControl('', [Validators.required])
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
        this.affgroupeService.update2(this.id, this.form.value.idgroupe,this.form.value.iduser,affe).subscribe((res:any) => {
         console.log('Affgroupe updated successfully!');
         this.router.navigateByUrl('adminaffgroupe/index');
    })
  }
  
}
