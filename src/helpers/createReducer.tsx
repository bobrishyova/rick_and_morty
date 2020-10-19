import { DefineAction, TypeAction } from './types';

const initialState = {
  list: [],
  info: {},
  item: {},
  loading: false,
};

export default (listAction: DefineAction, itemAction: DefineAction) => (
  state = initialState,
  action: TypeAction,
) => {
  switch (action.type) {
    case listAction.FETCH:
      return {
        ...state,
        loading: true,
      };
    case listAction.SUCCESS:
      return {
        ...state,
        list: action.payload.results,
        info: action.payload.info,
        loading: false,
      };
    case listAction.ERROR:
      return {
        ...state,
        loading: false,
      };
    case itemAction.FETCH:
      return {
        ...state,
        loading: true,
      };
    case itemAction.SUCCESS:
      return {
        ...state,
        item: action.payload,
        loading: false,
      };
    case itemAction.ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
