import { ContactDto } from 'src/types/dto/ContactDto';
import { ProjectAction, SET_CONTACTS_DATA } from './actions';

const initialState: ContactDto[] = [];

export function contactsReducer(state = initialState, action: ProjectAction) {
  switch (action.type) {
    case SET_CONTACTS_DATA:
      return action.payload;
    default:
      break;
  }

  return state;
}
