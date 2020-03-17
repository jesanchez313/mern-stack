import React from "react";
import { IState, IAction } from "config/interfaces";

const user: any = localStorage.getItem("user");

if (user === undefined) {
  window.localStorage.removeItem("creating");
  window.localStorage.removeItem("user");
  window.location.href = "/";
}

const userObj: any = JSON.parse(user);

const initialState: IState = {
  user: userObj || null
};

export const Store = React.createContext<IState | any>(initialState);

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "SAVE_USER":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

/* istanbul ignore next */
export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
