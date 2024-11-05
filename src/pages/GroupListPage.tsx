import { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { useAppSelector } from 'src/redux/hooks';

import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

export const GroupListPage = memo(() => {
  const groupContactsState = useAppSelector((state) => state.groups);
  return (
    <Row xxl={4}>
      {groupContactsState &&
        groupContactsState.map((groupContacts: GroupContactsDto) => (
          <Col key={groupContacts.id}>
            <GroupContactsCard groupContacts={groupContacts} withLink />
          </Col>
        ))}
    </Row>
  );
});
