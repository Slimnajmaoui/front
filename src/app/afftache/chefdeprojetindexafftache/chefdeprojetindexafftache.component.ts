

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AfftacheService } from '../afftache.service';
import { Afftache } from '../afftache';
import { ReactiveFormsModule } from '@angular/forms';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';


@Component({
  selector: 'app-chefdeprojetindexafftache',
  standalone: true,
  imports: [RouterModule,CommonModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojetindexafftache.component.html',
  styleUrl: './chefdeprojetindexafftache.component.css'
})
export class ChefdeprojetindexafftacheComponent {




  afftaches: Afftache[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public afftacheService: AfftacheService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.afftacheService.getAll().subscribe((data: Afftache[])=>{
      this.afftaches = data;
      console.log(this.afftaches);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAfftache(id:number){
    this.afftacheService.delete(id).subscribe(res => {
         this.afftaches = this.afftaches.filter(item => item._id !== id);
         console.log('Afftache deleted successfully!');
    })
  }
}
