

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';

import { Component } from '@angular/core';
  
import { ProjetService } from '../projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../projet';
  
@Component({
  selector: 'app-adminviewprojet',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminviewprojet.component.html',
  styleUrl: './adminviewprojet.component.css'
})
export class AdminviewprojetComponent {
  
  id!: number;
  projet!: Projet;
  pro:any ;    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public projetService: ProjetService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
          
    this.projetService.find(this.id).subscribe((data: any)=>{
      this.pro = data;
    });
  }
  
}
