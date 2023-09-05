import { EnrollmentInterface } from 'interfaces/enrollment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  grade: number;
  school_name: string;
  preferred_subjects: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  enrollment?: EnrollmentInterface[];
  user?: UserInterface;
  _count?: {
    enrollment?: number;
  };
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  school_name?: string;
  preferred_subjects?: string;
  user_id?: string;
}
