



import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { AbsenceService } from '../absence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Absence } from '../absence';
  

@Component({
  selector: 'app-adminviewabsence',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminviewabsence.component.html',
  styleUrl: './adminviewabsence.component.css'
})
export class AdminviewabsenceComponent {


  
  id!: number;
  absence!: any;
  abs:any ;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public absenceService: AbsenceService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
          
    this.absenceService.find(this.id).subscribe((data: any)=>{
      this.abs = data;
    });
  }
  
}
