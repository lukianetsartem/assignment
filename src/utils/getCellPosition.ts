import { Item } from 'reducers/queueReducer';

function getCellPosition(gridSize: number, pos: number): Item {
  const row = Math.floor((pos - 1) / gridSize) + 1;
  const col = ((pos - 1) % gridSize) + 1;
  return { row, col };
}

export default getCellPosition;
