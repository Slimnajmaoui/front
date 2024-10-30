import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../admin/header/header.component';
import { MenuComponent } from '../../admin/menu/menu.component';
import { FooterComponent } from '../../admin/footer/footer.component';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';

@Component({
  selector: 'app-userviewadmin',
  standalone: true,
  imports: [],
  templateUrl: './userviewadmin.component.html',
  styleUrls: ['./userviewadmin.component.css']  // Correction ici
})
export class UserviewadminComponent { }

@Component({
  selector: 'app-adminviewadmin',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, MenuComponent],
  templateUrl: './adminviewadmin.component.html',
  styleUrls: ['./adminviewadmin.component.css']  // Correction ici
})
export class AdminviewadminComponent implements OnInit {  // Implémentation de OnInit

  id!: number;
  admin!: Admin;

  constructor(
    public adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['adminId'];
    this.adminService.find(this.id).subscribe((data: Admin) => {
      this.admin = data;
    });
  }
}
