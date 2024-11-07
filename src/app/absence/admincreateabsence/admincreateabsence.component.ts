



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AbsenceService } from '../absence.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
  
@Component({
  selector: 'app-admincreateabsence',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admincreateabsence.component.html',
  styleUrl: './admincreateabsence.component.css'
})
export class AdmincreateabsenceComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public absenceService: AbsenceService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    etat: new FormControl('', [Validators.required]),
    datedebut: new FormControl('', [Validators.required]),
    datefin: new FormControl('', [Validators.required]),
    datecreation: new FormControl('', [Validators.required]),
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
    this.absenceService.create(this.form.value).subscribe((res:any) => {
         console.log('Absence created successfully!');
         this.router.navigateByUrl('adminabsence/index');
    })
  }
  
}
