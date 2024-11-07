


  
import { Component } from '@angular/core';
import { AffprojetService } from '../affprojet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Affprojet } from '../affprojet';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../admin/footer/footer.component';
import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
  
@Component({
  selector: 'app-adminviewaffprojet',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FooterComponent,HeaderComponent,MenuComponent],
  templateUrl: './adminviewaffprojet.component.html',
  styleUrl: './adminviewaffprojet.component.css'
})
export class AdminviewaffprojetComponent {
  
  id!: number;
  affprojet!:any;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public affprojetService: AffprojetService,
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
          
    this.affprojetService.find(this.id).subscribe((data: any)=>{
      this.affprojet = data;
    });
  }
  
}
