import * as yup from 'yup';

export const playerValidationSchema = yup.object().shape({
  notes: yup.string(),
  user_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable().required(),
});
