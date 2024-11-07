


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { GroupeService } from '../groupe.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Groupe } from '../groupe';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-chefdeprojetviewgroupe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojetviewgroupe.component.html',
  styleUrl: './chefdeprojetviewgroupe.component.css'
})
export class ChefdeprojetviewgroupeComponent {
  
  id!: number;
  groupe!: Groupe;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public groupeService: GroupeService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['groupeId'];
          
    this.groupeService.find(this.id).subscribe((data: Groupe)=>{
      this.groupe = data;
    });
  }
  
}
