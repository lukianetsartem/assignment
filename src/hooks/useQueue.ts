import { useReducer, Dispatch, useEffect } from 'react';
import queueReducer, { Action, State } from 'reducers/queueReducer';

const useQueue = (
  gridSize: number,
): [queue: State, dispatch: Dispatch<Action>] => {
  const [queue, dispatch] = useReducer(queueReducer, []);

  useEffect(() => {
    dispatch({ type: 'reset' });
  }, [gridSize]);

  return [queue, dispatch];
};

export default useQueue;
