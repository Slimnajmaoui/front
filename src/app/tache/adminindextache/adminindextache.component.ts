

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TacheService } from '../tache.service';
import { Tache } from '../tache';
@Component({
  selector: 'app-adminindextache',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminindextache.component.html',
  styleUrl: './adminindextache.component.css'
})
export class AdminindextacheComponent {

  taches: Tache[] = [];
    t:any ;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public tacheService: TacheService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.tacheService.getAll().subscribe((data: any)=>{
      this.t = data;
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteTache(id:number){
    this.tacheService.delete(id).subscribe(res => {
         this.taches = this.taches.filter(item => item._id !== id);
         console.log('Tache deleted successfully!');
    })
  }
}
