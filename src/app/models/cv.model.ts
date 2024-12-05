export interface Cv {
  id: number;
  nom: string;
  prenom: string;
  job: string;
  image:string;
  description: string;
  citation: string; // Propriété requise
  motsCle: string;  // Propriété requise
}