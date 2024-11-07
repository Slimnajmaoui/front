

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AvtacheService } from '../avtache.service';
import { Avtache } from '../avtache';

@Component({
  selector: 'app-adminindexavtache',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminindexavtache.component.html',
  styleUrl: './adminindexavtache.component.css'
})
export class AdminindexavtacheComponent {



  avtaches: Avtache[] = [];
    av:any;
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
    this.avtacheService.getAll().subscribe((data: any)=>{
      this.av = data;
      console.log(this.av);
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
         window.alert('Avtache deleted successfully!');
         window.location.reload()
    })
  }
}
