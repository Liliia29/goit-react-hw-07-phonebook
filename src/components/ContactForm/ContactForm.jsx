import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsLoading, selectVisibleContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Button, Input, Label, StyledForm, StyledError } from './ContactForm.styled';
import { Loader } from 'components/Loader';

const defaultValues = {
  name: '',
  number: '',
};

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string()
  .required('Phone numder is required')
  .matches(
    /^[\d()+-]+$/,
    'Phone number must contain only 0-9 and these symbols: ( ) - +'
  )
  .min(8, 'Phone number must be at least 8 characters'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const [determineAddBtn, setDetermineAddBtn] = useState(false);

  const handleSubmitForm = (values, action) => {
    setDetermineAddBtn(true);
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInContacts) {
      return toast.warn(`${values.name} is already in contacts.`);
    }

    dispatch(addContact(values)).then(() => {
      setDetermineAddBtn(false);
    });
    action.resetForm();
  };

  return (
    <Formik 
    initialValues={defaultValues} 
    onSubmit={handleSubmitForm}
    validationSchema={schema}>
      <StyledForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <StyledError name="name" component="div" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <StyledError name="number" component="div" />
        </Label>
        <Button type="submit" disabled={isLoading && determineAddBtn}>
          {isLoading && determineAddBtn && <Loader />}
          Add Contact
          </Button>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
