



import { Component } from '@angular/core';
  
import { AvprojetService } from '../avprojet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avprojet } from '../avprojet';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
  

@Component({
  selector: 'app-userviewavprojet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './userviewavprojet.component.html',
  styleUrl: './userviewavprojet.component.css'
})
export class UserviewavprojetComponent {

  
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
