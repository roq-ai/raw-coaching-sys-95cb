import { EnrollmentInterface } from 'interfaces/enrollment';
import { TutorInterface } from 'interfaces/tutor';
import { InstituteInterface } from 'interfaces/institute';
import { GetQueryInterface } from 'interfaces';

export interface RenamedclassInterface {
  id?: string;
  subject: string;
  date_time: any;
  duration: number;
  tutor_id: string;
  institute_id: string;
  created_at?: any;
  updated_at?: any;
  enrollment?: EnrollmentInterface[];
  tutor?: TutorInterface;
  institute?: InstituteInterface;
  _count?: {
    enrollment?: number;
  };
}

export interface RenamedclassGetQueryInterface extends GetQueryInterface {
  id?: string;
  subject?: string;
  tutor_id?: string;
  institute_id?: string;
}
