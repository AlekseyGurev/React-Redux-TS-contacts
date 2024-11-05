import { DATA_CONTACT } from 'src/__data__';
import { ContactDto } from '../types/dto/ContactDto';

export const LOAD_DATA_ACTION = 'LOAD_DATA_ACTION';
export const LOAD_DATA_SUCCESS_ACTION = 'LOAD_DATA_SUCCESS_ACTION';
export const ERROR_LOAD_ACTION = 'ERROR_LOAD_ACTION';

export const SET_CONTACTS_DATA = 'SET_CONTACTS_DATA';

interface LoadDataAction {
  type: typeof LOAD_DATA_ACTION;
}

interface LoadDataSuccessAction {
  type: typeof LOAD_DATA_SUCCESS_ACTION;
}

interface ErrorLoadAction {
  type: typeof ERROR_LOAD_ACTION;
}

interface SetContactsDataAction {
  type: typeof SET_CONTACTS_DATA;
  payload: ContactDto[];
}

export function setContactsDataAction() {
  return {
    type: SET_CONTACTS_DATA,
    payload: DATA_CONTACT,
  };
}

export function loadContactsData() {
  return async (dispatch) => {
    dispatch({ type: LOAD_DATA_ACTION });

    const res = await fetch(
      'https://mocki.io/v1/96559462-738f-4702-93d8-deb5a5ff1152'
    );

    const data = await res.json();

    if (data.success) {
      dispatch({ type: LOAD_DATA_SUCCESS_ACTION });
      dispatch({ type: SET_CONTACTS_DATA, payload: DATA_CONTACT });
    } else {
      dispatch({ type: ERROR_LOAD_ACTION });
    }
  };
}

export type ProjectAction =
  | LoadDataAction
  | LoadDataSuccessAction
  | ErrorLoadAction
  | SetContactsDataAction;
