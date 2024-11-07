
import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { ProfilService } from '../profil.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Profil } from '../profil';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
@Component({
  selector: 'app-usereditprofil',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './usereditprofil.component.html',
  styleUrl: './usereditprofil.component.css'
})
export class UsereditprofilComponent {
  id!: number;
  profil!: Profil;
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public profilService: ProfilService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['profilId'];
    this.profilService.find(this.id).subscribe((data: Profil)=>{
      this.profil = data;
    }); 
        
    this.form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    diplome: new FormControl('', [Validators.required]),
    experience: new FormControl('', [Validators.required]),
    niveau: new FormControl('', [Validators.required]),
    etat: new FormControl('', [Validators.required]),
    datecreation: new FormControl('', [Validators.required]),
    datemodification: new FormControl('', [Validators.required])
    });
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.profilService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Profil updated successfully!');
         this.router.navigateByUrl('profil/index');
    })
  }
  
}
