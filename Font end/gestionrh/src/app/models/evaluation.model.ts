import  {Employe} from "./employe";

export interface Evaluation {
  id?: number;
  score: number;
  comments: string;
  employe?: Employe;
}
