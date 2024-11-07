


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { CongeService } from '../conge.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Conge } from '../conge';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  

import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';

@Component({
  selector: 'app-usereditconge',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './usereditconge.component.html',
  styleUrl: './usereditconge.component.css'
})
export class UsereditcongeComponent {

  
  id!: number;
  conge!: Conge;
  form!: FormGroup;
      
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
    this.id = this.route.snapshot.params['congeId'];
    this.congeService.find(this.id).subscribe((data: Conge)=>{
      this.conge = data;
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
    this.congeService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Conge updated successfully!');
         this.router.navigateByUrl('conge/index');
    })
  }
  
}
