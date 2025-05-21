import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {CongeService} from "../../services/conge-service";
import {CongeRequestDTO} from "../../models/conge-request-dto";

@Component({
  selector: 'app-conge-form',
  templateUrl: './conge-form.component.html',
  styleUrls: ['./conge-form.component.css']
})
export class CongeFormComponent {
  isLoading = false;

  form = this.fb.group({
    type: ['', Validators.required],
    dateDebut: ['', Validators.required],
    dateFin: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private congeService: CongeService) {}

  submit() {
    if (this.form.valid) {
      this.isLoading = true;

      const conge: CongeRequestDTO = {
        type: this.form.value.type!,
        dateDebut: this.form.value.dateDebut!,
        dateFin: this.form.value.dateFin!,
      };

      const employeId = 1; // à adapter dynamiquement (ex. depuis le token JWT)

      this.congeService.demanderConge(conge, employeId).subscribe({
        next: (res) => {
          console.log('Réponse backend :', res);
          this.form.reset();
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Erreur lors de la demande :', err);
          this.isLoading = false;
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  calculateDuration(): number {
    const debutStr = this.form.get('dateDebut')?.value;
    const finStr = this.form.get('dateFin')?.value;

    if (!debutStr || !finStr) {
      return 0;
    }

    const debut = new Date(debutStr);
    const fin = new Date(finStr);
    const diff = fin.getTime() - debut.getTime();

    return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1; // Inclut le jour de début
  }

}
