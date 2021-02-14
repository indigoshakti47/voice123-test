import { createStore } from 'redux';
import reducer from './reducer';

const initialStore = {
};

export const store = createStore(
  reducer,
  initialStore
);