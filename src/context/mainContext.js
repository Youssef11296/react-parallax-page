import {createContext, useReducer} from 'react';
import {reducer, initialState} from './reducers/mainReducer';
export const MainContext = createContext ({});

const ContextProvider = props => {
  const [state, dispatch] = useReducer (reducer, initialState);
  const value = {state, dispatch};
  return (
    <MainContext.Provider value={value}>{props.children}</MainContext.Provider>
  );
};

export default ContextProvider;
