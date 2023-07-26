import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Button, NoContacts } from './ContactList.styled';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [contactToDeleteId, setContactToDeleteId] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!visibleContacts?.length && !error & !isLoading) {
    return <NoContacts>No contacts added yet.</NoContacts>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <List>
      {visibleContacts.map(({ id, name, number }, idx) => (
        <ListItem key={id}>
          <div>{idx + 1}.</div>
          {name}: {number}
          <Button
            onClick={() => {
              setContactToDeleteId(id);
              dispatch(deleteContact(id)).then(() => {
                setContactToDeleteId(null);
              });
            }}
            disabled={isLoading && contactToDeleteId === id}
          >
            {contactToDeleteId === id && <Loader />}
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
