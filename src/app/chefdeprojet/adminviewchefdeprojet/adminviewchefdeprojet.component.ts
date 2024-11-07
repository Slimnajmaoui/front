

import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { ChefdeprojetService } from '../chefdeprojet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chefdeprojet } from '../chefdeprojet';
  
@Component({
  selector: 'app-adminviewchefdeprojet',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminviewchefdeprojet.component.html',
  styleUrl: './adminviewchefdeprojet.component.css'
})
export class AdminviewchefdeprojetComponent {


  
  id!: number;
  chefdeprojet!: Chefdeprojet;
     chef:any ; 
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public chefdeprojetService: ChefdeprojetService,
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
          
    this.chefdeprojetService.find(this.id).subscribe((data: any)=>{
      this.chef = data;
    });
  }
  
}
