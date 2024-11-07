

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { CompetenceService } from '../competence.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Competence } from '../competence';
  

import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-userviewcompetence',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './userviewcompetence.component.html',
  styleUrl: './userviewcompetence.component.css'
})
export class UserviewcompetenceComponent {
  
  id!: number;
  competence!: Competence;
      
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
  }
  
}
