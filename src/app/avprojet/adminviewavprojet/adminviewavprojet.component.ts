


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { AvprojetService } from '../avprojet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avprojet } from '../avprojet';
  

@Component({
  selector: 'app-adminviewavprojet',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminviewavprojet.component.html',
  styleUrl: './adminviewavprojet.component.css'
})
export class AdminviewavprojetComponent {

  
  id!: number;
  avprojet!: Avprojet;
     av:any ; 
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public avprojetService: AvprojetService,
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
          
    this.avprojetService.find(this.id).subscribe((data: any)=>{
      this.av = data;
    });
  }
  
}
