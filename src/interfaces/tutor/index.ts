import { RenamedclassInterface } from 'interfaces/renamedclass';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TutorInterface {
  id?: string;
  experience: number;
  qualification: string;
  specialization: string;
  availability: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  Renamedclass?: RenamedclassInterface[];
  user?: UserInterface;
  _count?: {
    Renamedclass?: number;
  };
}

export interface TutorGetQueryInterface extends GetQueryInterface {
  id?: string;
  qualification?: string;
  specialization?: string;
  availability?: string;
  user_id?: string;
}
