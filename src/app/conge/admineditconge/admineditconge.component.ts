

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { CongeService } from '../conge.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from '../conge';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-admineditconge',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admineditconge.component.html',
  styleUrl: './admineditconge.component.css'
})
export class AdmineditcongeComponent {

  
  id!: number;
  conge!: Conge;
  form!: FormGroup;
  profil:any ;    
  c:any ;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public congeService: CongeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.profil=localStorage.getItem("Role")

    this.id = this.route.snapshot.params['id'];
    this.congeService.find(this.id).subscribe((data: any)=>{
      this.c = data;

    }); 
        
    this.form = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    etat: new FormControl('', [Validators.required]),
    datedebut: new FormControl('', [Validators.required]),
    datefin: new FormControl('', [Validators.required]),
    datecreation: new FormControl('', [Validators.required]),
    datemodification:  new FormControl('', [Validators.required])
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
    this.congeService.update2(this.id, this.form.value).subscribe((res:any) => {
         console.log('Conge updated successfully!');
         this.router.navigateByUrl('adminconge/index');
    })
  }
  
}
