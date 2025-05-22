/*import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../../services/evaluation.service';
import { Evaluation } from '../../models/evaluation.model';
import { Employe } from "../../models/employe";
import { EmployeService } from "../../services/employe-service";

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
})
export class EvaluationComponent implements OnInit {
  evaluations: Evaluation[] = [];
  employes: Employe[] = [];

  newEvaluation: Evaluation = {
    score: 0,
    comments: '',
  };

  selectedEmployeId: number = 0; // <-- Champ pour stocker l'employe sélectionné

  constructor(
    private evaluationService: EvaluationService,
    private employeService: EmployeService
  ) {}

  ngOnInit(): void {
    this.loadEvaluations();
    this.loadEmployes();
  }

  loadEvaluations(): void {
    this.evaluationService.getAll().subscribe((data) => {
      this.evaluations = data;
    });
  }

  loadEmployes(): void {
    this.employeService.getAllEmployes().subscribe((data) => {
      this.employes = data;
    });
  }

  addEvaluation(): void {
    if(this.selectedEmployeId === 0) {
      alert("Veuillez sélectionner un employé");
      return;
    }
    this.evaluationService.create(this.newEvaluation, this.selectedEmployeId).subscribe(() => {
      this.loadEvaluations();
      this.newEvaluation = { score: 0, comments: '' };
      this.selectedEmployeId = 0;
    });
  }

  deleteEvaluation(id: number): void {
    this.evaluationService.delete(id).subscribe(() => {
      this.loadEvaluations();
    });
  }
}

 */
