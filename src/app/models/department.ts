export class Department {
  id_dep: string ='';
  nom: string = '';
  etudiants: Etudiant[] = [];
  enseignants: Enseignant[] = [];
}

export class Etudiant {
  id_etu: string = '';
  nom: string = '';
  prenom: string = '';
}

export class Enseignant {
  id_ens: string = '';
  nom: string = '';
  prenom: string = '';
}
