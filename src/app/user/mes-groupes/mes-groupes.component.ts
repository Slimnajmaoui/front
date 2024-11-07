import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Affgroupe } from '../../affgroupe/affgroupe';
import { AffgroupeService } from '../../affgroupe/affgroupe.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-mes-groupes',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './mes-groupes.component.html',
  styleUrl: './mes-groupes.component.css'
})
export class MesGroupesComponent {

  affgroupes: Affgroupe[] = [];
   aff:any ; 
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public affgroupeService: AffgroupeService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.affgroupeService.getAll().subscribe((data: any)=>{
      this.aff = data;
      console.log(this.affgroupes);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAffgroupe(id:number){
    this.affgroupeService.delete(id).subscribe(res => {
         this.affgroupes = this.affgroupes.filter(item => item._id !== id);
         console.log('Affgroupe deleted successfully!');
    })
  }

}
