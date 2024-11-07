


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { AffgroupeService } from '../affgroupe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Affgroupe } from '../affgroupe';
  
@Component({
  selector: 'app-adminviewaffgroupe',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminviewaffgroupe.component.html',
  styleUrl: './adminviewaffgroupe.component.css'
})
export class AdminviewaffgroupeComponent {
  
  id!: number;
  affgroupe!: Affgroupe;
  aff:any ;     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public affgroupeService: AffgroupeService,
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
    console.log(this.id)      
    this.affgroupeService.find(this.id).subscribe((data: any)=>{
      this.aff = data;
    });
  }
  
}
