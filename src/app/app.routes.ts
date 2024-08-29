import { Routes } from '@angular/router';
import {HOME} from "@angular/cdk/keycodes";
import {EtudiantTemplateComponent} from "./etudiant-template/etudiant-template.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PaymentsComponent} from "./payments/payments.component";
import {LoginComponent} from "./login/login.component";
import {ProfesseurTemplateComponent} from "./professeur-template/professeur-template.component";
import {LoadStudentsComponent} from "./load-students/load-students.component";
import {LoadPaymentsComponent} from "./load-payments/load-payments.component";

export const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"profile",component:ProfileComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"student",component:EtudiantTemplateComponent},
  {path:"payments",component:PaymentsComponent},
  {path:"login",component:LoginComponent},
  {path:"professor",component:ProfesseurTemplateComponent},
  {path:"loadStudents",component:LoadStudentsComponent},
  {path:"loadPayments",component:LoadPaymentsComponent},
];
