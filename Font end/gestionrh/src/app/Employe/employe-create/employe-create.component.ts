import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Role} from "../../models/role";
import {EmployeService} from "../../services/employe-service";
import {RoleService} from "../../services/role-service";
import {Employe} from "../../models/employe";


@Component({
  selector: 'app-employe-create',
  templateUrl: './employe-create.component.html'
})
export class EmployeCreateComponent implements OnInit {
  employeForm: FormGroup;
  roles: Role[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private employeService: EmployeService,
    private roleService: RoleService,
    private router: Router
  ) {
    this.employeForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4)]],
      cin:['', Validators.required],
      telephone:[''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      poste: ['', Validators.required],
      departement: ['', Validators.required],
      dateEmbauche: ['', Validators.required],
      salaire: ['', [Validators.required, Validators.min(0)]],
      selectedRoles: [[]]
    });
  }

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.roleService.getAllRoles().subscribe(
      roles => this.roles = roles,
      error => this.errorMessage = 'Erreur lors du chargement des rôles'
    );
  }

  onSubmit(): void {
    if (this.employeForm.valid) {
      this.isLoading = true;
      const formValue = this.employeForm.value;

      const newEmploye: Employe = {
        ...formValue,
        roles: formValue.selectedRoles.map((roleId: number) =>
          this.roles.find(r => r.id === roleId)!
        )
      };

      this.employeService.createEmploye(newEmploye).subscribe({
        next: () => {
          this.router.navigate(['/employes']);
        },
        error: (err) => {
          this.errorMessage = err.error.message || 'Erreur lors de la création';
          this.isLoading = false;
        }
      });
    }
  }
}
