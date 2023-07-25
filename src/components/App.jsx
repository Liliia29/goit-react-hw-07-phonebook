
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import {
  Container,
  Title,
  ContactsTitle,
  FilterTitle,
} from './App.styled';

export const App = () => {
  return (
    <>
    <Container>
      <Title>Phonebook</Title>
      <ContactForm  />
      <ContactsTitle>Contacts</ContactsTitle>
      <FilterTitle>Find contacts by name</FilterTitle>
      <Filter  />
      <ContactList />
      </Container>
      </>
  );
};
