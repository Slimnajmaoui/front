
import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CongeService } from '../conge.service';
import { Conge } from '../conge';



import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chefdeprojetindexconge',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojetindexconge.component.html',
  styleUrl: './chefdeprojetindexconge.component.css'
})
export class ChefdeprojetindexcongeComponent {
  conges: Conge[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public congeService: CongeService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.congeService.getAll().subscribe((data: Conge[])=>{
      this.conges = data;
      console.log(this.conges);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteConge(id:number){
    this.congeService.delete(id).subscribe(res => {
         this.conges = this.conges.filter(item => item._id !== id);
         console.log('Conge deleted successfully!');
    })
  }
}
