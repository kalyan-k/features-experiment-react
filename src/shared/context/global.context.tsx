import React, { createContext, useReducer, useContext } from 'react'
import { setIn, Map, updateIn, fromJS } from 'immutable';

let GlobalStateContext: any;
let GlobalDispatchContext: any;

export const createGlobalState = (initialState: any) => {
    GlobalStateContext = createContext(Map(initialState));
    GlobalDispatchContext = createContext<any>(undefined);


    const GlobalStateProvider = ({ children }: any) => {
        //const [state, update] = useReducer((state: any, newValue: any) => ({ ...state, ...newValue }), initialState);
        const [state, update] = useReducer(
            ((state: any, action: any) => {
                //state = updateIn(state, action.updatePath.split('.'), action.newValue)
                //state = Map(state).setIn(action.updatePath.split('.'), action.newValue).toJS();
                return (Map(state).setIn(action.updatePath.split('.'), action.newValue).toJS())
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
    //let GlobalState: any, GlobalDispatch: any;
    return {
        GlobalState: useContext<any>(GlobalStateContext),
        GlobalDispatch: useContext<any>(GlobalDispatchContext)
    }
}
