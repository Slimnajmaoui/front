

import { Component } from '@angular/core';
  
import { AfftacheService } from '../afftache.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Afftache } from '../afftache';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
  
@Component({
  selector: 'app-chefdeprojetviewafftache',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojetviewafftache.component.html',
  styleUrl: './chefdeprojetviewafftache.component.css'
})
export class ChefdeprojetviewafftacheComponent {


  
  id!: number;
  afftache!: Afftache;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public afftacheService: AfftacheService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['afftacheId'];
          
    this.afftacheService.find(this.id).subscribe((data: Afftache)=>{
      this.afftache = data;
    });
  }
  
}
