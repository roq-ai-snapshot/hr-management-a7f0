import * as yup from 'yup';

export const vacationValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  note: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
