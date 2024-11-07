

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProfilService } from '../profil.service';
import { Profil } from '../profil';


@Component({
  selector: 'app-adminindexprofil',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminindexprofil.component.html',
  styleUrl: './adminindexprofil.component.css'
})
export class AdminindexprofilComponent {


  profils: Profil[] = [];
   pr:any ; 
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public profilService: ProfilService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.profilService.finduser().subscribe((data: any)=>{
      this.pr = data;
      console.log(this.pr);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteProfil(id:number){
    this.profilService.delete(id).subscribe(res => {
         this.profils = this.profils.filter(item => item._id !== id);
         console.log('Profil deleted successfully!');
    })
  }
}
