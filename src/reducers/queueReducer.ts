export interface Item {
  row: number;
  col: number;
}

export type State = Item[];

export interface Action {
  type: 'add' | 'reset';
  payload?: Item;
}

function queueReducer(state: State, action: Action): State {
  if (action.type === 'add') {
    const { payload } = action;
    if (!payload) return state;
    return [...state, payload];
  }
  if (action.type === 'reset') {
    return [];
  }
  return state;
}

export default queueReducer;
