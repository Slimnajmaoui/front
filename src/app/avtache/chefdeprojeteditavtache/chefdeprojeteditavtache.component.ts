

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AvtacheService } from '../avtache.service';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
  
@Component({
  selector: 'app-chefdeprojeteditavtache',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojeteditavtache.component.html',
  styleUrl: './chefdeprojeteditavtache.component.css'
})
export class ChefdeprojeteditavtacheComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public avtacheService: AvtacheService,
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
    avancement: new FormControl('', [Validators.required]),
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
    this.avtacheService.create(this.form.value).subscribe((res:any) => {
         console.log('Avtache created successfully!');
         this.router.navigateByUrl('avtache/index');
    })
  }
  
}
