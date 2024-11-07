


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { GroupeService } from '../groupe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from '../groupe';
  
@Component({
  selector: 'app-adminviewgroupe',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminviewgroupe.component.html',
  styleUrl: './adminviewgroupe.component.css'
})
export class AdminviewgroupeComponent {
  
  id!: number;
  groupe!: Groupe;
      gr:any ;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public groupeService: GroupeService,
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
          
    this.groupeService.find(this.id).subscribe((data: any)=>{
      this.gr = data;
    });
  }
  
}
