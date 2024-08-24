import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-etudiant-template',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './etudiant-template.component.html',
  styleUrl: './etudiant-template.component.css'
})
export class EtudiantTemplateComponent {

}
