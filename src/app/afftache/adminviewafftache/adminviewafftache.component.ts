


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { AfftacheService } from '../afftache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Afftache } from '../afftache';
  
@Component({
  selector: 'app-adminviewafftache',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminviewafftache.component.html',
  styleUrl: './adminviewafftache.component.css'
})
export class AdminviewafftacheComponent {


  
  id!: number;
  afftache!: Afftache;

  aff!: any;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public afftacheService: AfftacheService,
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
          
    this.afftacheService.find(this.id).subscribe((data: any)=>{
      this.aff = data;
    });
  }
  
}
