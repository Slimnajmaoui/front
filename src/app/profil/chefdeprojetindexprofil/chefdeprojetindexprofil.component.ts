


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProfilService } from '../profil.service';
import { Profil } from '../profil';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chefdeprojetindexprofil',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojetindexprofil.component.html',
  styleUrl: './chefdeprojetindexprofil.component.css'
})
export class ChefdeprojetindexprofilComponent {



  profils: Profil[] = [];
    
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
    console.log(this.router.url);
    console.log( window.location.href);
    this.profilService.getAll().subscribe((data: Profil[])=>{
      this.profils = data;
      console.log(this.profils);
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
