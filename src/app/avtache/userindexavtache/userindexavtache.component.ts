



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AvtacheService } from '../avtache.service';
import { Avtache } from '../avtache';
import { ReactiveFormsModule } from '@angular/forms';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';

@Component({
  selector: 'app-userindexavtache',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './userindexavtache.component.html',
  styleUrl: './userindexavtache.component.css'
})
export class UserindexavtacheComponent {



  avtaches: Avtache[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public avtacheService: AvtacheService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.avtacheService.getAll().subscribe((data: Avtache[])=>{
      this.avtaches = data;
      console.log(this.avtaches);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAvtache(id:number){
    this.avtacheService.delete(id).subscribe(res => {
         this.avtaches = this.avtaches.filter(item => item._id !== id);
         console.log('Avtache deleted successfully!');
    })
  }
}
