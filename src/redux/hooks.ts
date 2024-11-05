import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ProjectAction } from './actions';
import { RootState } from './store';

export const useAppDispatch = useDispatch<
  ThunkDispatch<Store, void, ProjectAction>
>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
