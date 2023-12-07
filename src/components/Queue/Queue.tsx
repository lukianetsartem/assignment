import React from 'react';
import { State as Data } from 'reducers/queueReducer';
import styles from './Queue.module.scss';

interface Props {
  data: Data;
}

const Queue = ({ data }: Props) => {
  return (
    <div>
      <span>Hovered Cells</span>
      <div className={styles.main}>
        {data.map(({ row, col }, index) => (
          <div className={styles.item} key={index}>
            Row #{row} Col #{col}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Queue;
