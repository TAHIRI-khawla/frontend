/*import {User} from "../services/user";

export interface Employe extends User {
  poste: string;
  dateEmbauche: Date | string;
  salaire: number;
  departement: string;
  adresse?: string;
  telephone?: string;
  cin?: string;
  dateNaissance?: Date | string;
}  */

import { User } from './user.model'; // ✅ lien correct vers User
import { Role } from './role'; // si vous utilisez un enum Role
//import {User} from './user.model'
export interface Employe extends User {
  poste: string;
  dateEmbauche: Date | string;
  salaire: number;
  departement: string;
  adresse?: string;
  telephone?: string;
  cin?: string;
  dateNaissance?: Date | string;
  user: User;
}

