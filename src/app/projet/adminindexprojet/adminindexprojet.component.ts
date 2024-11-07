

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProjetService } from '../projet.service';
import { Projet } from '../projet';

@Component({
  selector: 'app-adminindexprojet',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminindexprojet.component.html',
  styleUrl: './adminindexprojet.component.css'
})
export class AdminindexprojetComponent {


  projets: Projet[] = [];
  pro:any ;  
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public projetService: ProjetService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.projetService.getAll().subscribe((data: any)=>{
      this.pro = data;
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteProjet(id:number){
    this.projetService.delete(id).subscribe(res => {
         this.projets = this.projets.filter(item => item._id !== id);
         console.log('Projet deleted successfully!');
    })
  }
}
