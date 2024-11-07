



import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AffprojetService } from '../affprojet.service';
import { Affprojet } from '../affprojet';

@Component({
  selector: 'app-adminindexaffprojet',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminindexaffprojet.component.html',
  styleUrl: './adminindexaffprojet.component.css'
})
export class AdminindexaffprojetComponent {

profil:any ;


  affprojets: Affprojet[] = [];
aff:any ;    

affecteruser:any ;    
/*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public affprojetService: AffprojetService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.profil=localStorage.getItem("Role")
    this.affprojetService.getAll().subscribe((data: any)=>{
      this.aff = data;
    })  
this.affprojetService.getaffectationprojetbyuser().subscribe((res)=>{
this.affecteruser=res ; 
})
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAffprojet(id:number){
    this.affprojetService.delete(id).subscribe(res => {
         this.affprojets = this.affprojets.filter(item => item._id !== id);
         console.log('Affprojet deleted successfully!');
         window.alert("supprimer avec succées")
         window.location.reload()
    })
  }
}
