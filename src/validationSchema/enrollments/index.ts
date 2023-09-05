import * as yup from 'yup';

export const enrollmentValidationSchema = yup.object().shape({
  enrollment_date: yup.date().required(),
  status: yup.string().required(),
  class_id: yup.string().nullable().required(),
  student_id: yup.string().nullable().required(),
});
