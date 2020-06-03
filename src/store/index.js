import { createStore } from 'redux';

import rootReducer from './reducers';  //reducer principal, por isso o nome

const store = createStore(rootReducer);

export default store;
