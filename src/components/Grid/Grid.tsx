import React from 'react';
import classNames from 'classnames';
import { cellSize } from 'enums';
import { State as Data } from 'reducers/gridReducer';
import styles from './Grid.module.scss';

interface Props {
  size: number;
  data: Data;
  handleMouseOver: (pos: string) => void;
}

const Grid = ({ size, data, handleMouseOver }: Props) => (
  <div className={styles.main} style={{ width: size * (cellSize + 1) }}>
    {Array.from(Object.keys(data)).map((pos) => (
      <div
        key={pos}
        className={classNames(styles.item, {
          [styles.itemHovered]: data[pos],
        })}
        onMouseOver={() => handleMouseOver(pos)}
        style={{ width: cellSize, height: cellSize }}
      />
    ))}
  </div>
);

export default Grid;
