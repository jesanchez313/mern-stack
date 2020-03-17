export interface IAction {
  type: string;
  payload?: any;
}

export interface IFetchState {
  loading: boolean;
  error: any;
  data: any;
}

export interface IFetchStatus {
  isLoading: boolean;
  error: boolean;
}

export interface IState {
  user: IUser | any;
}

export interface IValue {
  value: string;
}

export interface IUser {
  id: string;
  username: string;
  photos: [IValue];
}

export interface IErrorComponent {
  textError?: string;
}

export interface IForm {
  defaultName?: string;
  defaultDescription?: string;
  defaultPictureHelp?: string;
}

export interface IProfile {
  _id: string;
  name: string;
  description: string;
  picture: string;
  username: string;
  refetch: any;
}
