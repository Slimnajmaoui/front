



import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AfftacheService } from '../afftache.service';
import { Afftache } from '../afftache';


@Component({
  selector: 'app-adminindexafftache',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminindexafftache.component.html',
  styleUrl: './adminindexafftache.component.css'
})
export class AdminindexafftacheComponent {

  afftaches: Afftache[] = [];
  tach :any ;  
  profil:any ;
  a:any ;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public afftacheService: AfftacheService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.profil=localStorage.getItem("Role");
    this.afftacheService.getAll().subscribe((data: any)=>{
      this.tach = data;
    })
    this.afftacheService.affectationtachebyuser().subscribe((res)=>{
      this.a=res ; 
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAfftache(id:number){
    this.afftacheService.delete(id).subscribe(res => {
         this.afftaches = this.afftaches.filter(item => item._id !== id);
         window.alert('Afftache deleted successfully!');
         window.location.reload()
    })
  }
}
