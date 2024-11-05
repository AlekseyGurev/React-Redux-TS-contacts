import { createStore, combineReducers, applyMiddleware } from 'redux';
import { contactsReducer } from './contactsReducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { groupsReducer } from './groupsReducer';
import { favoriteContactsReducer } from './favoriteContactsReducer';
import { loadDataReducer } from './loadDataReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groups: groupsReducer,
  favorite: favoriteContactsReducer,
  loadData: loadDataReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export type RootState = ReturnType<typeof rootReducer>;
