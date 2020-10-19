interface TypeObject {
  list: Array<object>;
  info: object;
  item: object;
  loading: boolean;
}

export interface TypeState {
  character: TypeObject;
  episode: TypeObject;
  location: TypeObject;
}

export interface MapStateProps {}

export interface MapDispatchProps {}
