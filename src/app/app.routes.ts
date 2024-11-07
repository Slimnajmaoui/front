import { Routes } from '@angular/router';
  
import { IndexComponent } from './post/index/index.component';
import { ViewComponent } from './post/view/view.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { AdmincreateabsenceComponent } from './absence/admincreateabsence/admincreateabsence.component';
import { AdmineditabsenceComponent } from './absence/admineditabsence/admineditabsence.component';
import { AdminindexabsenceComponent } from './absence/adminindexabsence/adminindexabsence.component';
import { AdminviewabsenceComponent } from './absence/adminviewabsence/adminviewabsence.component';
import { AdmincreateaffgroupeComponent } from './affgroupe/admincreateaffgroupe/admincreateaffgroupe.component';
import { AdmineditaffgroupeComponent } from './affgroupe/admineditaffgroupe/admineditaffgroupe.component';
import { AdminindexaffgroupeComponent } from './affgroupe/adminindexaffgroupe/adminindexaffgroupe.component';
import { AdminviewaffgroupeComponent } from './affgroupe/adminviewaffgroupe/adminviewaffgroupe.component';
import { AdmincreateaffprojetComponent } from './affprojet/admincreateaffprojet/admincreateaffprojet.component';
import { AdmineditaffprojetComponent } from './affprojet/admineditaffprojet/admineditaffprojet.component';
import { AdminindexaffprojetComponent } from './affprojet/adminindexaffprojet/adminindexaffprojet.component';
import { AdminviewaffprojetComponent } from './affprojet/adminviewaffprojet/adminviewaffprojet.component';
import { AdmincreateafftacheComponent } from './afftache/admincreateafftache/admincreateafftache.component';
import { AdmineditafftacheComponent } from './afftache/admineditafftache/admineditafftache.component';
import { AdminindexafftacheComponent } from './afftache/adminindexafftache/adminindexafftache.component';
import { AdminviewafftacheComponent } from './afftache/adminviewafftache/adminviewafftache.component';
import { AdmincreateavprojetComponent } from './avprojet/admincreateavprojet/admincreateavprojet.component';
import { AdmineditavprojetComponent } from './avprojet/admineditavprojet/admineditavprojet.component';
import { AdminindexavprojetComponent } from './avprojet/adminindexavprojet/adminindexavprojet.component';
import { AdminviewavprojetComponent } from './avprojet/adminviewavprojet/adminviewavprojet.component';
import { AdmincreateavtacheComponent } from './avtache/admincreateavtache/admincreateavtache.component';
import { AdmineditavtacheComponent } from './avtache/admineditavtache/admineditavtache.component';
import { AdminindexavtacheComponent } from './avtache/adminindexavtache/adminindexavtache.component';
import { AdminviewavtacheComponent } from './avtache/adminviewavtache/adminviewavtache.component';
import { AdmincreatechefdeprojetComponent } from './chefdeprojet/admincreatechefdeprojet/admincreatechefdeprojet.component';
import { AdmineditchefdeprojetComponent } from './chefdeprojet/admineditchefdeprojet/admineditchefdeprojet.component';
import { AdminindexchefdeprojetComponent } from './chefdeprojet/adminindexchefdeprojet/adminindexchefdeprojet.component';
import { AdminviewchefdeprojetComponent } from './chefdeprojet/adminviewchefdeprojet/adminviewchefdeprojet.component';
import { AdmincreatecompetenceComponent } from './competence/admincreatecompetence/admincreatecompetence.component';
import { AdmineditcompetenceComponent } from './competence/admineditcompetence/admineditcompetence.component';
import { AdminindexcompetenceComponent } from './competence/adminindexcompetence/adminindexcompetence.component';
import { AdminviewcompetenceComponent } from './competence/adminviewcompetence/adminviewcompetence.component';
import { AdmincreatecongeComponent } from './conge/admincreateconge/admincreateconge.component';
import { AdmineditcongeComponent } from './conge/admineditconge/admineditconge.component';
import { AdminindexcongeComponent } from './conge/adminindexconge/adminindexconge.component';
import { AdminviewcongeComponent } from './conge/adminviewconge/adminviewconge.component';
import { AdmincreategroupeComponent } from './groupe/admincreategroupe/admincreategroupe.component';
import { AdmineditgroupeComponent } from './groupe/admineditgroupe/admineditgroupe.component';
import { AdminindexgroupeComponent } from './groupe/adminindexgroupe/adminindexgroupe.component';
import { AdminviewgroupeComponent } from './groupe/adminviewgroupe/adminviewgroupe.component';
import { AdmincreateprofilComponent } from './profil/admincreateprofil/admincreateprofil.component';
import { AdmineditprofilComponent } from './profil/admineditprofil/admineditprofil.component';
import { AdminindexprofilComponent } from './profil/adminindexprofil/adminindexprofil.component';
import { AdminviewprofilComponent } from './profil/adminviewprofil/adminviewprofil.component';
import { AdmincreateprojetComponent } from './projet/admincreateprojet/admincreateprojet.component';
import { AdmineditprojetComponent } from './projet/admineditprojet/admineditprojet.component';
import { AdminindexprojetComponent } from './projet/adminindexprojet/adminindexprojet.component';
import { AdminviewprojetComponent } from './projet/adminviewprojet/adminviewprojet.component';
import { AdmincreatetacheComponent } from './tache/admincreatetache/admincreatetache.component';
import { AdminedittacheComponent } from './tache/adminedittache/adminedittache.component';
import { AdminindextacheComponent } from './tache/adminindextache/adminindextache.component';
import { AdminviewtacheComponent } from './tache/adminviewtache/adminviewtache.component';
import { AdmincreateuserComponent } from './user/admincreateuser/admincreateuser.component';
import { AdminedituserComponent } from './user/adminedituser/adminedituser.component';
import { AdminindexuserComponent } from './user/adminindexuser/adminindexuser.component';
import { AdminviewuserComponent } from './user/adminviewuser/adminviewuser.component';
import { IndexapplicationComponent } from './indexapplication/indexapplication.component';
import { LoginComponent } from './user/login/login.component';
import { UsercreateabsenceComponent } from './absence/usercreateabsence/usercreateabsence.component';
import { UsereditabsenceComponent } from './absence/usereditabsence/usereditabsence.component';
import { UserindexabsenceComponent } from './absence/userindexabsence/userindexabsence.component';
import { UserviewabsenceComponent } from './absence/userviewabsence/userviewabsence.component';
import { UsercreateaffgroupeComponent } from './affgroupe/usercreateaffgroupe/usercreateaffgroupe.component';
import { UsereditaffgroupeComponent } from './affgroupe/usereditaffgroupe/usereditaffgroupe.component';
import { UserindexaffgroupeComponent } from './affgroupe/userindexaffgroupe/userindexaffgroupe.component';
import { UserviewaffgroupeComponent } from './affgroupe/userviewaffgroupe/userviewaffgroupe.component';
import { UsercreateaffprojetComponent } from './affprojet/usercreateaffprojet/usercreateaffprojet.component';
import { UsereditaffprojetComponent } from './affprojet/usereditaffprojet/usereditaffprojet.component';
import { UserindexaffprojetComponent } from './affprojet/userindexaffprojet/userindexaffprojet.component';
import { UserviewaffprojetComponent } from './affprojet/userviewaffprojet/userviewaffprojet.component';
import { UsercreateafftacheComponent } from './afftache/usercreateafftache/usercreateafftache.component';
import { UsereditafftacheComponent } from './afftache/usereditafftache/usereditafftache.component';
import { UserindexafftacheComponent } from './afftache/userindexafftache/userindexafftache.component';
import { UserviewafftacheComponent } from './afftache/userviewafftache/userviewafftache.component';
import { UsercreateavprojetComponent } from './avprojet/usercreateavprojet/usercreateavprojet.component';
import { UsereditavprojetComponent } from './avprojet/usereditavprojet/usereditavprojet.component';
import { UserindexavprojetComponent } from './avprojet/userindexavprojet/userindexavprojet.component';
import { UserviewavprojetComponent } from './avprojet/userviewavprojet/userviewavprojet.component';
import { UsercreateavtacheComponent } from './avtache/usercreateavtache/usercreateavtache.component';
import { UsereditavtacheComponent } from './avtache/usereditavtache/usereditavtache.component';
import { UserindexavtacheComponent } from './avtache/userindexavtache/userindexavtache.component';
import { UserviewavtacheComponent } from './avtache/userviewavtache/userviewavtache.component';
import { UsercreatechefdeprojetComponent } from './chefdeprojet/usercreatechefdeprojet/usercreatechefdeprojet.component';
import { UsereditchefdeprojetComponent } from './chefdeprojet/usereditchefdeprojet/usereditchefdeprojet.component';
import { UserindexchefdeprojetComponent } from './chefdeprojet/userindexchefdeprojet/userindexchefdeprojet.component';
import { UserviewchefdeprojetComponent } from './chefdeprojet/userviewchefdeprojet/userviewchefdeprojet.component';
import { UsercreatecompetenceComponent } from './competence/usercreatecompetence/usercreatecompetence.component';
import { UsereditcompetenceComponent } from './competence/usereditcompetence/usereditcompetence.component';
import { UserindexcompetenceComponent } from './competence/userindexcompetence/userindexcompetence.component';
import { UserviewcompetenceComponent } from './competence/userviewcompetence/userviewcompetence.component';
import { UsercreatecongeComponent } from './conge/usercreateconge/usercreateconge.component';
import { UsereditcongeComponent } from './conge/usereditconge/usereditconge.component';
import { UserindexcongeComponent } from './conge/userindexconge/userindexconge.component';
import { UserviewcongeComponent } from './conge/userviewconge/userviewconge.component';
import { UsercreategroupeComponent } from './groupe/usercreategroupe/usercreategroupe.component';
import { UsereditgroupeComponent } from './groupe/usereditgroupe/usereditgroupe.component';
import { UserindexgroupeComponent } from './groupe/userindexgroupe/userindexgroupe.component';
import { UserviewgroupeComponent } from './groupe/userviewgroupe/userviewgroupe.component';
import { UsercreateprofilComponent } from './profil/usercreateprofil/usercreateprofil.component';
import { UsereditprofilComponent } from './profil/usereditprofil/usereditprofil.component';
import { UserindexprofilComponent } from './profil/userindexprofil/userindexprofil.component';
import { UserviewprofilComponent } from './profil/userviewprofil/userviewprofil.component';
import { UsercreateprojetComponent } from './projet/usercreateprojet/usercreateprojet.component';
import { UsereditprojetComponent } from './projet/usereditprojet/usereditprojet.component';
import { UserindexprojetComponent } from './projet/userindexprojet/userindexprojet.component';
import { UserviewprojetComponent } from './projet/userviewprojet/userviewprojet.component';
import { UsercreatetacheComponent } from './tache/usercreatetache/usercreatetache.component';
import { UseredittacheComponent } from './tache/useredittache/useredittache.component';
import { UserindextacheComponent } from './tache/userindextache/userindextache.component';
import { UserviewtacheComponent } from './tache/userviewtache/userviewtache.component';
import { UsercreateuserComponent } from './user/usercreateuser/usercreateuser.component';
import { UseredituserComponent } from './user/useredituser/useredituser.component';
import { UserindexuserComponent } from './user/userindexuser/userindexuser.component';
import { UserviewuserComponent } from './user/userviewuser/userviewuser.component';
import { ChefdeprojetcreateabsenceComponent } from './absence/chefdeprojetcreateabsence/chefdeprojetcreateabsence.component';
import { ChefdeprojeteditabsenceComponent } from './absence/chefdeprojeteditabsence/chefdeprojeteditabsence.component';
import { ChefdeprojetindexabsenceComponent } from './absence/chefdeprojetindexabsence/chefdeprojetindexabsence.component';
import { ChefdeprojetviewabsenceComponent } from './absence/chefdeprojetviewabsence/chefdeprojetviewabsence.component';
import { ChefdeprojetcreateaffgroupeComponent } from './affgroupe/chefdeprojetcreateaffgroupe/chefdeprojetcreateaffgroupe.component';
import { ChefdeprojeteditaffgroupeComponent } from './affgroupe/chefdeprojeteditaffgroupe/chefdeprojeteditaffgroupe.component';
import { ChefdeprojetindexaffgroupeComponent } from './affgroupe/chefdeprojetindexaffgroupe/chefdeprojetindexaffgroupe.component';
import { ChefdeprojetviewaffgroupeComponent } from './affgroupe/chefdeprojetviewaffgroupe/chefdeprojetviewaffgroupe.component';
import { ChefdeprojetcreateaffprojetComponent } from './affprojet/chefdeprojetcreateaffprojet/chefdeprojetcreateaffprojet.component';
import { ChefdeprojeteditaffprojetComponent } from './affprojet/chefdeprojeteditaffprojet/chefdeprojeteditaffprojet.component';
import { ChefdeprojetindexaffprojetComponent } from './affprojet/chefdeprojetindexaffprojet/chefdeprojetindexaffprojet.component';
import { ChefdeprojetviewaffprojetComponent } from './affprojet/chefdeprojetviewaffprojet/chefdeprojetviewaffprojet.component';
import { ChefdeprojetcreateafftacheComponent } from './afftache/chefdeprojetcreateafftache/chefdeprojetcreateafftache.component';
import { ChefdeprojeteditafftacheComponent } from './afftache/chefdeprojeteditafftache/chefdeprojeteditafftache.component';
import { ChefdeprojetindexafftacheComponent } from './afftache/chefdeprojetindexafftache/chefdeprojetindexafftache.component';
import { ChefdeprojetviewafftacheComponent } from './afftache/chefdeprojetviewafftache/chefdeprojetviewafftache.component';
import { ChefdeprojetcreateavprojetComponent } from './avprojet/chefdeprojetcreateavprojet/chefdeprojetcreateavprojet.component';
import { ChefdeprojeteditavprojetComponent } from './avprojet/chefdeprojeteditavprojet/chefdeprojeteditavprojet.component';
import { ChefdeprojetindexavprojetComponent } from './avprojet/chefdeprojetindexavprojet/chefdeprojetindexavprojet.component';
import { ChefdeprojetviewavprojetComponent } from './avprojet/chefdeprojetviewavprojet/chefdeprojetviewavprojet.component';
import { ChefdeprojetcreateavtacheComponent } from './avtache/chefdeprojetcreateavtache/chefdeprojetcreateavtache.component';
import { ChefdeprojeteditavtacheComponent } from './avtache/chefdeprojeteditavtache/chefdeprojeteditavtache.component';
import { ChefdeprojetindexavtacheComponent } from './avtache/chefdeprojetindexavtache/chefdeprojetindexavtache.component';
import { ChefdeprojetviewavtacheComponent } from './avtache/chefdeprojetviewavtache/chefdeprojetviewavtache.component';
import { ChefdeprojetcreatechefdeprojetComponent } from './chefdeprojet/chefdeprojetcreatechefdeprojet/chefdeprojetcreatechefdeprojet.component';
import { ChefdeprojeteditchefdeprojetComponent } from './chefdeprojet/chefdeprojeteditchefdeprojet/chefdeprojeteditchefdeprojet.component';
import { ChefdeprojetindexchefdeprojetComponent } from './chefdeprojet/chefdeprojetindexchefdeprojet/chefdeprojetindexchefdeprojet.component';
import { ChefdeprojetviewchefdeprojetComponent } from './chefdeprojet/chefdeprojetviewchefdeprojet/chefdeprojetviewchefdeprojet.component';
import { ChefdeprojetcreatecompetenceComponent } from './competence/chefdeprojetcreatecompetence/chefdeprojetcreatecompetence.component';
import { ChefdeprojeteditcompetenceComponent } from './competence/chefdeprojeteditcompetence/chefdeprojeteditcompetence.component';
import { ChefdeprojetindexcompetenceComponent } from './competence/chefdeprojetindexcompetence/chefdeprojetindexcompetence.component';
import { ChefdeprojetviewcompetenceComponent } from './competence/chefdeprojetviewcompetence/chefdeprojetviewcompetence.component';
import { ChefdeprojetcreatecongeComponent } from './conge/chefdeprojetcreateconge/chefdeprojetcreateconge.component';
import { ChefdeprojeteditcongeComponent } from './conge/chefdeprojeteditconge/chefdeprojeteditconge.component';
import { ChefdeprojetindexcongeComponent } from './conge/chefdeprojetindexconge/chefdeprojetindexconge.component';
import { ChefdeprojetviewcongeComponent } from './conge/chefdeprojetviewconge/chefdeprojetviewconge.component';
import { ChefdeprojetcreategroupeComponent } from './groupe/chefdeprojetcreategroupe/chefdeprojetcreategroupe.component';
import { ChefdeprojeteditgroupeComponent } from './groupe/chefdeprojeteditgroupe/chefdeprojeteditgroupe.component';
import { ChefdeprojetindexgroupeComponent } from './groupe/chefdeprojetindexgroupe/chefdeprojetindexgroupe.component';
import { ChefdeprojetviewgroupeComponent } from './groupe/chefdeprojetviewgroupe/chefdeprojetviewgroupe.component';
import { ChefdeprojetcreateprofilComponent } from './profil/chefdeprojetcreateprofil/chefdeprojetcreateprofil.component';
import { ChefdeprojeteditprofilComponent } from './profil/chefdeprojeteditprofil/chefdeprojeteditprofil.component';
import { ChefdeprojetindexprofilComponent } from './profil/chefdeprojetindexprofil/chefdeprojetindexprofil.component';
import { ChefdeprojetviewprofilComponent } from './profil/chefdeprojetviewprofil/chefdeprojetviewprofil.component';
import { ChefdeprojetcreateprojetComponent } from './projet/chefdeprojetcreateprojet/chefdeprojetcreateprojet.component';
import { ChefdeprojeteditprojetComponent } from './projet/chefdeprojeteditprojet/chefdeprojeteditprojet.component';
import { ChefdeprojetindexprojetComponent } from './projet/chefdeprojetindexprojet/chefdeprojetindexprojet.component';
import { ChefdeprojetviewprojetComponent } from './projet/chefdeprojetviewprojet/chefdeprojetviewprojet.component';
import { ChefdeprojetcreatetacheComponent } from './tache/chefdeprojetcreatetache/chefdeprojetcreatetache.component';
import { ChefdeprojetedittacheComponent } from './tache/chefdeprojetedittache/chefdeprojetedittache.component';
import { ChefdeprojetindextacheComponent } from './tache/chefdeprojetindextache/chefdeprojetindextache.component';
import { ChefdeprojetviewtacheComponent } from './tache/chefdeprojetviewtache/chefdeprojetviewtache.component';
import { ChefdeprojetcreateuserComponent } from './user/chefdeprojetcreateuser/chefdeprojetcreateuser.component';
import { ChefdeprojetedituserComponent } from './user/chefdeprojetedituser/chefdeprojetedituser.component';
import { ChefdeprojetindexuserComponent } from './user/chefdeprojetindexuser/chefdeprojetindexuser.component';
import { ChefdeprojetviewuserComponent } from './user/chefdeprojetviewuser/chefdeprojetviewuser.component';
import { ChefdeprojetindexadminComponent } from './admin/chefdeprojetindexadmin/chefdeprojetindexadmin.component';
import { ChefdeprojetviewadminComponent } from './admin/chefdeprojetviewadmin/chefdeprojetviewadmin.component';
import { ChefdeprojetcreateadminComponent } from './admin/chefdeprojetcreateadmin/chefdeprojetcreateadmin.component';
import { ChefdeprojeteditadminComponent } from './admin/chefdeprojeteditadmin/chefdeprojeteditadmin.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { ChefdeprojetloginComponent } from './chefdeprojet/chefdeprojetlogin/chefdeprojetlogin.component';
import { MesGroupesComponent } from './user/mes-groupes/mes-groupes.component';
  
export const routes: Routes = [

    { path: '', component: IndexapplicationComponent},

    {path: '', redirectTo: '/', pathMatch: 'full'},


    { path: 'adminabsence/index', component: AdminindexabsenceComponent },
    { path: 'adminabsenceview', component: AdminviewabsenceComponent },
    { path: 'adminabsence/create', component: AdmincreateabsenceComponent },
    { path: 'adminabsence/:absenceId/edit', component: AdmineditabsenceComponent } ,

    { path: 'adminadmin/index', component: AdminindexabsenceComponent },
    { path: 'adminadmin/:adminId/view', component: AdminviewabsenceComponent },
    { path: 'adminadmin/create', component: AdmincreateabsenceComponent },
    { path: 'adminadmin/:adminId/edit', component: AdmineditabsenceComponent } ,
    { path: 'mes-groupe', component: MesGroupesComponent } ,


    { path: 'adminaffgroupe/index', component: AdminindexaffgroupeComponent },
    { path: 'adminaffgroupeview', component: AdminviewaffgroupeComponent },
    { path: 'adminaffgroupe/create', component: AdmincreateaffgroupeComponent },
    { path: 'adminaffgroupeedit', component: AdmineditaffgroupeComponent } ,
    { path: 'adminaffprojet/index', component: AdminindexaffprojetComponent },
    { path: 'adminaffprojet', component: AdminviewaffprojetComponent },
    { path: 'adminaffprojet/create', component: AdmincreateaffprojetComponent },
    { path: 'adminaffprojetedit', component: AdmineditaffprojetComponent } ,
    { path: 'adminafftache/index', component: AdminindexafftacheComponent },
    { path: 'adminafftacheview', component: AdminviewafftacheComponent },
    { path: 'adminafftache/create', component: AdmincreateafftacheComponent },
    { path: 'adminafftacheedit', component: AdmineditafftacheComponent } ,
    { path: 'adminavtache/index', component: AdminindexavtacheComponent },
    { path: 'adminavtacheview', component: AdminviewavtacheComponent },
    { path: 'adminavtache/create', component: AdmincreateavtacheComponent },
    { path: 'adminavtacheedit', component: AdmineditavtacheComponent } ,
    { path: 'adminavprojet/index', component: AdminindexavprojetComponent },
    { path: 'adminavprojetview', component: AdminviewavprojetComponent },
    { path: 'adminavprojet/create', component: AdmincreateavprojetComponent },
    { path: 'adminavprojetedit', component: AdmineditavprojetComponent } ,
    { path: 'adminchefdeprojet/index', component: AdminindexchefdeprojetComponent },
    { path: 'adminchefdeprojetview', component: AdminviewchefdeprojetComponent },
    { path: 'adminchefdeprojet/create', component: AdmincreatechefdeprojetComponent },
    { path: 'adminchefdeprojetedit', component: AdmineditchefdeprojetComponent } ,
    { path: 'admincompetence/index', component: AdminindexcompetenceComponent },
    { path: 'admincompetence/:competenceId/view', component: AdminviewcompetenceComponent },
    { path: 'admincompetence/create', component: AdmincreatecompetenceComponent },
    { path: 'admincompetence/:competenceId/edit', component: AdmineditcompetenceComponent } ,
    { path: 'adminconge/index', component: AdminindexcongeComponent },
    { path: 'admincongeview', component: AdminviewcongeComponent },
    { path: 'adminconge/create', component: AdmincreatecongeComponent },
    { path: 'admincongeedit', component: AdmineditcongeComponent } ,
    { path: 'admingroupe/index', component: AdminindexgroupeComponent },

    { path: 'admingroupeview', component: AdminviewgroupeComponent },
    { path: 'admingroupe/create', component: AdmincreategroupeComponent },
    { path: 'admingroupeedit', component: AdmineditgroupeComponent } ,
    { path: 'adminprofil/index', component: AdminindexprofilComponent },
    { path: 'adminprofil/:profilId/view', component: AdminviewprofilComponent },
    { path: 'adminprofil/create', component: AdmincreateprofilComponent },
    { path: 'adminprofil/:profilId/edit', component: AdmineditprofilComponent } ,    
    { path: 'adminprojet/index', component: AdminindexprojetComponent },
    { path: 'adminprojetview', component: AdminviewprojetComponent },
    { path: 'adminprojet/create', component: AdmincreateprojetComponent },
    { path: 'adminprojetedit', component: AdmineditprojetComponent } ,
    { path: 'admintache/index', component: AdminindextacheComponent },
    { path: 'admintacheview', component: AdminviewtacheComponent },
    { path: 'admintache/create', component: AdmincreatetacheComponent },
    { path: 'admintacheedit', component: AdminedittacheComponent }, 
    { path: 'adminuser/index', component: AdminindexuserComponent },
    { path: 'adminuserview', component: AdminviewuserComponent },
    { path: 'adminuser/create', component: AdmincreateuserComponent },
    { path: 'adminuser/:userId/edit', component: AdminedituserComponent } ,

    
    { path: 'userabsence/index', component: UserindexabsenceComponent },
    { path: 'userabsence/:absenceId/view', component: UserviewabsenceComponent },
    { path: 'userabsence/create', component: UsercreateabsenceComponent },
    { path: 'userabsence/:absenceId/edit', component: UsereditabsenceComponent } ,

    { path: 'useradmin/index', component: UserindexabsenceComponent },
    { path: 'useradmin/:adminId/view', component: UserviewabsenceComponent },
    { path: 'useradmin/create', component: UsercreateabsenceComponent },
    { path: 'useradmin/:adminId/edit', component: UsereditabsenceComponent } ,

    { path: 'useraffgroupe/index', component: UserindexaffgroupeComponent },
    { path: 'useraffgroupe/:affgroupeId/view', component: UserviewaffgroupeComponent },
    { path: 'useraffgroupe/create', component: UsercreateaffgroupeComponent },
    { path: 'useraffgroupe/:affgroupeId/edit', component: UsereditaffgroupeComponent } ,
    { path: 'useraffprojet/index', component: UserindexaffprojetComponent },
    { path: 'useraffprojet/:affprojetId/view', component: UserviewaffprojetComponent },
    { path: 'useraffprojet/create', component: UsercreateaffprojetComponent },
    { path: 'useraffprojet/:affprojetId/edit', component: UsereditaffprojetComponent } ,
    { path: 'userafftache/index', component: UserindexafftacheComponent },
    { path: 'userafftache/:afftacheId/view', component: UserviewafftacheComponent },
    { path: 'userafftache/create', component: UsercreateafftacheComponent },
    { path: 'userafftache/:afftacheId/edit', component: UsereditafftacheComponent } ,
    { path: 'useravtache/index', component: UserindexavtacheComponent },
    { path: 'useravtache/:avtacheId/view', component: UserviewavtacheComponent },
    { path: 'useravtache/create', component: UsercreateavtacheComponent },
    { path: 'useravtache/:avtacheId/edit', component: UsereditavtacheComponent } ,
    { path: 'useravprojet/index', component: UserindexavprojetComponent },
    { path: 'useravprojet/:avprojetId/view', component: UserviewavprojetComponent },
    { path: 'useravprojet/create', component: UsercreateavprojetComponent },
    { path: 'useravprojet/:avprojetId/edit', component: UsereditavprojetComponent } ,
    { path: 'userchefdeprojet/index', component: UserindexchefdeprojetComponent },
    { path: 'userchefdeprojet/:chefdeprojetId/view', component: UserviewchefdeprojetComponent },
    { path: 'userchefdeprojet/create', component: UsercreatechefdeprojetComponent },
    { path: 'userchefdeprojet/:chefdeprojetId/edit', component: UsereditchefdeprojetComponent } ,
    { path: 'usercompetence/index', component: UserindexcompetenceComponent },
    { path: 'usercompetence/:competenceId/view', component: UserviewcompetenceComponent },
    { path: 'usercompetence/create', component: UsercreatecompetenceComponent },
    { path: 'usercompetence/:competenceId/edit', component: UsereditcompetenceComponent } ,
    { path: 'userconge/index', component: UserindexcongeComponent },
    { path: 'userconge/:congeId/view', component: UserviewcongeComponent },
    { path: 'userconge/create', component: UsercreatecongeComponent },
    { path: 'userconge/:congeId/edit', component: UsereditcongeComponent } ,
    { path: 'usergroupe/index', component: UserindexgroupeComponent },
    { path: 'usergroupe/:groupeId/view', component: UserviewgroupeComponent },
    { path: 'usergroupe/create', component: UsercreategroupeComponent },
    { path: 'usergroupe/:groupeId/edit', component: UsereditgroupeComponent } ,
    { path: 'userprofil/index', component: UserindexprofilComponent },
    { path: 'userprofil/:profilId/view', component: UserviewprofilComponent },
    { path: 'userprofil/create', component: UsercreateprofilComponent },
    { path: 'userprofil/:profilId/edit', component: UsereditprofilComponent } ,    
    { path: 'userprojet/index', component: UserindexprojetComponent },
    { path: 'userprojet/:projetId/view', component: UserviewprojetComponent },
    { path: 'userprojet/create', component: UsercreateprojetComponent },
    { path: 'userprojet/:projetId/edit', component: UsereditprojetComponent } ,
    { path: 'usertache/index', component: UserindextacheComponent },
    { path: 'usertache/:tacheId/view', component: UserviewtacheComponent },
    { path: 'usertache/create', component: UsercreatetacheComponent },
    { path: 'usertache/:tacheId/edit', component: UseredittacheComponent }, 
    { path: 'useruser/index', component: UserindexuserComponent },
    { path: 'useruser/:userId/view', component: UserviewuserComponent },
    { path: 'useruser/create', component: UsercreateuserComponent },
    { path: 'useruser/:userId/edit', component: UseredituserComponent } ,

    
    { path: 'chefdeprojetabsence/index', component: ChefdeprojetindexabsenceComponent },
    { path: 'chefdeprojetabsence/:absenceId/view', component: ChefdeprojetviewabsenceComponent },
    { path: 'chefdeprojetabsence/create', component: ChefdeprojetcreateabsenceComponent },
    { path: 'chefdeprojetabsence/:absenceId/edit', component: ChefdeprojeteditabsenceComponent } ,

    { path: 'chefdeprojetadmin/index', component: ChefdeprojetindexadminComponent },
    { path: 'chefdeprojetadmin/:adminId/view', component: ChefdeprojetviewadminComponent },
    { path: 'chefdeprojetadmin/create', component: ChefdeprojetcreateadminComponent },
    { path: 'chefdeprojetadmin/:adminId/edit', component: ChefdeprojeteditadminComponent } ,

    { path: 'chefdeprojetaffgroupe/index', component: ChefdeprojetindexaffgroupeComponent },
    { path: 'chefdeprojetaffgroupe/:affgroupeId/view', component: ChefdeprojetviewaffgroupeComponent },
    { path: 'chefdeprojetaffgroupe/create', component: ChefdeprojetcreateaffgroupeComponent },
    { path: 'chefdeprojetaffgroupe/:affgroupeId/edit', component: ChefdeprojeteditaffgroupeComponent } ,
    { path: 'chefdeprojetaffprojet/index', component: ChefdeprojetindexaffprojetComponent },
    { path: 'chefdeprojetaffprojet/:affprojetId/view', component: ChefdeprojetviewaffprojetComponent },
    { path: 'chefdeprojetaffprojet/create', component: ChefdeprojetcreateaffprojetComponent },
    { path: 'chefdeprojetaffprojet/:affprojetId/edit', component: ChefdeprojeteditaffprojetComponent } ,
    { path: 'chefdeprojetafftache/index', component: ChefdeprojetindexafftacheComponent },
    { path: 'chefdeprojetafftache/:afftacheId/view', component: ChefdeprojetviewafftacheComponent },
    { path: 'chefdeprojetafftache/create', component: ChefdeprojetcreateafftacheComponent },
    { path: 'chefdeprojetafftache/:afftacheId/edit', component: ChefdeprojeteditafftacheComponent } ,
    { path: 'chefdeprojetavtache/index', component: ChefdeprojetindexavtacheComponent },
    { path: 'chefdeprojetavtache/:avtacheId/view', component: ChefdeprojetviewavtacheComponent },
    { path: 'chefdeprojetavtache/create', component: ChefdeprojetcreateavtacheComponent },
    { path: 'chefdeprojetavtache/:avtacheId/edit', component: ChefdeprojeteditavtacheComponent } ,
    { path: 'chefdeprojetavprojet/index', component: ChefdeprojetindexavprojetComponent },
    { path: 'chefdeprojetavprojet/:avprojetId/view', component: ChefdeprojetviewavprojetComponent },
    { path: 'chefdeprojetavprojet/create', component: ChefdeprojetcreateavprojetComponent },
    { path: 'chefdeprojetavprojet/:avprojetId/edit', component: ChefdeprojeteditavprojetComponent } ,
    { path: 'chefdeprojetchefdeprojet/index', component: ChefdeprojetindexchefdeprojetComponent },
    { path: 'chefdeprojetchefdeprojet/:chefdeprojetId/view', component: ChefdeprojetviewchefdeprojetComponent },
    { path: 'chefdeprojetchefdeprojet/create', component: ChefdeprojetcreatechefdeprojetComponent },
    { path: 'chefdeprojetchefdeprojet/:chefdeprojetId/edit', component: ChefdeprojeteditchefdeprojetComponent } ,
    { path: 'chefdeprojetcompetence/index', component: ChefdeprojetindexcompetenceComponent },
    { path: 'chefdeprojetcompetence/:competenceId/view', component: ChefdeprojetviewcompetenceComponent },
    { path: 'chefdeprojetcompetence/create', component: ChefdeprojetcreatecompetenceComponent },
    { path: 'chefdeprojetcompetence/:competenceId/edit', component: ChefdeprojeteditcompetenceComponent } ,
    { path: 'chefdeprojetconge/index', component: ChefdeprojetindexcongeComponent },
    { path: 'chefdeprojetconge/:congeId/view', component: ChefdeprojetviewcongeComponent },
    { path: 'chefdeprojetconge/create', component: ChefdeprojetcreatecongeComponent },
    { path: 'chefdeprojetconge/:congeId/edit', component: ChefdeprojeteditcongeComponent } ,
    { path: 'chefdeprojetgroupe/index', component: ChefdeprojetindexgroupeComponent },
    { path: 'chefdeprojetgroupe/:groupeId/view', component: ChefdeprojetviewgroupeComponent },
    { path: 'chefdeprojetgroupe/create', component: ChefdeprojetcreategroupeComponent },
    { path: 'chefdeprojetgroupe/:groupeId/edit', component: ChefdeprojeteditgroupeComponent } ,
    { path: 'chefdeprojetprofil/index', component: ChefdeprojetindexprofilComponent },
    { path: 'chefdeprojetprofil/:profilId/view', component: ChefdeprojetviewprofilComponent },
    { path: 'chefdeprojetprofil/create', component: ChefdeprojetcreateprofilComponent },
    { path: 'chefdeprojetprofil/:profilId/edit', component: ChefdeprojeteditprofilComponent } ,    
    { path: 'chefdeprojetprojet/index', component: ChefdeprojetindexprojetComponent },
    { path: 'chefdeprojetprojet/:projetId/view', component: ChefdeprojetviewprojetComponent },
    { path: 'chefdeprojetprojet/create', component: ChefdeprojetcreateprojetComponent },
    { path: 'chefdeprojetprojet/:projetId/edit', component: ChefdeprojeteditprojetComponent } ,
    { path: 'chefdeprojettache/index', component: ChefdeprojetindextacheComponent },
    { path: 'chefdeprojettache/:tacheId/view', component: ChefdeprojetviewtacheComponent },
    { path: 'chefdeprojettache/create', component: ChefdeprojetcreatetacheComponent },
    { path: 'chefdeprojettache/:tacheId/edit', component: ChefdeprojetedittacheComponent }, 
    { path: 'chefdeprojetuser/index', component: ChefdeprojetindexuserComponent },
    { path: 'chefdeprojetuser/:userId/view', component: ChefdeprojetviewuserComponent },
    { path: 'chefdeprojetuser/create', component: ChefdeprojetcreateuserComponent },
    { path: 'chefdeprojetuser/:userId/edit', component: ChefdeprojetedituserComponent } ,

    { path: 'userlogin', component: UserloginComponent } ,
    { path: 'chefdeprojetlogin', component: ChefdeprojetloginComponent } 
  ];