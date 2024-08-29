import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {RouterOutlet} from "@angular/router";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-etudiant-template',
  standalone: true,
    imports: [
        MatToolbar,
        MatButton,
        MatIconButton,
        MatIcon,
        MatMenuTrigger,
        MatMenuModule,
        MatDrawerContainer,
        MatDrawerContent,
        MatNavList,
        MatListItem,
        RouterOutlet,
        MatDrawer,
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        MatDivider,
    ],
  templateUrl: './etudiant-template.component.html',
  styleUrl: './etudiant-template.component.css'
})
export class EtudiantTemplateComponent {

}
