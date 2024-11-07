




import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AffgroupeService } from '../affgroupe.service';
import { Affgroupe } from '../affgroupe';


@Component({
  selector: 'app-adminindexaffgroupe',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminindexaffgroupe.component.html',
  styleUrl: './adminindexaffgroupe.component.css'
})
export class AdminindexaffgroupeComponent {


  affgroupes: Affgroupe[] = [];
   aff:any ; 
   affuser:any ;
   profil:any ;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public affgroupeService: AffgroupeService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.profil=localStorage.getItem("Role")
    this.affgroupeService.getAll().subscribe((data: any)=>{
      this.aff = data;
    })  

    this.affgroupeService.getbyuser().subscribe((data: any)=>{
      this.affuser = data;
    })  

  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAffgroupe(id:number){
    this.affgroupeService.delete(id).subscribe(res => {
         this.affgroupes = this.affgroupes.filter(item => item._id !== id);
         window.alert("supprimer avec succées")
         window.location.reload()
         console.log('Affgroupe deleted successfully!');
    })
  }
}
