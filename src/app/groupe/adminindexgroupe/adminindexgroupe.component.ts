

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { GroupeService } from '../groupe.service';
import { Groupe } from '../groupe';


@Component({
  selector: 'app-adminindexgroupe',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminindexgroupe.component.html',
  styleUrl: './adminindexgroupe.component.css'
})
export class AdminindexgroupeComponent {


  groupes: Groupe[] = [];
   gr:any ; 
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public groupeService: GroupeService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.groupeService.getAll().subscribe((data: any)=>{
      this.gr = data;
      console.log(this.gr);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteGroupe(id:number){
    this.groupeService.delete(id).subscribe(res => {
         this.groupes = this.groupes.filter(item => item._id !== id);
         console.log('Groupe deleted successfully!');
    })
  }
}
