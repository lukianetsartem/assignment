import { State } from 'reducers/gridReducer';

function generateGrid(n: number): State {
  const state: State = {};
  for (let i = 1; i <= Math.pow(n, 2); i++) {
    state[String(i)] = false;
  }
  return state;
}

export default generateGrid;
