import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {RouterOutlet} from "@angular/router";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {Router} from '@angular/router';

import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource,

} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";


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
    MatTable,
    MatColumnDef,
    MatCell,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatPaginator,
    MatSort,
    MatSortHeader,
    MatInput,
    MatLabel,
    MatFormField,
  ],
  templateUrl: './etudiant-template.component.html',
  styleUrl: './etudiant-template.component.css'
})
export class EtudiantTemplateComponent implements OnInit, AfterViewInit{
  public students:any;
  public dataSource:any;
  public displayedColumns=["id","firstName","lastName","payments"];
  public clickedRows=new Set<any>();
  @ViewChild(MatPaginator) paginator! :MatPaginator;
  @ViewChild(MatSort) sort! :MatSort;
  constructor(private router:Router) {
  }
  ngOnInit(): void {
    this.students=[];

    for(let i=1;i<=100;i++){
      this.students.push(
        {
          id:i,
          firstName:Math.random().toString(20),
          lastName:Math.random().toString(20),
        }
      );
    }
    this.dataSource=new MatTableDataSource(this.students);
  }
  onRowClicked(row: any): void {
    if (this.clickedRows.has(row)) {
      this.clickedRows.delete(row);
    } else {
      this.clickedRows.add(row);
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  filterStudents(event: Event) {
    let value=(event.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }

  getPayments(student:any) {
    this.router.navigateByUrl("/payments");

  }
}
