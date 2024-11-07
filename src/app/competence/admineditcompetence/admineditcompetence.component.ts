

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { CompetenceService } from '../competence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Competence } from '../competence';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-admineditcompetence',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './admineditcompetence.component.html',
  styleUrl: './admineditcompetence.component.css'
})
export class AdmineditcompetenceComponent {

  
  id!: number;
  competence!: Competence;
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public competenceService: CompetenceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['competenceId'];
    this.competenceService.find(this.id).subscribe((data: Competence)=>{
      this.competence = data;
    }); 
        
    this.form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
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
    this.competenceService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Competence updated successfully!');
         this.router.navigateByUrl('admincompetence/index');
    })
  }
  
}
