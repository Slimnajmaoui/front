


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { AvtacheService } from '../avtache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avtache } from '../avtache';
  

@Component({
  selector: 'app-adminviewavtache',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminviewavtache.component.html',
  styleUrl: './adminviewavtache.component.css'
})
export class AdminviewavtacheComponent {

  
  id!: number;
  avtache!: Avtache;
  av:any ;    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public avtacheService: AvtacheService,
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
          
    this.avtacheService.find(this.id).subscribe((data: any)=>{
      this.av = data;
    });
  }
  
}
