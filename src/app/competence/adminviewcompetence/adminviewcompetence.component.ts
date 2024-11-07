

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { CompetenceService } from '../competence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Competence } from '../competence';
  
@Component({
  selector: 'app-adminviewcompetence',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminviewcompetence.component.html',
  styleUrl: './adminviewcompetence.component.css'
})
export class AdminviewcompetenceComponent {
  
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
