import * as yup from 'yup';

export const tutorValidationSchema = yup.object().shape({
  experience: yup.number().integer().required(),
  qualification: yup.string().required(),
  specialization: yup.string().required(),
  availability: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
