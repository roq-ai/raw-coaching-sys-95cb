import { RenamedclassInterface } from 'interfaces/renamedclass';
import { StudentInterface } from 'interfaces/student';
import { GetQueryInterface } from 'interfaces';

export interface EnrollmentInterface {
  id?: string;
  class_id: string;
  student_id: string;
  enrollment_date: any;
  status: string;
  created_at?: any;
  updated_at?: any;

  Renamedclass?: RenamedclassInterface;
  student?: StudentInterface;
  _count?: {};
}

export interface EnrollmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  class_id?: string;
  student_id?: string;
  status?: string;
}
