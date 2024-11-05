import {
  LOAD_DATA_ACTION,
  LOAD_DATA_SUCCESS_ACTION,
  ERROR_LOAD_ACTION,
  ProjectAction,
} from './actions';

const initialState = {
  loading: false,
};

export function loadDataReducer(state = initialState, action: ProjectAction) {
  switch (action.type) {
    case LOAD_DATA_ACTION:
      return {
        loading: true,
      };

    case LOAD_DATA_SUCCESS_ACTION:
      return {
        loading: false,
      };

    case ERROR_LOAD_ACTION:
      return {
        loading: false,
      };

    default:
      break;
  }

  return state;
}
