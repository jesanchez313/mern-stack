export interface IAction {
  type: string;
  payload?: any;
}

export interface IFetchState {
  loading: boolean;
  error: any;
  data: any;
}
