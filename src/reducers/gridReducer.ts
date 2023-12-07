import generateGrid from 'utils/generateGrid';

export interface State {
  [key: string]: boolean;
}

export interface Action {
  type: 'hover' | 'reset';
  payload: {
    pos?: string;
    gridSize?: number;
  };
}

function gridReducer(state: State, action: Action): State {
  if (action.type === 'hover') {
    const { pos } = action.payload;
    if (!pos) return state;
    return {
      ...state,
      [pos]: !state[pos],
    };
  }
  if (action.type === 'reset') {
    const { gridSize } = action.payload;
    if (!gridSize) return state;
    return generateGrid(gridSize);
  }
  return state;
}

export default gridReducer;
