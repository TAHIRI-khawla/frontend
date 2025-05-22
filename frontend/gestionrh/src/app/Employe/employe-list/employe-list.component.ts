import { Component, OnInit } from '@angular/core';
import {Employe} from "../../models/employe";
import {EmployeService} from "../../services/employe-service";


@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html'
})
export class EmployeListComponent implements OnInit {
  employes: Employe[] = [];

  constructor(private employeService: EmployeService) { }

  ngOnInit(): void {
    this.loadEmployes();
  }

  loadEmployes(): void {
    this.employeService.getAllEmployes().subscribe(
      data => this.employes = data,
      error => console.error('Erreur chargement employés', error)
    );
  }

  deleteEmploye(id: number): void {
    if (confirm('Supprimer cet employé ?')) {
      this.employeService.deleteEmploye(id).subscribe(
        () => this.employes = this.employes.filter(e => e.id !== id),
        error => console.error('Erreur suppression', error)
      );
    }
  }
}
