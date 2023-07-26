import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsLoading, selectVisibleContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
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
  const contacts = useSelector(getContacts);

  const handleSubmitForm = (values, action) => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInContacts) {
      return toast.warn(`${values.name} is already in contacts.`);
    }

    dispatch(addContact(values));
    action.resetForm();
  };

  return (
    <Formik initialValues={defaultValues} onSubmit={handleSubmitForm}>
      <StyledForm>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
        </Label>
        <Button type="submit">Add Contact</Button>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
