import {Role} from "../models/role";

export class User {
  id?: number;
  username: string;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  roles: Role[] = [];

  constructor(
    id?: number,
    username: string = '',
    nom: string = '',
    prenom: string = '',
    email: string = '',
    password: string = '',
    roles: Role[] = []
  ) {
    this.id = id;
    this.username = username;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
    this.roles = roles;
  }
}
