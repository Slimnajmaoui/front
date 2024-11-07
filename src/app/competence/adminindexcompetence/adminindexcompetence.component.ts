



import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CompetenceService } from '../competence.service';
import { Competence } from '../competence';


@Component({
  selector: 'app-adminindexcompetence',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminindexcompetence.component.html',
  styleUrl: './adminindexcompetence.component.css'
})
export class AdminindexcompetenceComponent {


  competences: Competence[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public competenceService: CompetenceService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.competenceService.getAll().subscribe((data: Competence[])=>{
      this.competences = data;
      console.log(this.competences);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteCompetence(id:number){
    this.competenceService.delete(id).subscribe(res => {
         this.competences = this.competences.filter(item => item._id !== id);
         console.log('Competence deleted successfully!');
    })
  }
}
