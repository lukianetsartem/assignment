import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Select, { SingleValue } from 'react-select';
import { Option } from 'interfaces';
import useGrid from 'hooks/useGrid';
import useQueue from 'hooks/useQueue';
import formatOptions from 'utils/formatOptions';
import getCellPosition from 'utils/getCellPosition';
import { fetchModes } from 'utils/apiRequests';
import Grid from 'components/Grid/Grid';
import Queue from 'components/Queue/Queue';
import styles from './App.module.scss';
import Button from './components/Button/Button';

const App = () => {
  const { data, isLoading } = useQuery('modes', fetchModes);
  const [gridSize, setGridSize] = useState<number>(0);
  const [selected, setSelected] = useState<SingleValue<Option>>();
  const [grid, dispatch] = useGrid(gridSize);
  const [queue, dispatchQueue] = useQueue(gridSize);

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>No data</div>;

  const handleMouseOver = (pos: string) => {
    dispatch({ type: 'hover', payload: { pos } });
    dispatchQueue({
      type: 'add',
      payload: getCellPosition(gridSize, Number(pos)),
    });
  };

  const options = formatOptions(data);

  return (
    <>
      <div className={styles.controls}>
        <Select
          options={options}
          value={selected}
          onChange={(choice) => setSelected(choice)}
          placeholder="Pick mode"
        />
        <Button onClick={() => setGridSize(selected?.value || 0)}>Start</Button>
      </div>
      {!!gridSize && (
        <div className={styles.content}>
          <Grid handleMouseOver={handleMouseOver} size={gridSize} data={grid} />
          <Queue data={queue} />
        </div>
      )}
    </>
  );
};

export default App;
