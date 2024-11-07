


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { ProfilService } from '../profil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from '../profil';
  
@Component({
  selector: 'app-adminviewprofil',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminviewprofil.component.html',
  styleUrl: './adminviewprofil.component.css'
})
export class AdminviewprofilComponent {
  
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
