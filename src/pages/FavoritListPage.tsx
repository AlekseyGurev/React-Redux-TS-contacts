import { memo, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { ContactDto } from 'src/types/dto/ContactDto';
import { useAppSelector } from 'src/redux/hooks';

export const FavoritListPage = memo(() => {
  const [contacts, setContacts] = useState<ContactDto[]>([]);
  const contactsState = useAppSelector((state) => state.contacts);
  const favoriteContactsState = useAppSelector((state) => state.favorite);
  useEffect(() => {
    setContacts(() =>
      contactsState.filter(({ id }: { id: ContactDto['id'] }) =>
        favoriteContactsState.includes(id)
      )
    );
  }, [contactsState, favoriteContactsState]);
  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
