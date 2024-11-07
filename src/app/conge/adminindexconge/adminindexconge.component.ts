

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CongeService } from '../conge.service';
import { Conge } from '../conge';


@Component({
  selector: 'app-adminindexconge',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminindexconge.component.html',
  styleUrl: './adminindexconge.component.css'
})
export class AdminindexcongeComponent {

  conges: Conge[] = [];
  profil:any ;
  c:any ;  
  conuser:any ;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public congeService: CongeService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.profil=localStorage.getItem("Role")
    this.congeService.getAll().subscribe((data: any)=>{
      this.c = data;
    })  
    this.congeService.getcongebyuser().subscribe((res)=>{
  this.conuser=res ;
    })
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteConge(id:number){
    this.congeService.delete(id).subscribe(res => {
         this.conges = this.conges.filter(item => item._id !== id);
         console.log('Conge deleted successfully!');
    })
  }
}
