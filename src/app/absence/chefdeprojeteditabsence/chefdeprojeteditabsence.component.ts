

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AbsenceService } from '../absence.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Absence } from '../absence';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserfooterComponent } from "../../user/userfooter/userfooter.component";
import { UserheaderComponent } from "../../user/userheader/userheader.component";
import { UsermenuComponent } from "../../user/usermenu/usermenu.component";
  
@Component({
  selector: 'app-chefdeprojeteditabsence',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojeteditabsence.component.html',
  styleUrl: './chefdeprojeteditabsence.component.css'
})
export class ChefdeprojeteditabsenceComponent {
  
  id!: number;
  absence!: Absence;
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public absenceService: AbsenceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['absenceId'];
    this.absenceService.find(this.id).subscribe((data: Absence)=>{
      this.absence = data;
    }); 
        
    this.form = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    etat: new FormControl('', [Validators.required]),
    datedebut: new FormControl('', [Validators.required]),
    datefin: new FormControl('', [Validators.required]),
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
    this.absenceService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Absence updated successfully!');
         this.router.navigateByUrl('absence/index');
    })
  }
  
}
