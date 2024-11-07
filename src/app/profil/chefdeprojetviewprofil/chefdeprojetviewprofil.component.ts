


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { ProfilService } from '../profil.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Profil } from '../profil';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-chefdeprojetviewprofil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojetviewprofil.component.html',
  styleUrl: './chefdeprojetviewprofil.component.css'
})
export class ChefdeprojetviewprofilComponent {
  
  id!: number;
  profil!: Profil;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public profilService: ProfilService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['profilId'];
          
    this.profilService.find(this.id).subscribe((data: Profil)=>{
      this.profil = data;
    });
  }
  
}
