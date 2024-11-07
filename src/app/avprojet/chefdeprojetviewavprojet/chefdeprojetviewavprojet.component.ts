



import { Component } from '@angular/core';
  
import { AvprojetService } from '../avprojet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avprojet } from '../avprojet';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
  import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-chefdeprojetviewavprojet',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojetviewavprojet.component.html',
  styleUrl: './chefdeprojetviewavprojet.component.css'
})
export class ChefdeprojetviewavprojetComponent {

  
  id!: number;
  avprojet!: Avprojet;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public avprojetService: AvprojetService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['avprojetId'];
          
    this.avprojetService.find(this.id).subscribe((data: Avprojet)=>{
      this.avprojet = data;
    });
  }
  
}
