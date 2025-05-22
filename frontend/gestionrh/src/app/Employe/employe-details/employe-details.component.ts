import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Employe} from "../../models/employe";
import {EmployeService} from "../../services/employe-service";


@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html'
})
export class EmployeDetailsComponent implements OnInit {
  employe?: Employe;

  constructor(
    private route: ActivatedRoute,
    private employeService: EmployeService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.employeService.getEmployeById(id).subscribe(
      data => this.employe = data,
      error => console.error('Erreur détails employé', error)
    );
  }
}
