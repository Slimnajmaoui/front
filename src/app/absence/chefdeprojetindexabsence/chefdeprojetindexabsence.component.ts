

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AbsenceService } from '../absence.service';
import { Absence } from '../absence';



import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-chefdeprojetindexabsence',
  standalone: true,
  imports: [RouterModule,CommonModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './chefdeprojetindexabsence.component.html',
  styleUrl: './chefdeprojetindexabsence.component.css'
})
export class ChefdeprojetindexabsenceComponent {


  absences: Absence[] = [];
    abs:any ;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public absenceService: AbsenceService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.absenceService.getAll().subscribe((data: Absence[])=>{
      this.abs = data;
      console.log(this.abs);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAbsence(id:number){
    this.absenceService.delete(id).subscribe(res => {
         this.absences = this.absences.filter(item => item._id !== id);
         console.log('Absence deleted successfully!');
    })
  }
}
