


import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
  
import { TacheService } from '../tache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from '../tache';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
  
@Component({
  selector: 'app-adminviewtache',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminviewtache.component.html',
  styleUrl: './adminviewtache.component.css'
})
export class AdminviewtacheComponent {
  
  id!: number;
  tache!: Tache;
     t:any; 
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public tacheService: TacheService,
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
          
    this.tacheService.find(this.id).subscribe((data: any)=>{
      this.t = data;
    });
  }
  
}
