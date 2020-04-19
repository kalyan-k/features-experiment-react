import React, { createContext, useReducer, useContext } from 'react'
import { Map } from 'immutable';

let GlobalStateContext: any;
let GlobalDispatchContext: any;

export const createGlobalState = (initialState: any) => {
    GlobalStateContext = createContext(Map(initialState));
    GlobalDispatchContext = createContext<any>(undefined);

    const GlobalStateProvider = ({ children }: any) => {
        const [state, update] = useReducer(
            ((state: any, action: any) => {
                return !!action.updatePath ? (Map(state).setIn(action.updatePath.split('.'), action.updateValue).toJS()) :
                    (action.updateValue);
            }),
            initialState);
        return (
            <GlobalStateContext.Provider value={state}>
                <GlobalDispatchContext.Provider value={update}>
                    {children}
                </GlobalDispatchContext.Provider>
            </GlobalStateContext.Provider>
        );
    }

    return GlobalStateProvider;

}

export const useGlobalState = () => {
    return {
        GlobalState: useContext<any>(GlobalStateContext),
        GlobalDispatch: useContext<any>(GlobalDispatchContext)
    }
}
