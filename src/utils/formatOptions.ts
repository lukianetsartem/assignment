import { Modes, Options } from 'interfaces';

const formatOptions = (modes: Modes): Options =>
  modes.map(({ name, field }) => ({
    label: name,
    value: field,
  }));

export default formatOptions;
