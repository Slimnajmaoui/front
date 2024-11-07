

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AvprojetService } from '../avprojet.service';
import { Avprojet } from '../avprojet';


@Component({
  selector: 'app-adminindexavprojet',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminindexavprojet.component.html',
  styleUrl: './adminindexavprojet.component.css'
})
export class AdminindexavprojetComponent {


  avprojets: Avprojet[] = [];
  avpr:any ;   
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public avprojetService: AvprojetService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.avprojetService.getAll().subscribe((data: any)=>{
      this.avpr = data;
      console.log(this.avpr);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAvprojet(id:number){
    this.avprojetService.delete(id).subscribe(res => {
         this.avprojets = this.avprojets.filter(item => item._id !== id);
         window.alert('Avprojet deleted successfully!');
         window.location.reload()
    })
  }
}
