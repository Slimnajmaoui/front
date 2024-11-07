
import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { TacheService } from '../tache.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Tache } from '../tache';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';

@Component({
  selector: 'app-userviewtache',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './userviewtache.component.html',
  styleUrl: './userviewtache.component.css'
})
export class UserviewtacheComponent {
  id!: number;
  tache!: Tache;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public tacheService: TacheService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['tacheId'];
          
    this.tacheService.find(this.id).subscribe((data: Tache)=>{
      this.tache = data;
    });
  }
  
}
