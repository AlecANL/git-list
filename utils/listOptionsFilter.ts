import { TListOptions } from '../types/list-options.types';

export const typeList: TListOptions[] = [
  {
    name: 'all',
    value: 'all',
  },
  {
    name: 'sources',
    value: 'sources',
  },
  {
    name: 'forks',
    value: 'forks',
  },
  {
    name: 'archived',
    value: 'archived',
  },
  {
    name: 'mirrors',
    value: 'mirrors',
  },
];

export const languagesList: TListOptions[] = [
  {
    name: 'All',
    value: '',
  },
  {
    name: 'CSS',
    value: 'css',
  },
  {
    name: 'JavaScript',
    value: 'javascript',
  },
  {
    name: 'typescript',
    value: 'typescript',
  },
  {
    name: 'HTML',
    value: 'html',
  },
];

export const sortList: TListOptions[] = [
  {
    name: 'last updated',
    value: 'last_updated',
  },
  {
    name: 'name',
    value: 'name',
  },
  {
    name: 'stars',
    value: 'stars',
  },
];
