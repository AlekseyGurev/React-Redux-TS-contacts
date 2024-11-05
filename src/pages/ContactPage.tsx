import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactDto } from 'src/types/dto/ContactDto';
import { ContactCard } from 'src/components/ContactCard';
import { Empty } from 'src/components/Empty';
import { useAppSelector } from 'src/redux/hooks';

export const ContactPage = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const [contact, setContact] = useState<ContactDto>();
  const contactsState = useAppSelector((state) => state.contacts);

  useEffect(() => {
    setContact(() =>
      contactsState.find(({ id }: { id: ContactDto['id'] }) => id === contactId)
    );
  }, [contactId]);

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};
