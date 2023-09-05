import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  grade: yup.number().integer().required(),
  school_name: yup.string().required(),
  preferred_subjects: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
