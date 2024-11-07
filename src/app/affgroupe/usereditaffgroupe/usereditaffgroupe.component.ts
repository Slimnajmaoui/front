

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AffgroupeService } from '../affgroupe.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Affgroupe } from '../affgroupe';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  


import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';

@Component({
  selector: 'app-usereditaffgroupe',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './usereditaffgroupe.component.html',
  styleUrl: './usereditaffgroupe.component.css'
})
export class UsereditaffgroupeComponent {
  
  id!: number;
  affgroupe!: Affgroupe;
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public affgroupeService: AffgroupeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['affgroupeId'];
    this.affgroupeService.find(this.id).subscribe((data: Affgroupe)=>{
      this.affgroupe = data;
    }); 
        
    this.form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    etat: new FormControl('', [Validators.required]),
    iduser: new FormControl('', [Validators.required]),
    datecreation: new FormControl('', [Validators.required]),
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
    console.log(this.form.value);
    this.affgroupeService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Affgroupe updated successfully!');
         this.router.navigateByUrl('affgroupe/index');
    })
  }
  
}
