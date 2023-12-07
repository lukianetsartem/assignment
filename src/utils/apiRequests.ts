import { Modes } from 'interfaces';
import apiUrls from 'enums/apiUrls';
import fetchService from 'utils/fetch';

export const fetchModes = (): Promise<Modes> =>
  fetchService.get(apiUrls.models);
