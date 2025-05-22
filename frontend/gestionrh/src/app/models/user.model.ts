import { Role } from './role';

export interface User {
  id: number;             // ← ajoutez ceci
  username: string;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  roles: Role[];          // ← au lieu de role: string
}
