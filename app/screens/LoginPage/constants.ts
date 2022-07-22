import * as Yup from 'yup';

export const INITIAL_AUTH_VALUES = {
  username: '',
  password: '',
};

export const VALIDATION_AUTH_VALUES = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});
