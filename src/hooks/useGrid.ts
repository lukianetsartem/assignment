import { useEffect, useReducer, Dispatch } from 'react';
import gridReducer, { Action, State } from 'reducers/gridReducer';
import generateGrid from 'utils/generateGrid';

const useGrid = (
  gridSize: number,
): [grid: State, dispatch: Dispatch<Action>] => {
  const [grid, dispatch] = useReducer(gridReducer, generateGrid(gridSize));

  useEffect(() => {
    dispatch({ type: 'reset', payload: { gridSize } });
  }, [gridSize]);

  return [grid, dispatch];
};

export default useGrid;
