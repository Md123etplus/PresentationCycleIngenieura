import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EtudiantTemplateComponent } from './etudiant-template/etudiant-template.component';
import { ProfesseurTemplateComponent } from './professeur-template/professeur-template.component';
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EtudiantTemplateComponent, ProfesseurTemplateComponent, MatToolbarModule, HomeComponent, AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PresentationCycleIngenieura';
}
