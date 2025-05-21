import { Pipe, PipeTransform } from '@angular/core';
import {UserRole} from "../models/Enums/user-role";

@Pipe({standalone: true, name: 'roleName'})
export class RoleNamePipe implements PipeTransform {
  transform(value: UserRole): string {
    switch (value) {
      case UserRole.ROLE_RESPONSABLE: return 'Responsable';
      case UserRole.ROLE_EMPLOYEE: return 'Employé';
      default: return value;
    }
  }
}
