import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Role} from "../../models/role";
import {EmployeService} from "../../services/employe-service";
import {RoleService} from "../../services/role-service";
import {Employe} from "../../models/employe";


@Component({
  selector: 'app-employe-update',
  templateUrl: './employe-update.component.html'
})
export class EmployeUpdateComponent implements OnInit {
  employeForm: FormGroup;
  employeId!: number;
  roles: Role[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private employeService: EmployeService,
    private roleService: RoleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employeForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      poste: ['', Validators.required],
      departement: ['', Validators.required],
      dateEmbauche: ['', Validators.required],
      salaire: ['', [Validators.required, Validators.min(0)]],
      selectedRoles: [[]]
    });
  }

  ngOnInit(): void {
    this.employeId = +this.route.snapshot.params['id'];
    this.loadRoles();
    this.loadEmploye();
  }

  loadRoles(): void {
    this.roleService.getAllRoles().subscribe(
      roles => this.roles = roles,
      error => this.errorMessage = 'Erreur lors du chargement des rôles'
    );
  }

  loadEmploye(): void {
    this.isLoading = true;
    this.employeService.getEmployeById(this.employeId).subscribe({
      next: (employe) => {
        this.employeForm.patchValue({
          nom: employe.nom,
          prenom: employe.prenom,
          username: employe.username,
          email: employe.email,
          poste: employe.poste,
          departement: employe.departement,
          dateEmbauche: this.formatDate(employe.dateEmbauche),
          salaire: employe.salaire,
          selectedRoles: employe.roles?.map(role => role.id) || []
        });
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des données';
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.employeForm.valid) {
      this.isLoading = true;
      const formValue = this.employeForm.value;

      const updatedEmploye: Employe = {
        ...formValue,
        roles: this.roles.filter(role =>
          formValue.selectedRoles.includes(role.id)
        ),
        dateEmbauche: new Date(formValue.dateEmbauche).toISOString()
      };

      this.employeService.updateEmploye(this.employeId, updatedEmploye).subscribe({
        next: () => {
          this.router.navigate(['/employes']);
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Erreur lors de la mise à jour';
          this.isLoading = false;
        }
      });
    }
  }

  private formatDate(date: string | Date): string {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }
}
