import * as yup from 'yup';

export const renamedclassValidationSchema = yup.object().shape({
  subject: yup.string().required(),
  date_time: yup.date().required(),
  duration: yup.number().integer().required(),
  tutor_id: yup.string().nullable().required(),
  institute_id: yup.string().nullable().required(),
});
