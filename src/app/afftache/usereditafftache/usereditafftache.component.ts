

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  


import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { Avtache } from '../../avtache/avtache';
import { AvtacheService } from '../../avtache/avtache.service';

@Component({
  selector: 'app-usereditafftache',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './usereditafftache.component.html',
  styleUrl: './usereditafftache.component.css'
})
export class UsereditafftacheComponent {


  
  id!: number;
  avtache!: Avtache;
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public avtacheService: AvtacheService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['avtacheId'];
    this.avtacheService.find(this.id).subscribe((data: Avtache)=>{
      this.avtache = data;
    }); 
        
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
    this.avtacheService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Avtache updated successfully!');
         this.router.navigateByUrl('avtache/index');
    })
  }
  
}
